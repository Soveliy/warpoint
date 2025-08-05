import { gsap } from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(
  MorphSVGPlugin,
  ScrollTrigger,
  ScrollSmoother,
  ScrollToPlugin
);

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".games-section-item").forEach((item) => {
  const title = item.querySelector(".games-section-item__title");
  const subtitle = item.querySelector(".games-section-item__subtitle");
  const desc = item.querySelector(".games-section-item__desc");
  const button = item.querySelector(".games-section-item__button");
  const video = item.querySelector(".games-section-item__video-wrap");
  const media = item.querySelector(".games-section-item__video-wrap img");
  const options = item.querySelectorAll(".games-section-item__option");

  const isMobile = window.matchMedia("(max-width: 1024px)").matches;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  tl.from(item, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power4.out",
  });

  if (isMobile) {
    tl.from(title, {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: "power3.out",
    })
      .from(
        subtitle,
        {
          opacity: 0,
          x: -30,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        desc,
        {
          opacity: 0,
          x: -20,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        options,
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(
        button,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
  } else {
    tl.from(
      options,
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    )
      .from(
        title,
        {
          opacity: 0,
          x: -50,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(
        subtitle,
        {
          opacity: 0,
          x: -40,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.35"
      )
      .from(
        desc,
        {
          opacity: 0,
          x: -30,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.35"
      )
      .from(
        button,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
  }

  // Параллакс изображения
  if (media) {
    // gsap.to(media, {
    //   yPercent: -15,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: item,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    // });
    gsap.fromTo(
      media,
      {
        yPercent: -15,
        ease: "none",
      },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }

  // Наклон карточки при скролле
  gsap.to(item, {
    rotationX: 5,
    rotationY: -5,
    ease: "none",
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});

const videoPoster = document.querySelector(".video-section__link img");

gsap.fromTo(
  videoPoster,
  {
    yPercent: -15,
    ease: "none",
  },
  {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: videoPoster,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  }
);
