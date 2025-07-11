import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
var swiper = new Swiper(".news__slider", {
  slidesPerView: 1,
  spaceBetween: 12,

  navigation: {
    nextEl: ".news__slider .slider__arrow--next",
    prevEl: ".news__slider .slider__arrow--prev",
  },
  pagination: {
    el: ".news__slider-pagination",
    clickable: 1,
  },
});

var swiper = new Swiper(".formats__slider", {
  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: ".formats__slider .slider__arrow--next",
    prevEl: ".formats__slider .slider__arrow--prev",
  },
  pagination: {
    el: ".formats__slider-pagination",
    clickable: 1,
  },
});

var swiper = new Swiper(".games__slider", {
  slidesPerView: 2,
  spaceBetween: 24,

  navigation: {
    nextEl: ".games__slider .slider__arrow--next",
    prevEl: ".games__slider .slider__arrow--prev",
  },
  pagination: {
    el: ".games__slider-pagination",
    clickable: 1,
  },
});
