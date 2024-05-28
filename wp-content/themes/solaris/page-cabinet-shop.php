<?php
add_action( 'wp_enqueue_scripts', 'add_script_user_cabinet_shop', 10 );

$id = get_query_var('id');
var_dump($id);

// if(!empty($id)){
    
//    echo "есть параметры"
// }
?>

<?php get_template_part('template-parts/cabinet-user/user-header') ?>
<?php get_template_part('template-parts/cabinet-user/user-shop-balance') ?>
<?php get_template_part('template-parts/cabinet-user/user-shop') ?>

<?php wp_footer(); ?>
