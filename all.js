const swiper = new Swiper(".swiper", {
  // 分頁
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerGroup: 1,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    767: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
  },
});
