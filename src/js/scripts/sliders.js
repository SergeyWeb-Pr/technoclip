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
    769: {
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
let chooseUsSlider = null;
let whyUsSlider = null;
let blockCatalogSlider = null;

let chooseUsSliders = [];
let whyUsSliders = [];

function initSliders() {
  if (window.innerWidth < 769 && heroProductionSlider === null) {
    heroProductionSlider = new Swiper('.hero-production__slider', {
      pagination: {
        el: '.hero-production__swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else if (window.innerWidth >= 769 && heroProductionSlider !== null) {
    heroProductionSlider.destroy(true, true);
    heroProductionSlider = null;
  }

  if (window.innerWidth < 769 && chooseUsSlider === null) {
    chooseUsSlider = new Swiper('.choose-us__slider', {
      pagination: {
        el: '.choose-us__swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else if (window.innerWidth >= 769 && chooseUsSlider !== null) {
    chooseUsSlider.destroy(true, true);
    chooseUsSlider = null;
  }

  if (window.innerWidth < 769 && whyUsSlider === null) {
    whyUsSlider = new Swiper('.why-us__slider', {
      pagination: {
        el: '.why-us__swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else if (window.innerWidth >= 769 && whyUsSlider !== null) {
    whyUsSlider.destroy(true, true);
    whyUsSlider = null;
  }

  if (window.innerWidth < 769 && blockCatalogSlider === null) {
    blockCatalogSlider = new Swiper('.block-catalog__slider', {
      pagination: {
        el: '.block-catalog__swiper-pagination',
      },
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else if (window.innerWidth >= 769 && blockCatalogSlider !== null) {
    blockCatalogSlider.destroy(true, true);
    blockCatalogSlider = null;
  }
}

initSliders();

window.addEventListener('resize', initSliders);
