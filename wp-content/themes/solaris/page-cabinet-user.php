<?php
/*
Template Name: Кабинет пользователя
*/
?>
<?php
add_action('wp_enqueue_scripts', 'add_solaris_user_cabinet', 10);
?>

<?php get_template_part('template-parts/cabinet-user/user-header') ?>
<?php get_template_part('template-parts/cabinet-user/user-profile') ?>
<?php get_template_part('template-parts/cabinet-user/user-footer') ?>

<?php wp_footer(); ?>
