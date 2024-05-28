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

              <ul class="cabinet-shop-ready__list">
                  <?php
                    foreach ($infoBuyItemInfo as $value) { ?>
                      <li class="cabinet-shop-ready__list-item">
                          <div class="cabinet-shop-ready__list-item-img">
                              <img src="<?php echo get_template_directory_uri()?><?php echo $value['img']?>" alt="image" />
                          </div>
                          <div class="cabinet-shop-ready__list-item-info">
                              <p class="list-item-info"><?php echo $value['name']?></p>
                              <p class="list-item-info"><?php echo $value['number']?></p>
                              <p class="list-item-info">Получить</p>
                              <p class="list-item-info"><?php echo $value['text']?></p>
                          </div>
                      </li>
                  <?php  } ?>
              </ul>
          </div>

          <div class="cabinet-shop-history">
              <p class="cabinet-shop-history__title">История покупок</p>
              <ul class="cabinet-shop-history__wrapper">
                  <!-- <li class="cabinet-shop-history__wrapper-item">
            <div class="cabinet-shop-history__wrapper-left">
              <img
                src="../../../assets/image/cabinet-shop/solaris2.png"
                alt="картинка"
              />
              <p class="cabinet-shop-history__wrapper-price">200</p>
              <img
                src="../../../assets/image/cabinet-shop/currency.png"
                alt=""
              />
            </div>
            <div class="cabinet-shop-history__wrapper-info">
              <p>Антидвойка</p>
              <p>13.12.2024 <span>заказ оплачен</span></p>
            </div>
          </li> -->
              </ul>
              <div class="cabinet-shop__img-background">
                  <img src="../../../assets/image/cabinet-shop/coinBege.png" alt="" />
              </div>
          </div>
      </div>
  </section>