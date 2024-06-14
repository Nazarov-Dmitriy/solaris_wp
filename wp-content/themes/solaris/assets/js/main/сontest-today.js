
// let arr = [
//     {
//         title: "Название конкурса",
//         date_publication: "Дата публикации",
//         direction: "Нарпавление",
//         start_date: "01.05.2024",
//         descption:
//             "Идейные соображения высшего порядка, а также постоянный количественный рост ",
//     },
//     {
//         title: "Название конкурса2",
//         date_publication: "Дата публикации",
//         direction: "Нарпавление",
//         start_date: "01.05.2024",
//         descption:
//             "Идейные соображения высшего порядка, а также постоянный количественный рост ",
//     },
//     {
//         title: "Название конкурса3",
//         date_publication: "Дата публикации",
//         direction: "Нарпавление",
//         start_date: "01.05.2024",
//         descption:
//             "Идейные соображения высшего порядка, а также постоянный количественный рост ",
//     },
//     {
//         title: "Название конкурса4",
//         date_publication: "Дата публикации",
//         direction: "Нарпавление",
//         start_date: "01.05.2024",
//         descption:
//             "Идейные соображения высшего порядка, а также постоянный количественный рост ",
//     },
// ];

document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".contest-container");
    let arrContent = arrContestToday;

    let title = document.querySelector(".contest__title");

    arrContent.forEach((item) => {
        let elem = `
      <div class="item-container">
          <div class="contest__item">
            <div class="contest__item-wraper">
              <p class="contest__item-subtitle p1">${item.title}</p>
              <p class="contest__item-publication p2">${item.date_publication}</p>
            </div>
              <svg class="contest__item-btn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#1F2A3E"/>
                <path d="M14 22L20 16L14 10" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div class="contest-content">
            <h3 class="contest-content__title h3">${item.title}</h3>
            <div class="contest-content__subtitle">
              <p class="contest-content__subtitle-text p2">${item.direction}</p>
              <p class="contest-content__subtitle-start p2">${item.start_date}</p>
            </div>
            <p class="contest-content__description p2">${item.descption}
            </p>
          </div>
      </div>
      `;
        container.insertAdjacentHTML("beforeEnd", elem);
        changeClass();
    });

    window.addEventListener("resize", () => {
        changeClass();
    });

    changeClass();

    function changeClass() {
        if (window.innerWidth <= 991) {
            title.classList.remove("h2");
            title.classList.add("h3");
        }

        if (window.innerWidth >= 991) {
            title.classList.remove("h3");
            title.classList.add("h2");
        }
    }

    const contestBtns = document.querySelectorAll(".contest__item-btn");
    const contestContent = document.querySelectorAll(".contest-content");
    let activeBtnIndex = false;

    contestBtns.forEach((btn, index) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();

            btn.classList.toggle("contest__item-btn--current");
            contestContent[index].classList.toggle("contest-content--visible");
            if (activeBtnIndex !== false && activeBtnIndex !== index) {
                contestBtns[activeBtnIndex].classList.remove(
                    "contest__item-btn--current"
                );
                contestContent[activeBtnIndex].classList.remove(
                    "contest-content--visible"
                );
            }

            activeBtnIndex = activeBtnIndex === index ? false : index;
        });
    });
});