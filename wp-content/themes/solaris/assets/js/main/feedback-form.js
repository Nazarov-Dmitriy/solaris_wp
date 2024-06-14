document.addEventListener("DOMContentLoaded", function () {
    const feedback = document.querySelector(".feedback");
    const feedbackContainer = document.querySelector(".feedback__container");
    const feedbackTitle = document.querySelector(".feedback__title");
    const feedbackImg = document.querySelector(".feedback__img");
    const btn = document.querySelector('.form__button')
    let error = []

    function setVisible() {
        const elementPosition = feedback.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight * 0.8) {
            feedbackContainer.classList.add("feedback_background__animate");
            feedbackTitle.classList.add("feedback__animate");
            feedbackImg.classList.add("feedback__animate");

            window.removeEventListener("scroll", setVisible);
        }
    }

    window.addEventListener("scroll", setVisible);

    let valueName = '';
    let valuePhone = '';
    let valueEmail = '';
    let valueText = '';

    let name = document.querySelector('#author-name')
    let labelName = document.querySelector('.form__label-name')
    let errorName = document.querySelector('.form__error__name')

    let phone = document.querySelector('#author-phone')
    let labelPhone = document.querySelector('.form__label-phone')
    let errorPhone = document.querySelector('.form__error__phone')

    let email = document.querySelector('#author-email')
    let labeEmail = document.querySelector('.form__label-email')
    let errorEmail = document.querySelector('.form__error__email')

    let text = document.querySelector('#author-text')
    let labeText = document.querySelector('.form__label-text')
    let errorText = document.querySelector('.form__error__text')


    name.addEventListener('change', (e) => {
        let value = e.target.value
        valueName = value
        if (value.length < 3) {
            error.push('name')
            addError();
        } else {
            removeError('name');
        }
    })

    phone.addEventListener('input', (e) => {
        let value = e.target.value
        let x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        x[1] = '+7';
        e.target.value = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    })


    phone.addEventListener('change', (e) => {
        let value = e.target.value
        valuePhone = value
        if (value.length < 18) {
            error.push('phone')
            addError();
        } else {
            removeError('phone');
        }
    })

    email.addEventListener('input', (e) => {
        let value = e.target.value
        let x = value.match(/([a-zA-Z]{1})([a-zA-Z0-9._-]{0,19})([@]{0,1})([a-zA-Z0-9._-]{0,10})([.]{0,1})([a-zA-Z0-9._-]{0,5})/);
        e.target.value = x ? (x[1] + x[2] + x[3] + x[4] + x[5] + x[6]) : '';
    })

    email.addEventListener('change', (e) => {
        let value = e.target.value
        valueEmail = value
        let email_regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (!email_regexp.test(String(value).toLowerCase())) {
            error.push('email')
            addError();
        } else {
            removeError('email');
        }
    })

    text.addEventListener('change', (e) => {
        let value = e.target.value
        valueText = value
    })
    text.addEventListener('input', (e) => {
        if (error.includes('text') && e.target.value.length >= 5) {
            removeError('text');
        }
    })

    function addError() {
        if (error.length > 0) {
            error.forEach(el => {
                if (el === 'name') {
                    name.classList.add('input-error')
                    labelName.classList.add('label-error')
                    errorName.style.display = 'flex'
                } else if (el === 'phone') {
                    phone.classList.add('input-error')
                    labelPhone.classList.add('label-error')
                    errorPhone.style.display = 'flex'
                } else if (el === 'email') {
                    email.classList.add('input-error')
                    labeEmail.classList.add('label-error')
                    errorEmail.style.display = 'flex'
                } else if (el === 'text') {
                    text.classList.add('input-error')
                    labeText.classList.add('label-error')
                    errorText.style.display = 'flex'
                }
            })
        }
    }

    function removeError(selector) {
        if (error.length !== 0) {
            if (selector === 'name') {
                name.classList.remove('input-error')
                labelName.classList.remove('label-error')
                errorName.style.display = 'none'
            } else if (selector === 'phone') {
                phone.classList.remove('input-error')
                labelPhone.classList.remove('label-error')
                errorPhone.style.display = 'none'
            } else if (selector === 'email') {
                email.classList.remove('input-error')
                labeEmail.classList.remove('label-error')
                errorEmail.style.display = 'none'
            } else if (selector === 'text') {
                text.classList.remove('input-error')
                labeText.classList.remove('label-error')
                errorText.style.display = 'none'
            }

            error = error.filter(el => el !== selector)

        }
    }

    btn.addEventListener('click', () => {
        validateForm();
    })

    function validateForm() {
        if (valueText.length < 5 && !error.includes('text')) error.push('text')
        if (valuePhone.length == '' && !error.includes('phone')) error.push('phone')
        if (valueEmail.length == '' && !error.includes('email')) error.push('email')
        if (valueName.length == '' && !error.includes('name')) error.push('name')
        addError();
    }
});