document.addEventListener("DOMContentLoaded", function () {
    const feedback = document.querySelector(".feedback");
    const feedbackContainer = document.querySelector(".feedback__container");
    const feedbackTitle = document.querySelector(".feedback__title");
    const feedbackImg = document.querySelector(".feedback__img");

    function setVisible() {
        const elementPosition = feedback.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight * 0.3) {
            feedbackContainer.classList.add("feedback_background__animate");
            feedbackTitle.classList.add("feedback__animate");
            feedbackImg.classList.add("feedback__animate");

            window.removeEventListener("scroll", setVisible);
        }
    }
    window.addEventListener("scroll", setVisible);
});