const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const mobileQuery = window.matchMedia("(max-width: 600px)");

const setNavOpen = (open) => {
  header.classList.toggle("nav-visible", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  navToggle.title = open ? "Cerrar menú" : "Abrir menú";
};

navToggle.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setNavOpen(false);
    navToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setNavOpen(false);
});

header.addEventListener("focusout", (event) => {
  if (!header.contains(event.relatedTarget)) setNavOpen(false);
});

mobileQuery.addEventListener("change", () => setNavOpen(false));
