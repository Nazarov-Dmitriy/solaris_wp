<?php
$arr = [
    [
        "title" => "Сертификат АНТИДВОЙКА",
        "price" => 200,
        "popular" => true,
        'id' => 1,
    ],
    [
        "title" => "Сертификат 2",
        "price" => 400,
        'id' => 2,
    ],
    [
        "title" => "Сертификат 3",
        "price" => 200,
        'id' => 3,

    ],
    [
        "title" => "Сертификат 4",
        "price" => 600,
        'id' => 4,

    ],
    [
        "title" => "Сертификат 5",
        "price" => 200,
        'id' => 5,

    ],
    [
        "title" => "Сертификат 6",
        "price" => 200,
        'id' => 6,

    ],
    [
        "title" => "Сертификат 7",
        "price" => 200,
        'id' => 7,

    ],
    [
        "title" => "Сертификат 8",
        "price" => 200,
        'id' => 8,

    ],
    [
        "title" => "Сертификат 9",
        "price" => 200,
        'id' => 9,

    ],
    [
        "title" => "Сертификат 8",
        "price" => 200,
        'id' => 10,

    ],
    [
        "title" => "Сертификат 9",
        "price" => 200,
        'id' => 11,

    ], [
        "title" => "Сертификат 8",
        "price" => 200,
        'id' => 12,

    ],
    [
        "title" => "Сертификат 9",
        "price" => 200,
        'id' => 13,

    ], [
        "title" => "Сертификат 8",
        "price" => 200,
        'id' => 14,

    ],
    [
        "title" => "Сертификат 9",
        "price" => 200,
        'id' => 15,

    ], [
        "title" => "Сертификат 8",
        "price" => 200,
        'id' => 16,
    ],
   
];

wp_localize_script('solaris-user-cabinet-shop', 'arr', $arr);

?>
<section class="shop-container">
    <div class="shop">
        <div class="shop-list">
        </div>
        <?php
        if ($arr) {
        ?>
            <div class="pagination__container user-shop">
                <ul class="pagination-list">
                    <li class="pagination-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </li>
                    <li class="pagination-dots--left h3">...</li>
                    <li class="pagination-dots--right h3">...</li>
                    <li class="pagination-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </li>
                </ul>
            </div>
        <?php  }  ?>
    </div>
</section>