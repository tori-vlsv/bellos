
import Swiper, { Navigation } from 'swiper';

new Swiper('.hero-slider', {
  modules: [Navigation],
  speed: 800,
  slidesPerView: 1.5,
  breakpoints: {
    1280: {
      slidesPerView: 'auto',
      grabCursor: true
    },
  },
  navigation: {
    nextEl: '.hero__slider-next',
    prevEl: '.hero__slider-prev',
  }
});