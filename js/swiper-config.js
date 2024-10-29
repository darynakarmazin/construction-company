document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: 2.5,
      },
    },
  });
});
