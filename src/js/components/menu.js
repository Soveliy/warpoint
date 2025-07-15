const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".main-menu");
const closeBtn = document.querySelector(".main-menu__close");
const body = document.body;

function openMenu() {
  menu.classList.add("js-active");
  body.classList.add("js-hidden");
  // Вешаем слушатели только при открытии
  document.addEventListener("keydown", onEscClose);
  document.addEventListener("mousedown", onClickOutside);
}

function closeMenu() {
  menu.classList.remove("js-active");
  body.classList.remove("js-hidden");
  // Удаляем слушатели при закрытии
  document.removeEventListener("keydown", onEscClose);
  document.removeEventListener("mousedown", onClickOutside);
}

// Закрытие по Esc
function onEscClose(e) {
  if (e.key === "Escape") closeMenu();
}

// Закрытие по клику вне меню
function onClickOutside(e) {
  // Если меню не активно — ничего не делаем
  if (!menu.classList.contains("js-active")) return;
  // Клик вне меню и не по бургеру
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    closeMenu();
  }
}

burger?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);

// Делегирование для пунктов с подменю
menu?.addEventListener("click", (e) => {
  const link = e.target.closest(".main-menu__link--with-children");
  if (link) {
    e.preventDefault();
    link.parentElement.classList.toggle("js-active");
  }
});
