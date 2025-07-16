document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
  const tabEls = document.querySelectorAll(".location-tab");
  const tabSelectEls = document.querySelectorAll(".location-tab__select");
  const tabContentEls = document.querySelectorAll(".location-content");
  const tabNames = ["страна", "город", "локация"];

  // Массив для выбранных значений
  let selected = [null, null, null];

  // Переключение табов
  tabSelectEls.forEach((selectEl, idx) => {
    selectEl.addEventListener("click", function (e) {
      e.stopPropagation();
      // Переключаем активные табы
      tabEls.forEach((tab, i) => tab.classList.toggle("js-active", i === idx));
      // Показываем нужный контент
      tabContentEls.forEach(
        (cnt, i) => (cnt.style.display = i === idx ? "" : "none")
      );
    });
  });

  // По умолчанию активен первый таб
  tabEls[0].classList.add("js-active");
  tabContentEls.forEach(
    (cnt, i) => (cnt.style.display = i === 0 ? "" : "none")
  );

  // ===== Выбор страны =====
  const countryList = document.querySelector(".location-content__country-list");
  if (countryList) {
    countryList.addEventListener("click", function (e) {
      const li = e.target.closest(".location-content__country-item");
      if (!li) return;
      // Сохраняем выбранную страну
      selected[0] = li.textContent.trim();
      // Подставляем в таб
      const countryTab = tabEls[0].querySelector(".location-tab__name");
      countryTab.textContent = selected[0];
      // Делаем второй таб активным
      tabEls[1].classList.add("js-active");
      tabEls[0].classList.remove("js-active");
      tabContentEls[1].style.display = "";
      tabContentEls[0].style.display = "none";
    });
  }

  // ===== Выбор города =====
  const cityList = document.querySelector(".city-list");
  if (cityList) {
    cityList.addEventListener("click", function (e) {
      const li = e.target.closest(".city-list__city");
      if (!li) return;
      // Сохраняем выбранный город
      selected[1] = li.textContent.trim();
      // Подставляем в таб
      const cityTab = tabEls[1].querySelector(".location-tab__name");
      cityTab.textContent = selected[1];
      // Делаем третий таб активным
      tabEls[2].classList.add("js-active");
      tabEls[1].classList.remove("js-active");
      tabContentEls[2].style.display = "";
      tabContentEls[1].style.display = "none";
    });
  }

  // ===== Выбор локации =====
  const locationGrid = document.querySelector(".location__grid");
  if (locationGrid) {
    locationGrid.addEventListener("click", function (e) {
      const item = e.target.closest(".location-item");
      if (!item) return;
      // Сохраняем выбранную локацию
      const locationTitle = item.querySelector(".location-item__title");
      selected[2] = locationTitle ? locationTitle.textContent.trim() : "";
      // Подставляем в таб
      const locTab = tabEls[2].querySelector(".location-tab__name");
      locTab.textContent = selected[2];
      // Скрываем модалку (или можно оставить открытой)
      // document.getElementById('location').setAttribute('aria-hidden', 'true');
      // Можно добавить любой свой колбэк!
    });
  }

  // ===== Фильтр поиска =====
  const inputEls = document.querySelectorAll(".location-content__input");
  inputEls.forEach((input, idx) => {
    input.addEventListener("input", function (e) {
      const val = input.value.toLowerCase();
      if (idx === 0) {
        // Поиск стран
        const items = countryList.querySelectorAll(
          ".location-content__country-item"
        );
        items.forEach((item) => {
          item.style.display = item.textContent.toLowerCase().includes(val)
            ? ""
            : "none";
        });
      } else if (idx === 1) {
        // Поиск городов
        const groups = cityList.querySelectorAll(".city-list__group");
        groups.forEach((group) => {
          let found = false;
          const cities = group.querySelectorAll(".city-list__city");
          cities.forEach((city) => {
            const match = city.textContent.toLowerCase().includes(val);
            city.style.display = match ? "" : "none";
            if (match) found = true;
          });
          // Скрываем букву, если нет городов
          group.style.display = found ? "" : "none";
        });
      } else if (idx === 2) {
        // Поиск локаций
        const locations = locationGrid.querySelectorAll(".location-item");
        locations.forEach((loc) => {
          const title = loc.querySelector(".location-item__title");
          loc.style.display =
            title && title.textContent.toLowerCase().includes(val)
              ? ""
              : "none";
        });
      }
    });
  });

  // ===== По кнопке "ОК" выводим выбранные значения =====
  document
    .querySelector(".location__button")
    .addEventListener("click", function () {
      alert(
        `Вы выбрали:\nСтрана: ${selected[0]}\nГород: ${selected[1]}\nЛокация: ${selected[2]}`
      );
      // Тут можно вставить свой код для передачи данных дальше
    });
});
