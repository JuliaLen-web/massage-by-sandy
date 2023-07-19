const swiper = new Swiper('.staff.swiper', {
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 15
        },
 
        1272: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        
    }
});

const reviewsSwiper = new Swiper('.reviews.swiper', {
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});