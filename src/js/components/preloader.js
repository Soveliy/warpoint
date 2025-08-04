const preloader = document.querySelector(".preloader");
const $preloaderNum = document.querySelector(".preloader__status-number");
let preloaderTimeoutDuration = 10;
let preloaderPercent = 0;
function updatePreloader() {
  if (preloaderPercent < 100) {
    preloaderPercent += 1;
    $preloaderNum.innerHTML = preloaderPercent;

    if (preloaderPercent >= 100) {
      preloader.classList.add("preloader--end");
      setTimeout(() => {
        preloader.classList.add("is-hidden");
      }, 800);
    }

    setTimeout(updatePreloader, preloaderTimeoutDuration);
  }
}

updatePreloader();
