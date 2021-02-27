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
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-news-next',
            prevEl: '.swiper-button-news-prev'
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