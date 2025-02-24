document.addEventListener("DOMContentLoaded", (event) => {
  AOS.init();

  GLightbox({
    touchNavigation: true,
    loop: true,
    selector: '[data-filter-type=image]'
  });

  GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    selector: '[data-filter-type=video]'
  });

  GLightbox({
    touchNavigation: true,
    loop: true,
    selector: '[data-filter-type=construction_process]'
  });
});
var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let swiper_pagination_bullet = document.querySelectorAll(
  ".swiper-pagination-bullet"
);

const Swiper_pagination_bulletFun = () => {
  swiper_pagination_bullet[0].textContent = "Images";
  swiper_pagination_bullet[1].textContent = "Videos";
  swiper_pagination_bullet[2].textContent = "Construction process";
};
Swiper_pagination_bulletFun();
