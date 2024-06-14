document.addEventListener("DOMContentLoaded", function () {
    let arrContent = arr;
    let indexShow = 3;
    let list = document.querySelector('.previewshop__list');

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

    button.addEventListener('click', function () {
        indexShow += 3
        renderContent()
    });

    function renderContent() {
        list.textContent = '';
        arrContent.forEach((elem, index) => {
            if (index < indexShow) {
                let item =
                `
                <div class="previewshop__card">
                    <img src="/wp-content/themes/solaris/assets/image/cabinet/image.png" alt="" class="previewshop-img">
                    <div class="previewshop__card-footer">
                        <p class="previewshop__card-subtitle p1">${elem.title}</p>
                        <p class="previewshop__card-cost h2">${elem.price}
                        <img src="/wp-content/themes/solaris/assets/icon/valute.svg" alt="valute" class="previewshop__card-icon">
                        </p>
                    </div>
                </div>
                `
                list.insertAdjacentHTML("beforeEnd", item)
            }
        })
    }

    renderContent()
});