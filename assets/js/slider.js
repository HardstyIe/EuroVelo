//  <!-- Initialize Swiper -->
var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  }
})

// Slider middle page

var swiper = new Swiper('.mySwiper2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
  navigation: true,
  keyboard: true,

  coverflowEffect: {
    rotate: 20,
    stretch: -50,
    depth: 50,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

var swiper = new Swiper('.mySwiper3', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
  navigation: true,
  keyboard: true,
  loop: true,

  coverflowEffect: {
    rotate: 20,
    stretch: -50,
    depth: 50,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
