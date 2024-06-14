document.addEventListener("DOMContentLoaded", function () {
    let arrContent = arrTrend;
    let list = document.querySelector('.trend__list');

    function renderContent() {
        arrContent.forEach((elem) => {
            let item =
                `
                 <div class="trend-item">
                    <img src="/wp-content/themes/solaris/assets/image/trend/trendName.png" alt="img-trend" class="trend-img" />
                    <button class="trend-item-btn h3">${elem.title}</button>
                </div>
                `
            list.insertAdjacentHTML("beforeEnd", item)
        })
    }

    renderContent()
});