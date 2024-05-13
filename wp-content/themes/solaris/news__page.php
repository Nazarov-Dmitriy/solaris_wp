<?php
/*
Template Name: Новости
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
<?php get_footer(); ?>