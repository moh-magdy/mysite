
    $(document).ready(function() {


        $('.image-link').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
           
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
            
                duration: 600, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
            
                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                  return openerElement.is('img') ? openerElement : openerElement.find('img')
                }
              }

        });
        
    });

   /*
        $('.backg').css('height', $(window).height());
        // Comma, not colon ----^
    $(window).resize(function(){
        $('.backg').css('height', $(window).height());
      
        // Comma, not colon ----^
    });
    $('nav').hover(function(){
        $('.text').slideToggle(500);
        $('nav a').toggleClass('color') 
    });*/
