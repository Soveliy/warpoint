const upBtn = document.querySelector(".up-btn");
if (upBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      upBtn.classList.add("js-active");
    } else {
      upBtn.classList.remove("js-active");
    }
  });

  upBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
