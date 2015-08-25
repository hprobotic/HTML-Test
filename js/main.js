function pacordion(){
    if ($('body').width() < 960)  {
         $('.havesub').addClass('acordion');
          
    }
    else{
        $('.havesub').removeClass('acordion');
         
    }
}

$(window).resize(function () {
    pacordion();
});

$(document).ready(function () {

    pacordion();

    if($('.menusm').length > 0){
        $( ".menusm" ).click(function() {
            $('.nav_sm').stop(true, false).slideToggle(200);
            return false;
        });
    }

    if($('.closeNav').length > 0){
        $( ".closeNav" ).click(function() {
            $('.nav_sm').slideUp(200);
            return false;
        });
    }

    if ($('.ulSlider').length > 0) {
        $('.ulSlider').bxSlider({
            auto: true,
            speed :'300',
            randomStart: true,
        });
    }

    if ($('.ulSlider01').length > 0) {
        $('.ulSlider01').bxSlider({
            auto: false,
            speed :'800',
            pager : false,
            slideWidth: 340,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            onSliderLoad: function () {
                $('.ulSlider01 li:not(.bx-clone)').eq(1).addClass('active');
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                $('.ulSlider01 li').removeClass('active');
                $($slideElement).next().addClass('active');
                $($slideElement).next().click();
            }
        });
    }


    $('.ulslider_sm').bxSlider({
        auto: true,
        speed: 1000,
        controls: false,
    });


     // Button goto Top
   $('.btnbacktop').click(function() {
        $('html, body').animate({scrollTop:0},500);
        return false;
    });

   if($('.acordion').length > 0){
        $('.stt1').click(function()
        {
            $('.viewless').removeClass('viewless');
            $('.childnav').slideUp('normal');
            if($(this).next('.childnav').is(':hidden')==true)
            {
                $(this).addClass('viewless');
                $(this).next('.childnav').slideDown('normal');
            }
            return false;
        });
    }


});

