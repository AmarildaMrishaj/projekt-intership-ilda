let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".hiddenn-navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

window.onscroll = () => {
  navbar.classList.remove("show");
};