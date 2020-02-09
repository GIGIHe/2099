$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".nav1 li").each(function (index) {
        $(this).click(function () {
            $(this).addClass('on').siblings('li').removeClass('on');
            $('.con').hide().eq(index).slideDown();
        })
    })
    $(".nav2 li").each(function (index) {
        $(this).click(function () {
            $(this).addClass('on').siblings('li').removeClass('on');
            $('.con1').hide().eq(index).slideDown();
        })
    })
    $(".nav3 li").each(function (index) {
        $(this).click(function () {
            $(this).addClass('on').siblings('li').removeClass('on');
            $('.con2').hide().eq(index).slideDown();
        })
    })
    // a href 对应跳转位置的id
    $('.dt a,.zgm1 a ').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})