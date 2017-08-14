$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    $('.parallax-header-bg').css('top', -(scrollTop * 0.3)+"px");
});
