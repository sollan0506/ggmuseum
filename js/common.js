$(function(){

    var width = window.innerWidth;

    if(width > 768){ //desktop
        $("nav .gnb > li").hover(
            function () {
                // over
                $(this).find("ul").css("display", "block").animate({"opacity": "1"}, 300);
            }, function () {
                // out
                $(this).find("ul").animate({"opacity": "0"}, 300).css("display", "none");
            }
        );
    } else {
        // 모바일 메뉴 슬라이드 토글
        $("nav .gnb > li > a").click(function (e) { 
            e.preventDefault();
            $(this).toggleClass("on");
            $(this).parent().children("ul").slideToggle();
            $("nav > div").toggleClass("on");
        });
    }

    // 햄버거버튼 토글
    $(".gnb_all_btn > a").click(function (e) { 
        $(".gnb_all").toggleClass("on");
        $(this).children("span").toggleClass("on");
        e.preventDefault();
    });
    $(".gnb_mob_btn > a").click(function (e) {
        $(this).children("span").toggleClass("on");
        $("header").toggleClass("on");
        $("nav").slideToggle();
        $(".submenu").toggleClass("on");
        e.preventDefault();
    });


    // sub_nav hover
    $(".contents_wrap .sub_nav .container > ul > li:nth-child(2), .contents_wrap .sub_nav .container > ul > li:nth-child(3)").hover(
        function () {
            $(this).children("ul").stop().fadeIn(300);
        }, function () {
            $(this).children("ul").stop().fadeOut(300);
        }
    );


    // sub_nav 스크롤시 fixed
    $(window).on("scroll", function(e){
        var scrolled = $(window).scrollTop();
        var headerHeight = $("header").height();

        if(width > 768){ //desktop
            // 스크롤이 header보다 아래로 내려가면 sub_nav 고정
            if(scrolled > headerHeight) {
                $(".contents_wrap .sub_nav").addClass("on");
            } else {
                $(".contents_wrap .sub_nav").removeClass("on");
            }
        }
    });
    
    

});