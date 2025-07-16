const filterButton = document.querySelector(".filters__button");
const filterBody = document.querySelector(".filters__row");
if (filterButton && filterBody) {
  filterButton.addEventListener("click", () => {
    filterButton.classList.toggle("js-active");
    filterBody.classList.toggle("js-active");
  });
}
