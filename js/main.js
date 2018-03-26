$(document).ready(function(){
    // paralax
    $(window).scroll(function (){
        var wScroll = $(this).scrollTop();

        $('.logo').css({
            'transform' : 'translate(0px, '+ wScroll /2 +'%)'
        });
        $('.back').css({
            'transform' : 'translate(0px, '+ wScroll /20 +'%)'
        });
        // nav scroll
        if ($(document).scrollTop() > 20) {

            $('.navbar-default').css({
               'background': '#000',
               'border'  : 'none',
               
            });
            $('.navbar-nav>li>a').css({
                'color' : '#fff'
            });
        }else {
            $('.navbar-default').css({
                'background': 'rgba(255, 255, 255, 0)' ,
                'border'  : 'none'
             });
             $('.navbar-nav>li>a').css({
                'color' : '#fff'
            })

        }
        

    });

});