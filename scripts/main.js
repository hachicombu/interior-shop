const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
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
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
