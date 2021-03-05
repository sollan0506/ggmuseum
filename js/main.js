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


    //패럴렉스 왼쪽 시작 
    function parallax(selector, startValue, scrolled){
        $(selector).css('left', ((scrolled * 0.2) + startValue) + 'px');
    }
    //패럴렉스 오른쪽 시작 
    function parallax2(selector, startValue, scrolled){
        $(selector).css('right', ((scrolled * 0.2) + startValue) + 'px');
    }

    
    $(window).on("scroll", function(e){
        var width = window.innerWidth;
        var scrolled = $(window).scrollTop();

        if(width > 768){ //desktop
            // 배경이미지 스크롤 반응
            parallax('.main_news .bg_ggmuseum', 100, scrolled);
	        parallax2('.main_relics .bg_relics', -800, scrolled);

            // top_btn
            if(scrolled < 20) {
                $(".top_btn").removeClass("on");
            } else {
                $(".top_btn").addClass("on");
            }
        }
        event.preventDefault(); 
    });
       
});