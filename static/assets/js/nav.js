const dropDown = document.querySelector(".dropdown");
const miniMenu = document.querySelector(".mini_menu");

dropDown.addEventListener("click", () => {
  miniMenu.classList.toggle("active");
});
dropDown.addEventListener("mouseenter", () => {
  miniMenu.classList.toggle("active");
});
