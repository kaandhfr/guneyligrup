const heroSection = new Swiper("#entry-hero-section", {
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
});

const blogSwiper = new Swiper(".blogSwiper", {
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
