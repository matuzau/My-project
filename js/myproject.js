$(function() {

    "use strict";
    $('.title-list').click(function() {
        $(this).toggleClass('open');
        $(this).next('.list-link').toggleClass('open')

    });
});

/*$('#slider-price').slider({
        max: 40,
        min: 0,
        range: true,
        values: [3, 30],
        slide: function(event, ui) {
            $('.input[name="minPrice"]').val(ui.values[0]);
            $('.input[name="maxPrice"]').val(ui.values[1]);
        }
    });

    $('input[name="minPrice"]').val(
        '$' + $('#slider-price').slider('values', 0));
    $('input[name="maxPrice"]').val(
        'S' + $('#slider-price').slider('values', 1));


    $('#cart').click(function() {
        $('.cart-box').toggleClass('open');
    });


});*/

autoSlider();
var left = 0;
var timer;



function autoSlider() {
    timer = setTimeout(function() {
        var banner = document.getElementById('bannerSlider');
        left = left - 1370;
        if (left < -4110) {
            left = 0;
            clearTimeout(timer);
        }
        banner.style.left = left + 'px';
        autoSlider();
    }, 3000);
};

function show(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
}