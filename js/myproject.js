$(function() {

    "use strict";
    $('.title-list').click(function() {
        $(this).toggleClass('open');
        $(this).next('.list-link').toggleClass('open')

    });

    $('#slider-price').slider({
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
        $('#slider-price').slider('values', 0));
    $('input[name="maxPrice"]').val(
        $('#slider-price').slider('values', 1));
})