<?php
$arr = [
  [
    "title" => "Название направления",
  ],
  [
    "title" => "Название направления 1",
  ],
  [
    "title" => "Название направления 2",
  ],
  [
    "title" => "Название направления 3",
  ],
  [
    "title" => "Название направления 4",
  ],
  [
    "title" => "Название направления 5",
  ],
  [
    "title" => "Название направления 6",
  ],
  [
    "title" => "Название направления 7",
  ],
  [
    "title" => "Название направления 8",
  ],
  [
    "title" => "Название направления 9",
  ],


];
wp_localize_script('solaris_main_trend', 'arrTrend', $arr);
?>

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
      </div>
    </div>
    <div class="trend-container-img">
      <img src="<?php echo get_template_directory_uri() ?>/assets/image/trend/trend.png" class="trend-main-img" alt="img" />
    </div>
  </div>
</section>