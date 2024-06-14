import pagination from '../pagination.js'

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelectorAll('.dropdown');
    const body = document.body;

    const toggleDropdown = (event, el) => {
        event.stopPropagation();
        el.classList.toggle('opened');
    };

    const selectOption = (event, input) => {
        input.value = event.currentTarget.textContent;
    };

    const closeDropdownFromOutside = () => {
        dropdown.forEach(el => {
            if (el.classList.contains('opened')) {
                el.classList.remove('opened');
            }
        })
    };

    dropdown.forEach(el => {
        el.addEventListener('click', (evetn) => toggleDropdown(evetn, el));
        el.querySelectorAll('.dropdown-option').forEach(opt => {
            opt.addEventListener('click', (evt) => selectOption(evt, el.childNodes[0]))
        })
    })

    body.addEventListener('click', closeDropdownFromOutside);



    let arrContest = dataContests;

    let list = document.querySelector('.uc-list');
    let arrPagination = [];

    function resArrayContent(arr) {
        arrPagination = arr;
        renderContent();
    }

    function renderContent() {
        list.textContent = '';
        arrPagination.forEach(elem => {
            let item =
                ` <div class="uc__item">
                    <p class="uc__decription h3">
                        ${elem.title}
                    </p>
                    <div class="uc__directions">
                        <p class="uc__direction p2">Журналист</p>
                        <p class="uc__direction p2">Историк</p>
                        <p class="uc__direction p2">Патриот</p>
                        <p class="uc__direction p2">Юнармеец</p>
                    </div>
                    <div class="uc__info">
                        <p class="uc__publication p2">
                            Дата публикации 02.03.2024
                        </p>
                        <buttom class="uc__info-btn btn">Узнать подробнее</buttom>
                    </div>
                </div>`
            list.insertAdjacentHTML("beforeEnd", item)
        })
    }

    if (arrContest.length > 0) {
        pagination(arrContest, 5, resArrayContent)
    }
})
