import NiceSelect from "nice-select2";

const citySelects = document.querySelectorAll(".select-city-js");

if (citySelects.length > 0) {
  citySelects.forEach((select) => {
    new NiceSelect(select, {
      searchable: false,
    });
  });
}

const langSelects = document.querySelectorAll(".select-lang-js");

if (langSelects.length > 0) {
  langSelects.forEach((select) => {
    new NiceSelect(select, {
      searchable: false,
    });
  });
}

const filtersSelects = document.querySelectorAll(".filters-item__select");

if (filtersSelects.length > 0) {
  filtersSelects.forEach((select) => {
    new NiceSelect(select, {
      searchable: false,
    });
  });
}

const tariffsSelect = document.querySelector(".tarifs__select");
if (tariffsSelect) {
  new NiceSelect(tariffsSelect, {
    searchable: false,
  });
}
