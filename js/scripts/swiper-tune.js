function swiperTune() {
    new Swiper(".image-slider", {
        direction: 'horizontal',
        slidesPerView: 1.1,
        watchOverflow: true,
        spaceBetween: 14
        // autoHeight: true
    });
}

export {
    swiperTune
}