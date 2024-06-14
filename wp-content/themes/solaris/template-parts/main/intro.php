    <section class="wrap-container" id="intro">
        <div class="intro">
            <div class="intro__description">
                <h1 class="intro__title h1 ">
                    Общее и дополнительное образование вместе с Соляриком!
                </h1>
                <p class="intro__text p1 ">Муниципальное автономное общеобразовательное учреждение «Лицей «Солярис» –
                    одно из современных и крупнейших учреждений Саратовской области</p>
            </div>
            <div class="intro__form-container">
                <div action="" class="intro__form">
                    <?php wp_login_form(array(
                        'label_username' => 'Логин',
                        'label_password' => 'Пароль',
                        'label_log_in' => 'Войти в кабинет'
                    ));
                    ?>
                    <button type="button" class="intro__form__btn btn-text">Забыли пароль?</button>
                    <img class="into__bg-rays" src="<?php echo get_template_directory_uri() ?>/assets/image/animation-main/rays.svg" alt="rays">
                    <img class="into__bg-hare" src="<?php echo get_template_directory_uri() ?>/assets/image/animation-main/hare.svg" alt="hare">
                    <div class="intro__modal">
                        <svg class="intro__modal__close" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="6.06066" y1="6.21313" x2="26.2132" y2="26.3657" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <line x1="5" y1="26.1525" x2="25.1525" y2="5.99993" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <p class="intro__modal__text p1">Если вы забыли пароль от своего личного кабинета, то обратитесь
                            к вашему классному руководителю.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>