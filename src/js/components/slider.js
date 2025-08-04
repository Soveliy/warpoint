import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Pagination, Thumbs]);

const initSliders = () => {
  const NewsSlider = new Swiper(".news__slider", {
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

  const formatsSlider = new Swiper(".formats__slider", {
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

  const gamesSlider = new Swiper(".games__slider", {
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

  const serviceSlider = new Swiper(".service-reviews__slider", {
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

  const videoSlider = new Swiper(".video-reviews__slider", {
    slidesPerView: 1.1,
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

  document.querySelectorAll(".contact-detail").forEach((container) => {
    const previewsSlider = container.querySelector(
      ".contact-detail__previews-slider"
    );
    const mainSlider = container.querySelector(".contact-detail__main-slider");
    const nextBtn = container.querySelector(".slider__arrow--next");
    const prevBtn = container.querySelector(".slider__arrow--prev");

    if (!previewsSlider || !mainSlider) return;

    const thumbsSwiper = new Swiper(previewsSlider, {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        600: { slidesPerView: 4 },
        986: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      },
    });

    new Swiper(mainSlider, {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  });
};

initSliders();
