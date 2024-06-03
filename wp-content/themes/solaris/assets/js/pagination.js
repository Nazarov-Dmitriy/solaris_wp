let totalPage = 0;
let perPage;
let arr;
let currentPage = 1;
let showCountPage = 3;
let rangeCountPage = [];
let content = [];

function pagination(arrData, perPagCount = 3, resArrayContent) {
    console.log("вызвали");
    perPage = perPagCount;
    arr = arrData;

    getTotalPage();
    getRangeCountPage();
    getPagainationItem(resArrayContent);

    document.querySelector('.pagination-prev').addEventListener('click', () => {
        prevPage();
        getRangeCountPage();
        getPagainationItem(resArrayContent);
    })

    document.querySelector('.pagination-next').addEventListener('click', () => {
        nextPage();
        getRangeCountPage();
        getPagainationItem(resArrayContent);
    })

    document.querySelector('.pagination-dots--left').addEventListener('click', () => {
        getStartPage(resArrayContent);
    })
    document.querySelector('.pagination-dots--right').addEventListener('click', () => {
        getEndtPage(resArrayContent);
    })
}

function getTotalPage() {
    totalPage = Math.ceil(arr.length / perPage);
}

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

function prevPage() {
    if (currentPage > 1) currentPage--
}

function nextPage() {
    if (currentPage < totalPage) currentPage++;
}

function getStartPage(resArrayContent) {
    currentPage = 1;
    getRangeCountPage();
    getPagainationItem(resArrayContent);
}

function getEndtPage(resArrayContent) {
    currentPage = totalPage;
    getRangeCountPage();
    getPagainationItem(resArrayContent);
}

function getContentPage(page) {
    content = [];
    const startIndex = perPage * (page - 1);
    const endIndex =
        startIndex + perPage - 1 <= arr.length - 1
            ? startIndex + perPage - 1
            : arr.length - 1;

    for (let i = startIndex; i <= endIndex; i++) {
        content.push(arr[i]);
    }
}

function setCurrentPage(page, resArrayContent) {
    currentPage = +page;
    getRangeCountPage();
    getPagainationItem(resArrayContent);
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


function getPagainationItem(resArrayContent) {
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
                setCurrentPage(item.getAttribute('data-page'), resArrayContent);
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
    resArrayContent(content);
}

export default pagination;