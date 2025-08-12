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
        checkCookies();
      }, 800);
    }

    setTimeout(updatePreloader, preloaderTimeoutDuration);
  }
}

updatePreloader();
// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent() {
  deleteCookie("user_cookie_consent");
  setCookie("user_cookie_consent", 1, 30);
  let cookieNotification = document.querySelector(".cookie");
  cookieNotification.classList.add("js-hidden");
}

function checkCookies() {
  let cookieDate = localStorage.getItem("cookieDate");
  let cookieNotification = document.querySelector(".cookie");
  let cookieBtn = cookieNotification.querySelector(".cookie__button");
  let cookieClose = cookieNotification.querySelector(".cookie__close");
  // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
  if (!cookieDate || +cookieDate + 31536000000 < Date.now()) {
    cookieNotification.classList.remove("js-hidden");
  }

  // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
  cookieBtn.addEventListener("click", function () {
    localStorage.setItem("cookieDate", Date.now());
    cookieNotification.classList.add("js-hidden");
  });
  cookieClose?.addEventListener("click", () => {
    cookieNotification.classList.add("js-hidden");
  });
}
