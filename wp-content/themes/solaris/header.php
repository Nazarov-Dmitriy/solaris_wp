<!doctype html>
<html lang="ru">

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<div class="root">
		<header class="header">
			<div class="header-logo">
				<img src="<?php echo get_template_directory_uri() ?>/assets/icon/logo.svg" alt="logo">
			</div>
			<nav>
				<ul class="header__list">
					<li class="botton"><a href='#' class="header__link">О проекте</a></li>
					<li class="botton"><a href='#' class="header__link">Cолярики</a></li>
					<li class="botton"><a href='#' class="header__link">Магазин</a></li>
					<li class="botton"><a href='#' class="header__link">Направления</a></li>
					<li class="botton"><a href='#' class="header__link">Конкурсы</a></li>
					<li class="botton"><a href='#' class="header__link">Чат-бот</a></li>
					<li class="botton"><a href='#' class="header__link">Вопросы</a></li>
					<li class="botton"><a href='#' class="header__link">Отзывы</a></li>
					<li class="botton"><a href='#' class="header__link">Написать нам</a></li>
				</ul>
			</nav>
			<button class=" btn">ВХОД</button>
		</header>