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
        1201: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        769: {
          spaceBetween: 20,
          slidesPerView: 4
        },
        577: {
          spaceBetween: 20,
          slidesPerView: 3
        },
        320: {
          spaceBetween: 20,
          slidesPerView: 1
        },
      }
});