document.addEventListener("DOMContentLoaded", function () {
  const tabEls = document.querySelectorAll(".location-tab");
  const tabContentEls = document.querySelectorAll(".location-content");
  const tabNames = ["страна", "город", "локация"];

  let selected = [null, null, null];
  function updateCurrentTabs() {
    tabEls.forEach((tab, i) => {
      if (selected[i]) {
        tab.classList.add("is-current");
      } else {
        tab.classList.remove("is-current");
      }
    });
  }

  tabEls.forEach((tab, idx) => {
    tab.addEventListener("click", function (e) {
      e.stopPropagation();
      tabEls.forEach((t, i) => t.classList.toggle("js-active", i === idx));
      tabContentEls.forEach((cnt, i) =>
        cnt.classList.toggle("js-active", i === idx)
      );
    });
  });

  tabEls[0].classList.add("js-active");
  tabContentEls.forEach((cnt, i) => cnt.classList.toggle("js-active", i === 0));

  // ===== Выбор страны =====
  const countryList = document.querySelector(".location-content__country-list");
  if (countryList) {
    countryList.addEventListener("click", function (e) {
      const li = e.target.closest(".location-content__country-item");
      if (!li) return;
      selected[0] = li.textContent.trim();
      const countryImg = li.querySelector("img");
      const tabImg = tabEls[0].querySelector(".location-tab__select img");
      if (countryImg && tabImg) {
        tabImg.src = countryImg.src;
        tabImg.alt = countryImg.alt;
      }
      const countryTab = tabEls[0].querySelector(".location-tab__name");
      countryTab.textContent = selected[0];
      tabEls.forEach((tab, i) => tab.classList.toggle("js-active", i === 1));
      tabContentEls.forEach((cnt, i) =>
        cnt.classList.toggle("js-active", i === 1)
      );

      updateCurrentTabs();
    });
  }

  // ===== Выбор города =====
  const cityList = document.querySelector(".city-list");
  if (cityList) {
    cityList.addEventListener("click", function (e) {
      const li = e.target.closest(".city-list__city");
      if (!li) return;
      selected[1] = li.textContent.trim();
      const cityTab = tabEls[1].querySelector(".location-tab__name");
      cityTab.textContent = selected[1];

      tabEls.forEach((tab, i) => tab.classList.toggle("js-active", i === 2));
      tabContentEls.forEach((cnt, i) =>
        cnt.classList.toggle("js-active", i === 2)
      );

      updateCurrentTabs();
    });
  }

  // ===== Выбор локации =====
  const locationGrid = document.querySelector(".location__grid");
  if (locationGrid) {
    locationGrid.addEventListener("click", function (e) {
      const item = e.target.closest(".location-item");
      if (!item) return;

      locationGrid.querySelectorAll(".location-item").forEach((el) => {
        el.classList.remove("js-active");
      });

      item.classList.add("js-active");

      const locationTitle = item.querySelector(".location-item__title");
      selected[2] = locationTitle ? locationTitle.textContent.trim() : "";

      const locTab = tabEls[2].querySelector(".location-tab__name");
      locTab.textContent = selected[2];

      tabEls.forEach((tab, i) => tab.classList.toggle("js-active", i === 2));
      tabContentEls.forEach((cnt, i) =>
        cnt.classList.toggle("js-active", i === 2)
      );

      updateCurrentTabs();
    });
  }

  // ===== Фильтр поиска =====
  const inputEls = document.querySelectorAll(".location-content__input");
  inputEls.forEach((input, idx) => {
    input.addEventListener("input", function (e) {
      const val = input.value.toLowerCase();
      if (idx === 0) {
        const items = countryList.querySelectorAll(
          ".location-content__country-item"
        );
        items.forEach((item) => {
          item.style.display = item.textContent.toLowerCase().includes(val)
            ? ""
            : "none";
        });
      } else if (idx === 1) {
        const groups = cityList.querySelectorAll(".city-list__group");
        groups.forEach((group) => {
          let found = false;
          const cities = group.querySelectorAll(".city-list__city");
          cities.forEach((city) => {
            const match = city.textContent.toLowerCase().includes(val);
            city.style.display = match ? "" : "none";
            if (match) found = true;
          });
          group.style.display = found ? "" : "none";
        });
      } else if (idx === 2) {
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

  document
    .querySelector(".location__button")
    .addEventListener("click", function () {});
});
