<?php
/*
Template Name: Карточка товара
*/
?>

<?php
add_action('wp_enqueue_scripts', 'add_script_user_cabinet_shop_card');
?>
<?php get_template_part('template-parts/cabinet-user/user-header') ?>
<?php get_template_part('template-parts/cabinet-user/user-shop-card') ?>
 <?php wp_footer(); ?>
