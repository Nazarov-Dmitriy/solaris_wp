<!doctype html>
<html lang="ru">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div class="root cabinet-container">
        <div class="cabinet-header__container">
            <div class="cabinet-header">
                <div class="cabinet-header__info">
                    <a class="cabinet-header__logo-wraper" href="/cabinet-student">
                        <img src="<?php echo get_template_directory_uri() ?>/assets/icon/cabinet-header/logo_cabinet.svg" class="cabinet-header__logo" alt="
                        icon-logo">
                        <p class="cabinet-header__logo-text p2-phone">Кабинет ученика</p>
                    </a>
                    <div class="cabinet-header__student-info">
                        <div class="cabinet-header__notification">
                            <p class="cabinet-header__notification-count p2-phone">1</p>
                            <img src="<?php echo get_template_directory_uri() ?>/assets/icon/cabinet-header/bell.svg" alt="icon-bellt">
                        </div>
                        <p class="cabinet-header__student-initials">АИ</p>
                        <img src="<?php echo get_template_directory_uri() ?>/assets/icon/cabinet-header/pointer_down.svg" alt="icon-poiner-down">
                    </div>
                </div>
                <div class="cabinet-header__nav">
                    <ul class="cabinet-header__list">
                        <li class="botton"><a href='/user-contests' class="cabinet-header__link"><img src="<?php echo get_template_directory_uri() ?>/assets/icon/cabinet-header/contest.svg" alt="icon-contest">Конкурсы</a></li>
                        <li class="botton"><a href='/cabinet-shop' class="cabinet-header__link"><img src="<?php echo get_template_directory_uri() ?>/assets/icon/cabinet-header/сart.svg" alt="icon-shop">Магазин</a>
                        </li>
                        <li class="botton"><a href='/cabinet-user-sales' class="cabinet-header__link"><img src="<?php echo get_template_directory_uri() ?>/assets/icon/cabinet-header/сart.svg" alt="icon-cart">Покупки</a></li>
                    </ul>
                </div>
            </div>
        </div>