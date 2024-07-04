import pagination from '../pagination.js'

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector('#role');
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

    dropdown.addEventListener('click', (evetn) => toggleDropdown(evetn, dropdown));

    dropdown.querySelectorAll('.dropdown-option').forEach(opt => {
        opt.addEventListener('click', (evt) => selectOption(evt, dropdown.childNodes[1]))
    })


    // dropdown.forEach(el => {
    //     console.log(el);
    //     el.addEventListener('click', (evetn) => toggleDropdown(evetn, el));
    //     el.querySelectorAll('.dropdown-option').forEach(opt => {
    //         opt.addEventListener('click', (evt) => selectOption(evt, el.childNodes[0]))
    //     })
    // })

    body.addEventListener('click', closeDropdownFromOutside);
    
    let arrContest = data;

    let list = document.querySelector('.uc-portfolio__table tbody');
    let arrPagination = [];

    function resArrayContent(arr) {
        arrPagination = arr;
        renderContent();
    }

    function renderRole(role) {
        let str='';
        role.forEach(el => str += `<p>${el}</p>`)
        return str
    }

    function renderContent() {
        list.textContent = '';
        arrPagination.forEach(elem => {
            let item =
                ` 
                <tr id=${elem.id}>
                    <td>Городской конкурс сочинений
                        ${elem.title}
                    </td>
                    <td>
                    ${renderRole(elem.role)}
                    </td>
                    <td>Иванова М.И</td>
                    <td>${elem.money}</td>
                    <td>${elem.balls} </td>
                    <td>${elem.status}</td>
                </tr>
                `
            list.insertAdjacentHTML("beforeEnd", item)

            // <p>журналист</p>
            // <p>историк</p>
            // <p>патриот</p>
            // <p>юнармеец</p>
        })
    }

    if (arrContest.length > 0) {
        pagination(arrContest, 5, resArrayContent, 'arrow')
    }
})