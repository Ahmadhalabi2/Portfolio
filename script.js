const root = document.documentElement;
const themePicker = document.querySelector(".theme-picker");
const themeButton = document.querySelector(".theme-button");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

const savedTheme = localStorage.getItem("ahmad-theme") || "midnight";
root.dataset.theme = savedTheme;

themeButton.addEventListener("click", () => {
  const open = themePicker.classList.toggle("open");
  themeButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".theme-menu button").forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    root.dataset.theme = theme;
    localStorage.setItem("ahmad-theme", theme);
    themePicker.classList.remove("open");
    themeButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", e => {
  if (!themePicker.contains(e.target)) {
    themePicker.classList.remove("open");
    themeButton.setAttribute("aria-expanded", "false");
  }
});

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const style = document.createElement("style");
style.textContent = `
@media(max-width:850px){
  .desktop-nav.mobile-open{
    display:flex;position:absolute;top:58px;left:0;right:0;padding:14px;
    flex-direction:column;gap:4px;background:rgba(8,11,22,.95);
    border:1px solid var(--line);border-radius:16px;backdrop-filter:blur(18px)
  }
  .desktop-nav.mobile-open a{padding:10px 8px}
}`;
document.head.appendChild(style);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
