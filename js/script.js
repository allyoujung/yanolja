var menu=$('.menu>ul>li');
var depth2=$('.menu>ul>li>ul');
var depth2_bg=$('.bg_white');

depth2.hide();
depth2_bg.hide();

menu.hover(function(){
    depth2.stop().slideDown();
    depth2_bg.stop().slideDown();
},function(){
    depth2.stop().slideUp();
    depth2_bg.stop().slideUp();
});