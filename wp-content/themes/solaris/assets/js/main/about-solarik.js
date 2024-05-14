document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector(".about-solaric-title");

    window.addEventListener('resize', () => {
        changeClass()
    })

    changeClass()

    function changeClass() {
        if (window.innerWidth <= 991) {
            title.classList.remove("h2")
            title.classList.add("h3")
        }

        if (window.innerWidth >= 991) {
            title.classList.remove("h3")
            title.classList.add("h2")
        }
    }


})