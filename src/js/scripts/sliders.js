const blockVideoSlider = new Swiper('.block-video__slider', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: '.block-video__swiper-pagination',
  },
  navigation: {
    nextEl: '.block-video__swiper-button-next',
    prevEl: '.block-video__swiper-button-prev',
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    577: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});

let heroProductionSlider = null;

function initHeroProductionSlider() {
  if (window.innerWidth <= 576 && !heroProductionSlider) {
    heroProductionSlider = new Swiper('.hero-production__slider', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.hero-production__swiper-pagination',
      },
    });
  } else if (window.innerWidth > 576 && heroProductionSlider) {
    heroProductionSlider.destroy(true, true);
    heroProductionSlider = null;
  }
}

initHeroProductionSlider();

window.addEventListener('resize', () => {
  initHeroProductionSlider();
});