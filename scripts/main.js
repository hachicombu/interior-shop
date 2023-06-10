const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  slidePerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  // 表示状態のスライドに.swiper-slide-visibleがつく
  watchSlidesProgress: true,

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidePerView: 2,
    },
    1024: {
      slidePerView: 3,
      spaceBetween: 32,
    },
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
