var loginput = document.getElementById('user_login');
loginput.setAttribute("placeholder", "Логин");
var loginput = document.getElementById('user_pass');
loginput.setAttribute("placeholder", "Пароль");

document.addEventListener("DOMContentLoaded", function () {
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
    const form = document.querySelector('#loginform');
    const submit = document.querySelector('#wp-submit')
    const login = document.querySelector('#user_login')
    const password = document.querySelector('#user_pass')
    let valueLogin = '';
    let valuePassword = '';

    let errorLoginEl = `
    <div class="form__error__login form__error__login">
        <span class="form__icon__error">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:     www.w3.org/2000/svg">
            <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#DE4700" />
          </svg>
        </span>
        <p class="form__text__error">Поле заполнено некорректно</p>
      </div>
   `
    login.insertAdjacentHTML("afterEnd", errorLoginEl)

    let errorPasswordEl = `
   <div class="form__error__login form__error__password">
       <span class="form__icon__error">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:     www.w3.org/2000/svg">
           <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#DE4700" />
         </svg>
       </span>
       <p class="form__text__error">Поле заполнено некорректно</p>
     </div>
  `
    password.insertAdjacentHTML("afterEnd", errorPasswordEl)

    const errorLogin = document.querySelector('.form__error__login')
    const errorPasword = document.querySelector('.form__error__password')

    submit.addEventListener('click', (e) => {
        e.preventDefault()
        if (valueLogin.length < 3) {
            login.classList.add('input-error')
            errorLogin.style.display = 'flex'
        }

        if (valuePassword.length < 3) {
            password.classList.add('input-error')
            errorPasword.style.display = 'flex'
        }

    })

    login.addEventListener('change', (e) => {
        valueLogin = e.target.value

        if (valueLogin.length < 3) {
            login.classList.add('input-error')
            errorLogin.style.display = 'flex'
        } else {
            login.classList.remove('input-error')
            errorLogin.style.display = 'none'
        }
    })

    password.addEventListener('change', (e) => {
        valuePassword = e.target.value

        if (valuePassword.length < 3) {
            password.classList.add('input-error')
            errorPasword.style.display = 'flex'
        } else {
            password.classList.remove('input-error')
            errorPasword.style.display = 'none'
        }
    })

    introBtn.addEventListener('click', function () {
        if (window.innerWidth <= 576) {
            form.classList.add('form-hidden');
            introBtn.classList.add('form-hidden');
        }
        introModal.classList.add("intro__modal__visible");
    });

    introBtnClose.addEventListener('click', function () {
        form.classList.remove('form-hidden')
        introBtn.classList.remove('form-hidden')
        introModal.classList.remove("intro__modal__visible");
    });

})