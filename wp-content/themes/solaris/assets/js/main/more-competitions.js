document.addEventListener("DOMContentLoaded", function () {
    const textWrap = document.querySelector(".more-competitions__text-wrap");
    const textWrapBottom = document.querySelector(
        ".more-competitions__text-wrap-bottom"
    );
    const moreCompetitions = document.querySelector('.more-competitions');

    const imgTg = document.querySelector(".more-competitions__img-tg");

    function setVisible() {
        const elementPosition = moreCompetitions.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top <= windowHeight * 0.3) {
            textWrap.classList.add("animate");
            textWrapBottom.classList.add("animate");
            imgTg.classList.add("animate");

            window.removeEventListener("scroll", setVisible);
        }
    }

    window.addEventListener("scroll", setVisible);
    setVisible();
});