$(function(){

    // swiper init
    var swiperNotice = new Swiper('.swiper-container-notice', {
        loop: true,
        direction: 'vertical',
        autoplay: {
            delay: 3000
        }
    });

    var swiperNews = new Swiper('.swiper-container-news', {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 0,
        updateOnWindowResize: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-news-next',
            prevEl: '.swiper-button-news-prev'
        },
        breakpoints: {
            768: {
                spaceBetween: 16
            }
        }
    });


    // masonry init
    $('#grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true,
        transitionDuration: 0
    });
       
});