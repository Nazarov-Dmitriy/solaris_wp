  

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

    let arrContest = [
        { title: "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне" },
        { title: "Городской конкурс1" },
        { title: "Городской конкурс2" },
        { title: "Городской конкурс3" },
        { title: "Городской конкурс4" },
        { title: "Городской конкурс5" },
        { title: "Городской конкурс6" },
        { title: "Городской конкурс7" },
        { title: "Городской конкурс8" },
        { title: "Городской конкурс9" },
        { title: "Городской конкурс10" },
        { title: "Городской конкурс11" },
        { title: "Городской конкурс12" },
        { title: "Городской конкурс13" },
        { title: "Городской конкурс14" },
        { title: "Городской конкурс15" },
        { title: "Городской конкурс16" },
    ]

    // Пагинация
    let totalPage = 0;
    const perPage = 5;
    let currentPage = 1;
    let showCountPage = 3;
    let rangeCountPage = [];
    let content = [];
    let list = document.querySelector('.uc-list');

    function getTotalPage() {
        totalPage = Math.ceil(arrContest.length / perPage);
    }

    getTotalPage();
    function getRangeCountPage() {
        let start;
        let end;

        if (showCountPage > totalPage) {
            start = 1;
            end = totalPage;
        } else {
            let halfShowCountPage = (showCountPage - 1) / 2;

            if (currentPage - halfShowCountPage <= 0) {
                start = 1;
                end = showCountPage
            } else if (currentPage - halfShowCountPage > 0 && currentPage + halfShowCountPage <= totalPage) {
                start = currentPage - halfShowCountPage;
                end = currentPage + halfShowCountPage;
            } else {
                start = totalPage - showCountPage + 1;
                end = totalPage;
            }
        }
        rangeCountPage[0] = start;
        rangeCountPage[1] = end;
    }

    getRangeCountPage();

    function prevPage() {
        if (currentPage > 1) currentPage--
    }

    function nextPage() {
        if (currentPage < totalPage) currentPage++;
    }

    function getStartPage() {
        currentPage = 1;
        getRangeCountPage();
        getPagainationItem();
    }

    function getEndtPage() {
        currentPage = totalPage;
        getRangeCountPage();
        getPagainationItem();
    }

    function getContentPage(page) {
        content = [];
        const startIndex = perPage * (page - 1);
        const endIndex =
            startIndex + perPage - 1 <= arrContest.length - 1
                ? startIndex + perPage - 1
                : arrContest.length - 1;

        for (let i = startIndex; i <= endIndex; i++) {
            content.push(arrContest[i]);
        }
        renderContent();
    }

    function setCurrentPage(page) {
        currentPage = +page;
        getRangeCountPage();
        getPagainationItem();
    }

    function showDots() {
        let breakLDotsLeft = document.querySelector('.pagination-dots--left');
        let breakDotsRight = document.querySelector('.pagination-dots--right');

        if (totalPage > showCountPage) {

            if (rangeCountPage[0] !== 1) {
                breakLDotsLeft.classList.add('pagination-dots--left-show')
            } else {
                breakLDotsLeft.classList.remove('pagination-dots--left-show')
            }

            if (rangeCountPage[1] !== totalPage) {
                breakDotsRight.classList.add('pagination-dots--right-show')
            } else {
                breakDotsRight.classList.remove('pagination-dots--right-show')
            }
        }
    }

    function getPagainationItem() {
        let nodeLi = '';
        let elementAfterInsert = document.querySelector('.pagination-dots--left');
        let itemsElemetns = document.querySelectorAll('.pagination-item');
        showDots();
        if (itemsElemetns.length == 0) {
            for (let i = rangeCountPage[0]; i <= rangeCountPage[1]; i++) {
                if (i == currentPage) {
                    nodeLi += `<li class="pagination-item pagination-item--active h3" data-page=${i}>${i}</li>`
                }
                else {
                    nodeLi += `<li class="pagination-item h3" data-page=${i}>${i}</li>`
                }
            }
            elementAfterInsert.insertAdjacentHTML("afterEnd", nodeLi);

            document.querySelectorAll('.pagination-item').forEach(item => {
                item.addEventListener('click', () => {
                    setCurrentPage(item.getAttribute('data-page'));
                })
            });

        } else {
            itemsElemetns.forEach((item, ind) => {
                let pageCoutn = rangeCountPage[0] + ind;
                item.textContent = pageCoutn;
                item.setAttribute('data-page', pageCoutn);

                if (pageCoutn == currentPage) {
                    item.classList.add('pagination-item--active');
                } else {
                    item.classList.remove('pagination-item--active');
                }
            })
        }
        getContentPage(currentPage);
    }

    function renderContent() {
        list.textContent = '';
        content.forEach(elem => {
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

    getPagainationItem();

    document.querySelector('.pagination-prev').addEventListener('click', () => {
        prevPage();
        getRangeCountPage();
        getPagainationItem();
    })

    document.querySelector('.pagination-next').addEventListener('click', () => {
        nextPage();
        getRangeCountPage();
        getPagainationItem();
    })

    document.querySelector('.pagination-dots--left').addEventListener('click', () => {
        getStartPage();
    })
    document.querySelector('.pagination-dots--right').addEventListener('click', () => {
        getEndtPage();
    })
})
