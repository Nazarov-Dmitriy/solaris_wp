document.addEventListener("DOMContentLoaded", function () {
    let dec = document.querySelector('.decrease')
    let inr = document.querySelector('.increase')
    let count = +document.querySelector('.quantity').textContent
    let countEl = document.querySelector('.quantity')

    console.log(count.textContent);
    dec.addEventListener('click', () => {
        if (count > 1) count--
        countEl.textContent = count
    })
    inr.addEventListener('click', () => {    
        countEl.textContent = ++count
    })
})
