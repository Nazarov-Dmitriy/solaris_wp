<?php

function solaris_scripts()
{
	wp_enqueue_style('solaris-style', get_stylesheet_uri());
	wp_enqueue_script('solaris-scripts', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'solaris_scripts');
?>