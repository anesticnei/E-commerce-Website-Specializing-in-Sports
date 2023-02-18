let swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 100,
    slidesPerGroup: 1,
    centeredSlides: 'true',
    fade: 'true',
    loop: 'true',
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

let swiperHero = new Swiper(".slide-content-hero", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: 'true',
    fade: 'true',
    loop: 'true',
    
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      600:{
        slidesPerView: 2,
      },
      900:{
        slidesPerView: 3,
      },
    }
  });

  let swiperShop = new Swiper(".slide-content-shop", {
    slidesPerView: 1,
    spaceBetween: 120,
    slidesPerGroup: 1,
    // centeredSlides: 'false',
    fade: 'true',
    // watchOverflow: true,
    // loop: 'true',
  

    
    breakpoints:{
      0:{
        slidesPerView: 2,
      },
      700:{
        slidesPerView: 3,
      },
      // 900:{
      //   slidesPerView: 4,
      // },
      1000:{
        slidesPerView: 4,
      },
      1300:{
        slidesPerView: 6,
        spaceBetween: 220,
        // loop: 'false',
  
      },
    }
  });