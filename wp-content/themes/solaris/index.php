<?php
add_action('wp_enqueue_scripts', 'add_script_main', 10);
get_header();
?>

<?php get_template_part('template-parts/main/intro') ?>
 <?php get_template_part('template-parts/main/about-solarik') ?>
<?php get_template_part('template-parts/main/about-working') ?>
 <?php get_template_part('template-parts/main/preview-shop') ?>
 <?php get_template_part('template-parts/main/trend') ?>
<?php get_template_part('template-parts/main/сontest-today') ?>
<?php get_template_part('template-parts/main/more-competitions') ?>
<?php get_template_part('template-parts/main/solaris-faq') ?>
<?php get_template_part('template-parts/main/reviews') ?>
<?php get_template_part('template-parts/main/feedback-form') ?>


<?php

get_footer();
