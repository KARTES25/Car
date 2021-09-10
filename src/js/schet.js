let flag = 0;

    $(window).scroll(function() {
        console.log(flag)
        if   (flag == 1){return}
        let hT = $('.impact__status').offset().top,
            hH = $('.impact__status').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            function count($this){
                let current = parseInt($this.html(), 10);
                $this.html(++current + 'k+');
                if(current !== $this.data('num')){
                    setTimeout(function(){count($this)}, 50);
                }
            }

            $(".impact__big-text").each(function() {
                $(this).data('num', parseInt($(this).html(), 10));
                $(this).html('0');
                count($(this));
            });
            flag = 1;
        }
        
    });    

