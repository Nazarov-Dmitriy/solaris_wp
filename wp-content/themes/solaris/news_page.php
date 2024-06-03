<?php
/*
Template Name: Конкурсы
Template Post Type: post, page, product
*/
?>
<?php get_header(); ?>
<section>
     <div>
          <br>
          <h2><?php the_title(); ?></h2>
          <br>
          <?php the_content(); ?>
          <br>
     </div>
</section>
<section>
<?php
     include 'bd_config.php';
?>
<?php
     include 'm_user_list.php';
?>
</section>
<?php get_footer(); ?>