$(function(){
    var winH=$(window).innerHeight();
    var winW=$(window).innerWidth();
    var vidH=$('#mainVideo').innerHeight();
    var vidW=$('#mainVideo').innerWidth();
    var videoPlay='on';
    var soundMuted='off';

    // 비디오제어 autoplay=true(자동재생), autoplay=false(자동재생안함)
    $('#mainVideo').get(0).autoplay=true; //배경이나 포스트가 보임
   // $('#mainVideo').get(0).pause(); //비디오 일시 중지
    //$('#mainVideo').get(0).play(); //비디오 재생
    $('#mainVideo').get(0).loop = 1; //비디오 반복 재생 loop=1 (무한반복) loop=0 (한번) 
    $('#mainVideo').get(0).playbackRate=1; //비디오 배속 재생
    $('#mainVideo').get(0).muted=true; //음소거

    // $('.section1-watch-again').hide();
    // $('.watchagainBt').on({click: function(){
    //     videoPlay='on';
    //     $('#mainVideo').get(0).play();
    //     $('.section1-watch-again').hide();
    //     $('.playPuaseIconBt').find('img').attr('src','img/icon-player-pause.png');
    //     }
    // });

    // $('.playPuaseIconBt').on({click:function(){
    //         if(videoPlay==='on'){
    //             videoPlay='off';
    //             $('#mainVideo').get(0).pause();
    //             $(this).find('img').attr('src','img/icon-player-play.png')
    //         }else{
    //             videoPlay='on';
    //             $('#mainVideo').get(0).play();
    //             $(this).find('img').attr('src','img/icon-player-pause.png');
    //             $('.section1-watch-again').hide();
    //         }
    //     }
    // });

    // $('.mutedIconBt').on({click:function(){
    //         if(soundMuted=== 'off'){
    //             soundMuted='on';
    //             $('#mainVideo').get(0).muted=false; //소리 켜기
    //             $(this).find('i').attr('class','fas fa-volume-off');
    //         }else{
    //             soundMuted='off';
    //             $('#mainVideo').get(0).muted=true; //소리 켜기
    //             $(this).find('i').attr('class','fas fa-volume-mute');
    //         }
    //     }
    // });

    // setId=setInterval(videoTimeCountFn, 100);
    // function videoTimeCountFn(){
    //     //console.log('현재진행 비디오 시간:' + $('#mainVideo').get(0).currentTime);
    //     //console.log('전체 비디오 시간 길이:' + $('#mainVideo').get(0).duration);
    //    // console.log('비디오 정지 여부:' + $('#mainVideo').get(0).ended);

    //     if($('#mainVideo').get(0).ended== true){
    //         $('.section1-watch-again').show();
    //         videoPlay='off';
    //         $('.playPuaseIconBt').find('img').attr('src','img/icon-player-play.png')
    //         clearInterval( setId)
    //     }
    // }


    //사이즈 변경될때마다 비디오 사이즈 변경
    setInterval(videoResizeFn, 100);
    $(window).resize(function(){
        videoResizeFn()
    });

    function videoResizeFn(){
        winH=$(window).innerHeight();
        winW=$(window).innerWidth();
        vidH=$('#mainVideo').innerHeight();
        vidW=$('#mainVideo').innerWidth();

       // console.log(winH);
       // console.log(vidH);
        $('.section1-main-video').css({width: 100+'%', height: winH}); // 수정하기

        if(winH>vidH){
            $('#mainVideo').css({width: 'auto', height: winH});
        }
        if(winW>vidW){
            $('#mainVideo').css({width: winW, height: 'auto'});
        }

        $('#mainVideo').css({marginTop: (winH-vidH)/2, marginLeft: (winW-vidW)/2});

    }


    $('#contentVideo').get(0).autoplay=true; //배경이나 포스트가 보임
    // $('#mainVideo').get(0).pause(); //비디오 일시 중지
     //$('#mainVideo').get(0).play(); //비디오 재생
     $('#contentVideo').get(0).loop = 1; //비디오 반복 재생 loop=1 (무한반복) loop=0 (한번) 
     $('#contentVideo').get(0).playbackRate=1; //비디오 배속 재생
     $('#contentVideo').get(0).muted=true; //음소거


});