<?php
/*
Template Name: Кабинет пользователя портфолио
*/
?>

<?php
add_action('wp_enqueue_scripts', 'add_solaris_user_portfolio', 10);
?>
<?php get_template_part('template-parts/cabinet-user/user-header') ?>
<?php get_template_part('template-parts/cabinet-user/user-portfolio') ?>

<?php wp_footer(); ?>
