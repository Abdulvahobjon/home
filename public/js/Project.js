document.addEventListener("DOMContentLoaded", (event) => {
  AOS.init();
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
  swiper_pagination_bullet[1].textContent = "News";
  swiper_pagination_bullet[2].textContent = "Gallery";
  swiper_pagination_bullet[3].textContent = "Videos";
};
Swiper_pagination_bulletFun();
