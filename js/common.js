$(function(){

    // 햄버거버튼 토글
    $(".gnb_all_btn > a").click(function (e) { 
        $(".gnb_all").toggleClass("on");
        $(this).children("span").toggleClass("on");
        e.preventDefault();
    });
    $(".gnb_mob_btn > a").click(function (e) {
        $(this).children("span").toggleClass("on");
        $("header").toggleClass("on");
        $(".sitemap").slideToggle();
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

        // 스크롤이 header보다 아래로 내려가면 sub_nav 고정
        if(scrolled > headerHeight) {
            $(".contents_wrap .sub_nav").addClass("on");
        } else {
            $(".contents_wrap .sub_nav").removeClass("on");
        }
    });
    
    $(window).on("load resize", function(e){
        var width = window.innerWidth;

        if(width > 768){ //desktop
            // console.log("desktop");
            
            $("nav .gnb > li").hover(
                function () {
                    // over
                    $(this).find("ul").css("display", "block").animate({"opacity": "1"}, 300);
                }, function () {
                    // out
                    $(this).find("ul").animate({"opacity": "0"}, 300).css("display", "none");
                }
            );

            // 모바일 메뉴가 열려 있는 상태로 데스크탑 크기로 resize되었을 때 모바일 메뉴 숨기기
            $(".gnb_mob_btn > a").children("span").removeClass("on");
            $("header").removeClass("on");
            $(".sitemap").hide();
            
            // 데스크탑에서 sub_nav 보여주기
            $(".contents_wrap .sub_nav.exhibition").css("display", "block");
            $("header").css("border-bottom", "0");
        } else { //mobile
            // console.log("mobile");

            // 모바일 메뉴 슬라이드 토글
            var liCount = $(".sitemap_gnb > ul > li").length; // li의 개수를 저장
            var mGnbSts = []; // li의 상태를 저장하는 배열(0: 닫힘, 1: 열림)
            for( var i = 0; i < liCount; i++ ){
                mGnbSts.push(0); // 배열의 끝에 0을 추가
            }

            $(".sitemap_gnb .gnb_tit").click(function(e){
                e.preventDefault();

                var index = $(this).parent("li").index(); // 클릭한 li가 몇번째인지 index를 저장
                if(mGnbSts[index] === 0){ // 배열의 index번째가 0이라면 (클릭한 li가 닫혀있다면)
                    $(this).parent('li').siblings('li').find(".gnb_subtits").slideUp(200);
                    $(this).parent('li').siblings('li').find(".gnb_tit").removeClass('on');
                    $(this).addClass("on");
                    $(this).next(".gnb_subtits").slideDown(300);

                    mGnbSts = [];
                    for( var i = 0; i < liCount; i++ ){
                        mGnbSts.push(0); // 전부 닫힌 상태로 초기화
                    }
                    mGnbSts[index] = 1; // 클릭한 li번째는 열린 상태로 저장
                } else if( mGnbSts[index] === 1 ){ // 배열의 index번째가 1이라면 (클릭한 li가 열려있다면)
                    $(this).removeClass("on");
                    $(this).next(".gnb_subtits").slideUp(300);
                    
                    mGnbSts[index] = 0; // 클릭한 li번째를 닫힌 상태로 저장
                }
            });

            // 모바일에서 sub_nav 없는것들은 보여주지 않기
            $(".contents_wrap .sub_nav.exhibition").css("display", "none");
            $(".contents_wrap .contents.exhibition").css("padding-top", "0");
            $("header").css("border-bottom", "1px solid #eaeaea");
        }
    });
});