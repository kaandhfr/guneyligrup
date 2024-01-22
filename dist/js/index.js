const heroSection = new Swiper("#entry-hero-section", {
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".entry-hero-next",
        prevEl: ".entry-hero-prev",
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
