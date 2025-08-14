// Navbar toggle
const menuBar = document.getElementById("menu-bar");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

// Ensure header stays same color on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.background =
    "linear-gradient(180deg, var(--terra-500), var(--brass-500))";
});
