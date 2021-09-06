$(document).ready(function(){
    $('.video__nav').click(function(){
            let myVideo = $(".video__content")[0];
            // $(this).prop("controls", true);
            myVideo.play();
            // myVideo.controls = "controls";
            // $(".video__utility-item").hide();
            $(".video__utility-item").hide();

            // $(".video__content")[0].prop("controls", true);
            // myVideo.paused ? myVideo.play() : myVideo.pause()
        });
    $(".video__content").click(function(){
        let myVideo = $(".video__content")[0];
        myVideo.pause();
        $(".video__utility-item").show();
    });        

  });