$(document).ready(function(){

    $(window).scroll(function (){
        var wScroll = $(this).scrollTop();

        $('.logo').css({
            'transform' : 'translate(0px, '+ wScroll /2 +'%)'
        });
        $('.back').css({
            'transform' : 'translate(0px, '+ wScroll /20 +'%)'
        });

        if ($(document).scrollTop() > 20) {

            $('.navbar-default').css({
               'background': '#fff',
               'border'  : '#e7e7e7',
               
            });
            $('.navbar-nav>li>a').css({
                'color' : '#000'
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