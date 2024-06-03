  <?php
    $infoBuyItemInfo = [
        [
            "name" => "Антидвойка",
            "number" => "№ 2598",
            "text" => "Для активации покажи эту карточку учителю",
            "img" => "/assets/image/cabinet-shop/pic.png",
        ],
        [
            "name" => "Значок",
            "number" => "№ 3459864",
            "text" => "  1 корпус - кабинет В 2012 корпус - кабинет В 208",
            "img" => "/assets/image/cabinet-shop/icon.png",
        ],
        [
            "name" => "Значок",
            "number" => "№ 3459864",
            "text" => "  1 корпус - кабинет В 2012 корпус - кабинет В 208",
            "img" => "/assets/image/cabinet-shop/icon.png",
        ],
        [
            "name" => "Значок",
            "number" => "№ 3459864",
            "text" => "  1 корпус - кабинет В 2012 корпус - кабинет В 208",
            "img" => "/assets/image/cabinet-shop/icon.png",
        ],
    ];

    $infoBuyHistoryItem = [
        // [
        //     "imgSrc" => "/assets/image/cabinet-shop/solaris2.png",
        //     "amount" => 200,
        //     "orderNumber" => "Стикеры солярики № 33500967",
        //     "orderStatus" => "заказ оплачен",
        //     "time" => "13.02.2024",
        //     "img_valute" => "/assets/image/cabinet-shop/currency.png",
        // ],
        // [
        //     "imgSrc" => "/assets/image/cabinet-shop/solaris2.png",
        //     "amount" => 150,
        //     "orderNumber" => "Антидвойка № 33500967",
        //     "orderStatus" => "заказ оплачен",
        //     "time" => "13.02.2024",
        //     "img_valute" => "/assets/image/cabinet-shop/currency.png",
        // ],
        // [
        //     "imgSrc" => "/assets/image/cabinet-shop/solaris2.png",
        //     "amount" => 150,
        //     "orderNumber" => "Антидвойка № 33500967",
        //     "orderStatus" => "заказ оплачен",
        //     "time" => "13.02.2024",
        //     "img_valute" => "/assets/image/cabinet-shop/currency.png",
        // ],
        // [
        //     "imgSrc" => "/assets/image/cabinet-shop/solaris2.png",
        //     "amount" => 150,
        //     "orderNumber" => "Стикеры солярики № 33500967",
        //     "orderStatus" => "заказ оплачен",
        //     "time" => "13.02.2024",
        //     "img_valute" => "/assets/image/cabinet-shop/currency.png",
        // ],
        // [
        //     "imgSrc" => "/assets/image/cabinet-shop/solaris2.png",
        //     "amount" => 150,
        //     "orderNumber" => "Стикеры солярики № 33500967",
        //     "orderStatus" => "заказ оплачен",
        //     "time" => "13.02.2024",
        //     "img_valute" => "/assets/image/cabinet-shop/currency.png",
        // ],
    ];
    ?>

  <section class="cabinet-shop">
      <div class="cabinet-shop-container">
          <div class="cabinet-shop-ready">
              <div class="cabinet-shop-ready__titles-info">
                  <p class="cabinet-shop-ready__title">
                      <span>Готовы к получению</span>
                  </p>
                  <p class="cabinet-shop-ready__subtitle">
                      Для получения товара покажите на одном экране свой ID и номер заказа
                  </p>
                  <h2 class="cabinet-shop-ready__login">IvanovAI_7a</h2>
              </div>
              <?php
                if ($infoBuyItemInfo) {
                ?>
                  <ul class="cabinet-shop-ready__list">
                      <?php
                        foreach ($infoBuyItemInfo as $value) { ?>
                          <li class="cabinet-shop-ready__list-item">
                              <div class="cabinet-shop-ready__list-item-img">
                                  <img src="<?php echo get_template_directory_uri() ?><?php echo $value['img'] ?>" alt="image" />
                              </div>
                              <div class="cabinet-shop-ready__list-item-info">
                                  <p class="list-item-info"><?php echo $value['name'] ?></p>
                                  <p class="list-item-info"><?php echo $value['number'] ?></p>
                                  <p class="list-item-info">Получить</p>
                                  <p class="list-item-info"><?php echo $value['text'] ?></p>
                              </div>
                          </li>
                      <?php  } ?>
                  </ul>
              <?php } else { ?>
                  <p class="shop-empty-ready"> У тебя сейчас нет товаров готовых к получению, ты можешь выбрать их в магазине</p>
              <?php } ?>
          </div>

          <div class="cabinet-shop-history">
              <p class="cabinet-shop-history__title">История покупок</p>
              <?php
                if ($infoBuyHistoryItem) {
                ?>
                  <ul class="cabinet-shop-history__wrapper">
                      <?php
                        foreach ($infoBuyHistoryItem as $value) { ?>
                          <li class="cabinet-shop-history__wrapper-item">
                              <div class="cabinet-shop-history__wrapper-left">
                                  <img src="<?php echo get_template_directory_uri() ?><?php echo $value['imgSrc'] ?>" alt="<?php echo $value['orderNumber'] ?>" />
                                  <p class="cabinet-shop-history__wrapper-price"><?php echo $value['amount'] ?> </p>
                                  <img src="<?php echo get_template_directory_uri() ?><?php echo $value['img_valute'] ?>" alt="solaris-valute" />
                              </div>
                              <div class="cabinet-shop-history__wrapper-info">
                                  <p><?php echo $value['orderNumber'] ?></p>
                                  <p><?php echo $value['time'] ?> <span>заказ оплачен</span></p>
                              </div>
                          </li>
                      <?php  } ?>
                  </ul>
              <?php } else { ?>
                  <p class="shop-empty-history">Здесь отображаются полученные товары, видимо ты пока ничего не покупал</p>
              <?php } ?>
              <div class="cabinet-shop__img-background">
                  <img src="<?php echo get_template_directory_uri() ?>/assets/image/cabinet-shop/coinBege.png" alt="" />
              </div>
          </div>
      </div>
  </section>