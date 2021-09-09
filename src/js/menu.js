$(document).ready(function(){
    $('.logo__menu-item').mouseenter(function(){
        $(this).children().show();
    })

    $('.logo__menu-item').mouseleave(function(){
        $(".logo__menu-dopItems").hide();
    })

    $('.logo__menu-search').click(function(){
        $(".logo__menu-inpat").show();
    })
    $('.logo').jarallax({
        speed: 0.2
        });
        
});

