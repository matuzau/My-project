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

// autoSlider();
// var left = 0;
// var timer;



// function autoSlider() {
//     timer = setTimeout(function() {
//         var banner = document.getElementById('bannerSlider');
//         left = left - 1140;
//         if (left < -3420) {
//             left = 0;
//             clearTimeout(timer);
//         }
//         banner.style.left = left + 'px';
//         autoSlider();
//     }, 3000);
// };

function show(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
};

var goods = {
    "item1": {
        "name": "Клей Тайфун №18",
        "cost": 8.00,
        "description": "Клей для блоков",
        "image": "images/клей18.jpg"
    },
    "item2": {
        "name": "Клей Тайфун №50",
        "cost": 9.50,
        "description": "Клей для приклеивания утеплителя",
        "image": "images/клей50.jpg"
    },
    "item3": {
        "name": "Штукатурка Тайфун №22",
        "cost": 14.70,
        "description": "Декоративная штукатурка",
        "image": "images/тайфун22.jpg"
    },
    "item4": {
        "name": "Клей Люкс",
        "cost": 5.40,
        "description": "Клей для плитки",
        "image": "images/клейлюкс.jpg"
    },
    "item5": {
        "name": "Белгипс ГКЛ",
        "cost": 11.80,
        "description": "Гипсокартон для стен",
        "image": "images/белгипсгкл.jpg"
    },
    "item6": {
        "name": "Кнауф ГКЛВО",
        "cost": 13.10,
        "description": "Гипсокартон для стен",
        "image": "images/кнауфгкло.jpg"
    },
    "item7": {
        "name": "Клей Тайфун №51",
        "cost": 9.60,
        "description": "Клей для утеплителя",
        "image": "images/клей51.jpg"
    },
    "item8": {
        "name": "Белгипс ГКЛВ",
        "cost": 10.50,
        "description": "Гипсокартон для стен",
        "image": "images/белгипсгклв.jpg"
    },
    "item9": {
        "name": "Стяжка Тайфун №42",
        "cost": 14.70,
        "description": "Стяжка для пола",
        "image": "images/тайфун42.jpg"
    }
};
console.log(goods);

var out = '';
for (var key in goods) {
    out += 'Название: ' + goods[key].name + '<br>';
    out += 'Цена: ' + goods[key].cost + '<br>';
}
document.getElementById('out').innerHTML = out;
// $('document').ready(function() {
//     loadGoods();

// });

// function loadGoods() {
//     $.getJSON('goods.json', function(data) {
//         var out = '';
//         for (var key in data) {
//             out += '<div class="single-goods">';
//             out += '<h3>' + data[key]['name'] + '</h3>';
//             out += '<p>Цена: ' + data[key]['cost'] + '</p>';
//             out += '<img src="' + data[key].image + '">';
//             out += '<button>Купить</button>';
//             out += '</div>';
//         }
//         $('#goods').html(out);
//     });
// }