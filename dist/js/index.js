const swiper = new Swiper(".blogSwiper", {
    fadeEffect: { crossFade: true },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    effect: "fade",
});
