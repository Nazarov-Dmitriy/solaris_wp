document.addEventListener("DOMContentLoaded", function () {
    const faqBtns = document.querySelectorAll(".solaris-faq__item-btn");
    const faqContent = document.querySelectorAll(".solaris-faq-content");
    let activeBtnIndex = false;

    faqBtns.forEach((btn, index) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();

            btn.classList.toggle("solaris__item-btn--current");
            faqContent[index].classList.toggle("faq-content--visible");
            if (activeBtnIndex !== false && activeBtnIndex !== index) {
                faqBtns[activeBtnIndex].classList.remove("solaris__item-btn--current");
                faqContent[activeBtnIndex].classList.remove("faq-content--visible");
            }

            activeBtnIndex = activeBtnIndex === index ? false : index;
        });
    });
});