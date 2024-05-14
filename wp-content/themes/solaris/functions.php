<?php

function solaris_theme_scripts()
{
	wp_enqueue_style('solaris-style', get_stylesheet_uri());
	wp_enqueue_script('solaris-scripts', get_template_directory_uri() . '/assets/js/script.js',[], '1.0', [
		'in_footer' => true,
	]);
}

add_action('wp_enqueue_scripts', 'solaris_theme_scripts');

add_filter("script_loader_tag", "add_module_to_my_script", 10, 3);
function add_module_to_my_script($tag, $handle, $src)
{
    if ("solaris-scripts" === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    }

    return $tag;
}
