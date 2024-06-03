<?php

function solaris_theme_scripts()
{
    wp_enqueue_style('solaris-style', get_stylesheet_uri());
    wp_register_script('solaris-main', get_template_directory_uri() . '/assets/js/script-main.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris-user-cabinet-shop', get_template_directory_uri() . '/assets/js/user/shop.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris-user-cabinet-contests', get_template_directory_uri() . '/assets/js/user/contests.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris-pagination', get_template_directory_uri() . '/assets/js/pagination.js', [], '1.0', [
        'in_footer' => true,
    ]);
}

add_action('wp_enqueue_scripts', 'solaris_theme_scripts');

add_filter("script_loader_tag", "add_module_to_my_script", 10, 3);

function add_module_to_my_script($tag, $handle, $src)
{
    console_log($handle);

    if ("solaris-main" === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    } else if ("solaris-user-cabinet-contests" === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}

add_action('init', 'wpset_register_param');

function wpset_register_param()
{
    global $wp;
    $wp->add_query_var('id');
}

function add_script_main()
{
    wp_enqueue_script("solaris-main");
}

function add_script_user_cabinet_shop()
{
    wp_enqueue_script("solaris-user-cabinet-shop");
}
function add_solaris_user_contests()
{
    wp_enqueue_script("solaris-user-cabinet-contests");
    // wp_enqueue_script("solaris-pagination");
}

function console_log($data)
{ // сама функция
    if (is_array($data) || is_object($data)) {
        echo ("<script>console.log('php_array: " . json_encode($data) . "');</script>");
    } else {
        echo ("<script>console.log('php_string: " . $data . "');</script>");
    }
}
