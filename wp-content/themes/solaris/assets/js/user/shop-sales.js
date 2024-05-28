document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector(".cabinet-shop-ready__list");
    const infoBuyHistoryItem = [
        {
            imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
            amount: 200,
            orderNumber: "Стикеры солярики № 33500967",
            orderStatus: "заказ оплачен",
            time: "13.02.2024",
            currency: "/src/assets/image/cabinet-shop/currency.png",
        },
        {
            imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
            amount: 150,
            orderNumber: "Антидвойка № 33500967",
            orderStatus: "заказ оплачен",
            time: "13.02.2024",
            currency: "/src/assets/image/cabinet-shop/currency.png",
        },
        {
            imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
            amount: 150,
            orderNumber: "Антидвойка № 33500967",
            orderStatus: "заказ оплачен",
            time: "13.02.2024",
            currency: "/src/assets/image/cabinet-shop/currency.png",
        },
        {
            imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
            amount: 150,
            orderNumber: "Стикеры солярики № 33500967",
            orderStatus: "заказ оплачен",
            time: "13.02.2024",
            currency: "/src/assets/image/cabinet-shop/currency.png",
        },
        {
            imgSrc: "/src/assets/image/cabinet-shop/solaris2.png",
            amount: 150,
            orderNumber: "Стикеры солярики № 33500967",
            orderStatus: "заказ оплачен",
            time: "13.02.2024",
            currency: "/src/assets/image/cabinet-shop/currency.png",
        },
    ];

    const historyWrapper = document.querySelector(
        ".cabinet-shop-history__wrapper"
    );

    infoBuyHistoryItem.forEach((item) => {
        const historyWrapperItem = document.createElement("li");
        historyWrapperItem.className = "cabinet-shop-history__wrapper-item";
        historyWrapperItem.innerHTML = `
            <div class="cabinet-shop-history__wrapper-left">
              <img src="${item.imgSrc}" alt="картинка" />
              <p class='cabinet-shop-history__wrapper-price'>${item.amount}</p>
              <img src="${item.currency}" alt="валюта" />
            </div>
            <div class="cabinet-shop-history__wrapper-info">
              <p>${item.orderNumber}</p>
              <p>${item.time} <span>${item.orderStatus}</span></p>
            </div>
          `;
        historyWrapper.append(historyWrapperItem);
    });

    if (list.children.length >= 1) {
        return;
    } else {
        const emptyReady = document.createElement("p");
        emptyReady.classList.add("shop-empty-ready");
        emptyReady.textContent =
            "У тебя сейчас нет товаров готовых к получению, ты можешь выбрать их в магазине";
        list.append(emptyReady);
    }

    if (historyWrapper.children.length >= 1) {
        return;
    } else {
        const emptyHistory = document.createElement("p");
        emptyHistory.className = "shop-empty-history";
        emptyHistory.textContent =
            "здесь отображаются полученные товары, видимо ты пока ничего не покупал";
        historyWrapper.append(emptyHistory);
    }

    console.log(historyWrapper.children);
});