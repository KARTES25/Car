$(document).ready(function(){
    $('.video__nav').click(function(){
            let myVideo = $(".video__content")[0];
            myVideo.play();
            $(".video__utility-item").hide();
        });
    $(".video__content").click(function(){
        let myVideo = $(".video__content")[0];
        myVideo.pause();
        $(".video__utility-item").show();
    });        

  });