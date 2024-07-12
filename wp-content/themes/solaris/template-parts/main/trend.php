<section class="trend-container" id="trend">
  <div class="trend">
    <div class="trend__content">
      <div class="trend__coin">
        <img src="<?php echo get_template_directory_uri() ?>/assets/image/trend/trend-coin.png" alt="" class="trend__coin-img" />
        <img src="<?php echo get_template_directory_uri() ?>/assets/image/trend/trend-coin.png" alt="" class="trend__coin-img" />
        <img src="<?php echo get_template_directory_uri() ?>/assets/image/trend/trend-coin.png" alt="" class="trend__coin-img" />
      </div>
      <p class="trend__text p1">
        В лицее каждую неделю проводятся конкурсы по различным направлениям,
        учитывая пожелания и инициативы всех участников образовательного
        процесса
      </p>
      <div class="trend__list">
        <h2 class="trend-subtitle ">Направления</h2>
        <?php
        $taxonomy = 'category'; // Используйте 'post_tag' для рубрики "tags"
        $parent_term_id = 4; // Установите ID родительской рубрики

        $child_terms = get_terms( array(
            'taxonomy' => $taxonomy,
            'parent'   => $parent_term_id,
            'hide_empty' => false,
        ) );

        if ( !empty($child_terms) && !is_wp_error($child_terms) ) {
            foreach ( $child_terms as $child_term ) {
                echo '<div class="trend-item"><img src="/wp-content/themes/solaris/assets/image/trend/trendName.png" alt="img-trend" class="trend-img"><a href="' . esc_url( get_term_link( $child_term ) ) . '" class="trend-item-btn h3">' . esc_html( $child_term->name ) . '</a></div>';
            }
        }
      ?>
      </div>
    </div>
    <div class="trend-container-img">
      <img src="<?php echo get_template_directory_uri() ?>/assets/image/trend/trend.png" class="trend-main-img" alt="img" />
    </div>
  </div>
</section>