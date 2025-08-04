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
  slidesPerView: 1.1,
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    986: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
  },
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
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    // when window width is >= 320px
    992: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: ".games__slider .slider__arrow--next",
    prevEl: ".games__slider .slider__arrow--prev",
  },
  pagination: {
    el: ".games__slider-pagination",
    clickable: 1,
  },
});

var swiper = new Swiper(".service-reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".service-reviews__slider .slider__arrow--next",
    prevEl: ".service-reviews__slider .slider__arrow--prev",
  },
  pagination: {
    el: ".service-reviews__slider-pagination",
    clickable: 1,
  },
  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    986: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".video-reviews__slider", {
  slidesPerView: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".video-reviews__slider .slider__arrow--next",
    prevEl: ".video-reviews__slider .slider__arrow--prev",
  },
  pagination: {
    el: ".video-reviews__slider-pagination",
    clickable: 1,
  },

  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 480px
    986: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 4,
    },
  },
});
