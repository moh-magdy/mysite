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
        

    });
    // nav scroll
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
        if (startchange.length){
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $(".navbar-default").css({
                        'background-color': '#000',

                    });
                } else {
                    $('.navbar-default').css({
                        'background-color': 'transparent',
                        'border'  : 'none'
                });
                }
            });
        }

});