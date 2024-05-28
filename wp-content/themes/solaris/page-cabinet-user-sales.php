<?php 
add_action( 'wp_enqueue_scripts', 'add_script_user_cabinet_shop_sales', 10 );
?>
<?php get_template_part('template-parts/cabinet-user/user-header') ?>
<?php get_template_part('template-parts/cabinet-user/user-shop-sales') ?>

<?php wp_footer(); ?>


