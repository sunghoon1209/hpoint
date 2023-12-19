// btn_top

$(function () {
    // 로고와 하단화살표 클릭시 최상단으로 이동
    $(".logo, .btn_top").on("click", function () {
        // $(this).removeAttr("href")
        $("html, body").stop().animate({
            scrollTop: 0
        }, 400);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });

});