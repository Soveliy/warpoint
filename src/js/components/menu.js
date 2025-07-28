const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".main-menu");
const closeBtn = document.querySelector(".main-menu__close");
const body = document.body;

function openMenu() {
  menu.classList.add("js-active");
  body.classList.add("js-hidden");

  document.addEventListener("keydown", onEscClose);
  document.addEventListener("mousedown", onClickOutside);
}

function closeMenu() {
  menu.classList.remove("js-active");
  body.classList.remove("js-hidden");

  document.removeEventListener("keydown", onEscClose);
  document.removeEventListener("mousedown", onClickOutside);
}

function onEscClose(e) {
  if (e.key === "Escape") closeMenu();
}

function onClickOutside(e) {
  if (!menu.classList.contains("js-active")) return;

  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    closeMenu();
  }
}

burger?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);

menu?.addEventListener("click", (e) => {
  const link = e.target.closest(".main-menu__link--with-children");
  if (link) {
    e.preventDefault();
    link.parentElement.classList.toggle("js-active");
  }

  // const anchor = e.target.closest("a[href^='#']");
  // if (anchor) {
  //   closeMenu();
  // }
});
