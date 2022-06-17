const dropDown = document.querySelector(".dropdown");
const miniMenu = document.querySelector(".mini_menu");

dropDown.addEventListener("click", () => {
  miniMenu.classList.toggle("active");
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".navlinks li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");

    //Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 9 + 0.2
        }s`;
      }
    });

    //bURGER aNIMATION
    burger.classList.toggle("toggle");
  });
};

navSlide();
