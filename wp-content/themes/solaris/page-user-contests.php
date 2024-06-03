<?php
add_action('wp_enqueue_scripts', 'add_solaris_user_contests', 10);
?>
<?php get_template_part('template-parts/cabinet-user/user-header') ?>
<?php get_template_part('template-parts/cabinet-user/user-contests') ?>

<?php wp_footer(); ?>
