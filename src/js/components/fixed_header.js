const header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  if (pageYOffset > 100 && header) {
    header.classList.add("header--fixed");
  } else {
    header.classList.remove("header--fixed");
  }
});
