$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    $('.parallax-header-bg').css('top', -(scrollTop * 0.4)+"px");
    $('.parallax-header-bg2').css('top', -(scrollTop * 0.4)+"px");
});
