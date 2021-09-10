$(document).ready(function(){
    let tab = $(".tabs__answer");
    let nav = $(".tabs__ask");
    $('.tabs__ask').click(function(){
        let index = $('.tabs__ask').index($(this));
        tab.animate({
            width: "hide"
        },
        200
        );
        $(tab[index]).animate({
            width: "show"
        },
        200
        );
        nav.removeClass('tabs__ask-active');
        $(nav[index]).addClass('tabs__ask-active');
    })
});