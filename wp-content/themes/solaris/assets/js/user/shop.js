document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.shop-item').forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event);
            event.preventDefault();
            window.location.href = '/cabinet-shop/?id=234';
        })
    })
});