$(function(){

    $("nav .gnb > li").hover(
        function () {
            // over
            $(this).children("ul").css("display", "block").animate({"opacity": "1"}, 300);
        }, function () {
            // out
            $(this).children("ul").animate({"opacity": "0"}, 300).css("display", "none");
        }
    );

    $(".gnb_all_btn > a").click(function (e) { 
        $(".gnb_all").toggleClass("on");
        $(this).children("span").toggleClass("on");
        e.preventDefault();
    });

});