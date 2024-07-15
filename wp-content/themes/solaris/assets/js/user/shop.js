import pagination from '../pagination.js'

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.shop-item').forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event);
            event.preventDefault();
            window.location.href = '/cabinet-shop/?id=234';
        })
    })

    let description = document.querySelector('.balance-description')
    let tooltip = document.querySelector('.balance__tolltip')
    let tooltipClose = document.querySelector('.balance__tolltip-close')

    description.addEventListener('click', () => {
        tooltip.classList.add('active')
        description.classList.add('active')
    })

    tooltipClose.addEventListener('click', (e) => {
        e.stopPropagation()
        tooltip.classList.remove('active')
        description.classList.remove('active')
    })



    let arrContent = arr;

    let list = document.querySelector('.shop-list');
    let arrPagination = [];

    function resArrayContent(arr) {
        arrPagination = arr;
        renderContent();
    }

    function renderContent() {
        list.textContent = '';
        arrPagination.forEach(elem => {
            let item =
                `
                <div id=${elem.id}  class="shop-item ${elem.popular ? 'shop-item__popular' : ''}" >
                <img class="shop-img" src="/wp-content/themes/solaris/assets/image/cabinet/image.png" alt="">
                <div class="shop-contnent">
                    <p class="shop-subtitle p1">${elem.title}</p>
                    <div class="shop-price-wraper">
                        <p class="shop-price h2">${elem.price}</p>
                        <svg class="shop-icon" width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00113489 22.2992C0.00113489 25.4318 0.591256 28.327 1.77096 30.9871C2.95123 33.6472 4.54874 35.9462 6.56462 37.8857C8.57992 39.824 10.9394 41.3278 13.6429 42.397C16.3464 43.4657 19.2228 44 22.2704 44C24.5318 44 26.7313 43.8016 28.8702 43.4032C31.0085 43.0059 32.9377 42.3712 34.6582 41.5015C36.3787 40.6313 37.8044 39.5007 38.9354 38.1081C40.0658 36.7161 40.754 35.0014 41 32.9627C41 31.7198 40.5941 30.6506 39.7829 29.7557C38.9717 28.8613 37.8532 28.4136 36.428 28.4136C35.4444 28.4136 34.6945 28.7862 34.1786 29.5326C33.6627 30.2779 33.4042 31.0984 33.4042 31.9939C33.4042 32.8389 33.6378 33.5968 34.1055 34.2682C34.572 34.9395 35.2976 35.2743 36.2806 35.2743C35.7891 36.8652 34.8549 38.033 33.4785 38.7795C32.1021 39.5248 30.6032 39.898 28.9807 39.898C26.7188 39.898 24.8016 39.3012 23.2285 38.1081C21.6559 36.9151 20.3651 35.3987 19.3571 33.5595C18.3492 31.7198 17.6242 29.7436 17.1814 27.631C16.7387 25.5172 16.5181 23.5164 16.5181 21.6279C16.5181 20.5335 16.5918 19.3038 16.7387 17.9364C16.8866 16.5691 17.1446 15.2023 17.5131 13.8356C17.8821 12.4682 18.3736 11.1634 18.9881 9.92046C19.6026 8.67754 20.377 7.60834 21.3107 6.71399C22.9331 5.22225 24.7273 4.47637 26.6933 4.47637C27.4303 4.47637 28.1553 4.60077 28.8691 4.84901C29.5816 5.09725 30.2823 5.52036 30.97 6.11717C30.3798 5.96811 29.8396 5.89356 29.3475 5.89356C28.2171 5.89356 27.1848 6.15442 26.2506 6.6767C25.3163 7.19841 24.5057 7.89441 23.8169 8.76411C23.1293 9.63439 22.5884 10.617 22.1944 11.7097C21.8016 12.8042 21.6043 13.9227 21.6043 15.0659C21.6043 16.1099 21.801 17.1166 22.1944 18.086C22.5879 19.0555 23.1293 19.8879 23.8169 20.5839C24.5051 21.2799 25.3163 21.8389 26.2506 22.2614C27.1848 22.6845 28.1928 22.8949 29.2738 22.8949C30.5522 22.8949 31.7194 22.6214 32.7767 22.0751C33.8334 21.5281 34.7307 20.7949 35.4683 19.8742C36.2052 18.9552 36.7829 17.9106 37.2013 16.7422C37.6196 15.5744 37.8277 14.3934 37.8277 13.1998C37.8277 11.012 37.2874 9.08571 36.2052 7.42026C35.1242 5.75481 33.7602 4.37547 32.1128 3.28161C30.466 2.18832 28.6355 1.36794 26.6196 0.82043C24.6043 0.274071 22.6871 0 20.8679 0C18.0658 0 15.411 0.596794 12.9042 1.78984C10.3968 2.98346 8.18538 4.57438 6.26758 6.5626C4.34978 8.55139 2.82596 10.8377 1.69614 13.4233C0.565188 16.0084 0 18.6932 0 21.4777L0 22.2975L0.00113489 22.2992Z" fill="#DDA06B" />
                        </svg>
                    </div>
                </div>
            </div>
                `
            list.insertAdjacentHTML("beforeEnd", item)
        })
    }

    if (arrContent.length > 0) {
        pagination(arrContent, 6, resArrayContent)
    }

    let idCard

    let card = document.querySelector('.shop-item')
    card = this.addEventListener('click', (e) => {
        e.stopPropagation();
        let id;
        let target = e.target;
        if (target.closest('.shop-item')) {
            id = getId(target);
        }
        console.log(id);
        console.log(window.location);
        window.location.href = 'http://' + window.location.hostname + `/cabinet-shop-card?id=${id}`
      })

    function getId(el) {
        let id;
        if (el.classList.contains('shop-item')) {
                     return id = el.getAttribute('id')
        } else if( !id) {
          id =  getId(el.parentNode)
        }
        return id
    }
});