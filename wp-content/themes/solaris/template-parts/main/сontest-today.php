<?php
$arr = [];
wp_localize_script('solaris_main_сontest_today', 'arrContestToday', $arr);
?>

<section>
  <div class="contest" id="contest">
    <h2 class="contest__title h2">Конкурсы сегодняшнего дня</h2>
    <div class="contest-container">
    <?php
$taxonomy = 'category'; // Используем'post_tag' для рубрики "tags"
$parent_term_id = 4; // ID родительской рубрики

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 6, // Вывод 6 последних записей
    'orderby' => 'date', // Сортировка по дате
    'order' => 'DESC', // От новых к старым
    'tax_query' => array(
        array(
            'taxonomy' => $taxonomy,
            'field' => 'term_id',
            'terms' => $parent_term_id,
            'include_children' => true // Включает записи из всех подрубрик
        ),
    ),
);

$query = new WP_Query($args);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        $post_terms = get_the_terms(get_the_ID(), $taxonomy);
        $post_term_name = '';
        if ($post_terms && !is_wp_error($post_terms)) {
            $post_term_names = wp_list_pluck($post_terms, 'name');
            $post_term_name = join(', ', $post_term_names);
        }

        echo '<div class="item-container">';
        echo '<div class="contest__item">';
        echo '<div class="contest__item-wraper">';
        echo '<p class="contest__item-subtitle p1">' . get_the_title() . '</p>';
        echo '<p class="contest__item-publication p2"> ' . get_the_date() . '</p></div>';
        echo '<svg class="contest__item-btn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1F2A3E"></rect>
                <path d="M14 22L20 16L14 10" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>';
        echo '<div class="contest-content"><h3 class="contest-content__title h3"><a href="' . get_permalink() . ' "style="color: #FFFFFF;">' . get_the_title() . '</a></h3><div class="contest-content__subtitle">';
        echo '<p class="contest-content__subtitle-text p2">' . esc_html($post_term_name) . '</p>';
        echo '<p class="contest-content__subtitle-start p2">' . get_the_date() . '</p></div>';
        echo '<p class="contest-content__description p2">' . wp_trim_words(get_the_content(), 20, '<a href="' . get_permalink() . ' "style="color: #2f497a;">...    читать далее</a>') . '</p></div></div>';
    }
    wp_reset_postdata(); // Сброс после запроса
} else {
    echo 'Записей не найдено.';
}
?>

    </div>
  </div>
</section>