$(function(){
    var t=winw=vidw=0;

    $('.baropenBt').on({click:function(){
        $('.mobile-menu').stop().animate({right:0 +'%'},500,'easeInOutExpo');
        $('#header .menu-bar').stop().animate({right:100+'%'},500,'easeInOutExpo');
    }});

    $('.appbarCloseBt').on({click:function(){
        $('.mobile-menu').stop().animate({right:-100+'%'},500,'easeInOutExpo');
        $('#header .menu-bar').stop().animate({right:0+'%'},500,'easeInOutExpo');
    }});
    
    $(window).resize(function(){
        windowResizeFn()
    });
    function windowResizeFn(){
        if($(window).innerWidth() > 1090){
            if(t==0){
                t=1;
                $('.appbarCloseBt').trogger('click');
            }
        }else{
            t=0;
        }
    }
});