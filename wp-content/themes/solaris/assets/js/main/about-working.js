document.addEventListener("DOMContentLoaded", function () {
    const aboutWorkingImg = document.querySelector(".about-working__img");
  
    function setVisible() {
      const elementPosition = aboutWorkingImg.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (elementPosition.top < windowHeight * 0.5) {
          aboutWorkingImg.classList.add("about_working__img__animate");
  
        window.removeEventListener("scroll", setVisible);
      }
    }
    window.addEventListener("scroll", setVisible);
  });