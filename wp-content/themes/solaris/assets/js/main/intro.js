var loginput = document.getElementById('user_login');
loginput.setAttribute("placeholder", "Логин");
var loginput = document.getElementById('user_pass');
loginput.setAttribute("placeholder", "Пароль");
document.addEventListener("DOMContentLoaded", function() {
    let title = document.querySelector(".intro__title");
    let decription = document.querySelector('.intro__text');
    window.addEventListener('resize', () => {
        introClass();
    })

    introClass();

    function introClass() {
        if (window.innerWidth <= 991) {
            title.classList.remove("h1")
            title.classList.remove("h3")
            title.classList.add("h2")
            decription.classList.remove("p1")
            decription.classList.add("p2")
        }

        if (window.innerWidth >= 991) {
            title.classList.remove("h2")
            title.classList.add("h1")
            decription.classList.remove("p2")
            decription.classList.add("p1")
        }

        if (window.innerWidth <= 767) {
            title.classList.remove("h2")
            title.classList.add("h3")
            decription.classList.remove("p1")
            decription.classList.add("p2")
        }
    }

    const introBtn = document.querySelector('.intro__form__btn');
    const introBtnClose = document.querySelector('.intro__modal__close');
    const introModal = document.querySelector('.intro__modal');

    introBtn.addEventListener('click', function() {
        introModal.classList.add("intro__modal__visible");
    });
    introBtnClose.addEventListener('click', function() {
        introModal.classList.remove("intro__modal__visible");
    });

})