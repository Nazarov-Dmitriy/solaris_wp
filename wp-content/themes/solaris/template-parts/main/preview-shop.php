<?php
$arr = [
    [
        "title" => "Сертификат АНТИДВОЙКА",
        "price" => 200,
        "popular" => true
    ],
    [
        "title" => "Сертификат 2",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 3",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 4",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 5",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 6",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 7",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 8",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 9",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 10",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 11",
        "price" => 200,
    ], [
        "title" => "Сертификат 12",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 13",
        "price" => 200,
    ], [
        "title" => "Сертификат 14",
        "price" => 200,
    ],
    [
        "title" => "Сертификат 15",
        "price" => 200,
    ], [
        "title" => "Сертификат 16",
        "price" => 200,
    ],
   
];
wp_localize_script('solaris_main_preview-shop', 'arr', $arr);

?>
<section class="previewshop" id="previewshop">
    <div class="previewshop__container">
        <div class="previewshop__description">
            <img class="previewshop__img" src="<?php echo get_template_directory_uri() ?>/assets/image/previewshop/solaric.png" alt="Солярик">
            <h2 class="previewshop__title h2">На что потратить Солярики?</h2>
            <p class="previewshop__text p2">Продукция магазина представляет собой награды и поощрения, помогающие учащимся ощутить удовлетворение от достижений и продемонстрировать прогресс в Лицее «Солярис». Надеемся, что эти вознаграждения будут вдохновлять и стимулировать их на дальнейшие успехи и развитие.</p>
        </div>
        <div class="previewshop__list">

        </div>
        <button class="previewshop-btn btn">Показать еще товары</button>
    </div>
</section>