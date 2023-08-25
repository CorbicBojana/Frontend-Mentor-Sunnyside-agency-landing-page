const navMobile = document.querySelector(".nav_mobile");
const nav = document.querySelector(".nav");

navMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
})