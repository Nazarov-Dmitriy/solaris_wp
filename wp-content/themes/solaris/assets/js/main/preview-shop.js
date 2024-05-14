document.addEventListener("DOMContentLoaded", function () {
    const previewshop = document.querySelector(".previewshop");
    const previewshopImg = document.querySelector(".previewshop__img");
    const previewshopText = document.querySelector(".previewshop__text");

    function setVisible() {
        const elementPosition = previewshop.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight * 0.3) {
            previewshopImg.classList.add("previewshop__img__animated");
            previewshopText.classList.add("previewshop__text__animate");

            window.removeEventListener("scroll", setVisible);
        }
    }
    window.addEventListener("scroll", setVisible);

    const button = document.querySelector('.previewshop-btn');
    const previewshopCard = document.querySelectorAll('.previewshop__card__hidden');

    button.addEventListener('click', function () {
        previewshopCard.forEach(function (card) {
            card.classList.remove("previewshop__card__hidden");
        })
    });
});