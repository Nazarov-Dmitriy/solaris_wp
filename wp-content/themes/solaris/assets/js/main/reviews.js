document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelector(".reviews");
    const reviewsImg = document.querySelector(".reviews__img");

    function setVisible() {
        const elementPosition = reviews.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight * 0.3) {
            reviewsImg.classList.add("reviews__animate");

            window.removeEventListener("scroll", setVisible);
        }
    }
    window.addEventListener("scroll", setVisible);
});

