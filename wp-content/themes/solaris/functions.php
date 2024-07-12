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
    wp_register_script('user-header', get_template_directory_uri() . '/assets/js/user/header.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('user-cabinet', get_template_directory_uri() . '/assets/js/user/cabinet.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris_user_cabinet_portfolio', get_template_directory_uri() . '/assets/js/user/portfolio.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris_main_preview-shop', get_template_directory_uri() . '/assets/js/main/preview-shop.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris_main_trend', get_template_directory_uri() . '/assets/js/main/trend.js', [], '1.0', [
        'in_footer' => true,
    ]);
    wp_register_script('solaris_main_сontest_today', get_template_directory_uri() . '/assets/js/main/сontest-today.js', [], '1.0', [
        'in_footer' => true,
    ]);
}

add_action('wp_enqueue_scripts', 'solaris_theme_scripts');

add_filter("script_loader_tag", "add_module_to_my_script", 10, 3);

function add_module_to_my_script($tag, $handle, $src)
{
    if ("solaris-main" === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    } else if ("solaris-user-cabinet-contests" === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    } else if ("solaris-user-cabinet-shop" === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    } else if ("solaris_user_cabinet_portfolio" === $handle) {
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
    wp_enqueue_script("solaris_main_preview-shop");
    wp_enqueue_script("solaris_main_trend");
    wp_enqueue_script("solaris_main_сontest_today");
}

function add_script_user_cabinet_shop()
{
    wp_enqueue_script("solaris-user-cabinet-shop");
    wp_enqueue_script("user-header");
}

function add_solaris_user_contests()
{
    wp_enqueue_script("solaris-user-cabinet-contests");
    wp_enqueue_script("user-header");
}

function add_solaris_user_portfolio(){
    wp_enqueue_script("solaris_user_cabinet_portfolio");
    wp_enqueue_script("user-header");
}

function add_solaris_user_cabinet()
{
    wp_enqueue_script("user-header");
    wp_enqueue_script("user-cabinet");
}

function console_log($data)
{ // сама функция
    if (is_array($data) || is_object($data)) {
        echo ("<script>console.log('php_array: " . json_encode($data) . "');</script>");
    } else {
        echo ("<script>console.log('php_string: " . $data . "');</script>");
    }
}

// Функция перенаправления после неудачной авторизации
function custom_login_fail( $username ) {
    $referrer = $_SERVER['HTTP_REFERER'];  // где произошла попытка входа
    if ( !empty($referrer) && !strstr($referrer,'wp-login') && !strstr($referrer,'wp-admin') ) {
       wp_redirect( $referrer . 'login_error=true' );  // добавляем параметр ошибки
       exit;
    }
 }
 add_action( 'wp_login_failed', 'custom_login_fail' );
 
 // Функция для изменения сообщений об ошибках и добавления проверки пустых полей
 function custom_authenticate_error_message( $user, $password ) {
     // Проверяем, пусты ли поля логина и пароля
     if ( empty( $user ) || empty( $password ) ) {
         // Возвращаем ошибку, если поля пусты
         return new WP_Error( 'empty_fields', 'Логин и пароль не могут быть пустыми.' );
     }
     return $user;
 }
 add_filter( 'authenticate', 'custom_authenticate_error_message', 99999, 2 );
 
 // JavaScript для отображения сообщения об ошибке
 function custom_login_alert() {
     if ( isset( $_GET['login_error'] ) ) {
         ?>
         <script type="text/javascript">
         alert('Ошибка авторизации: Пожалуйста, проверьте введенные данные.');
         </script>
         <?php
     }
 }
 add_action( 'wp_footer', 'custom_login_alert' );
 