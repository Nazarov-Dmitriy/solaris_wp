
document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector(".burger-menu");
  let menu = document.querySelector(".header-menu");
  let header = document.querySelector(".header");
  let btnLogin = document.querySelectorAll(".btn-login");

  btn.addEventListener('change', () => {
    menu.classList.toggle("header-menu--active")
    header.classList.toggle("header__burger-menu")
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  btnLogin.forEach(el =>
    el.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#intro').scrollIntoView({
        behavior: 'smooth'
      });
    }));

});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1200) {
    document.querySelector(".header-menu").classList.remove("header-menu--active")
    document.querySelector(".header").classList.remove("header__burger-menu");
    document.querySelector(".burger-checkbox").checked = false;
  }
})

