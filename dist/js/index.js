const swiper = new Swiper(".blogSwipoer", {
    fadeEffect: { crossFade: true },
    loop: true,
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
