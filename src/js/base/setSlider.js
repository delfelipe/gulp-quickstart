
/*
|--------------------------------------------------------------------------
| Slider Principal
|--------------------------------------------------------------------------
*/


var slider = {

    init: function () {

        this.sliderPrincipal();
 

    },

    sliderPrincipal: function () {

        $('.bx-slider').bxSlider({
            auto: true,
            speed: 1000,
            onSliderLoad: function () {
                $(".slider").css("visibility", "visible");
            }
        });

    },

}
