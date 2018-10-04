$(function() {

    "use strict";
    $('.title-list').click(function() {
        $(this).toggleClass('open');
        $(this).next('.list-link').toggleClass('open')

    });
});


function show(state) {
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
};

// var cartBtn = document.querySelector('#cart');
// var cartOpen = document.querySelector('.cart-box')
// cartBtn.onclick = function() {
//     cartOpen.className = 'open';
// };
$('#cart, .cart-title').click(function() {
    $('.cart-box').toggleClass('open');
});

$('.header__search').click(function() {
    $('.search-panel').toggleClass('open');
});



// var navlinks = document.querySelector('.header__nav li #nav-links');
// navlinks.onfocus = function() {
//     navlinks.style.backgroundColor = 'red';
// };

var goods = [{
        name: "Клей Тайфун №18",
        cost: 8.00,
        description: "Клей для блоков",
        image: "images/клей18.jpg"
    },
    {
        name: "Клей Тайфун №50",
        cost: 9.50,
        description: "Клей для приклеивания утеплителя",
        image: "images/клей50.jpg"
    },
    {
        name: "Штукатурка Тайфун №22",
        cost: 14.70,
        description: "Декоративная штукатурка",
        image: "images/тайфун22.jpg"
    },
    {
        name: "Клей Люкс",
        cost: 5.40,
        description: "Клей для плитки",
        image: "images/клейлюкс.jpg"
    },
    {
        name: "Белгипс ГКЛ",
        cost: 11.80,
        description: "Гипсокартон для стен",
        image: "images/белгипсгкл.png"
    },
    {
        name: "Кнауф ГКЛВО",
        cost: 13.10,
        description: "Гипсокартон для стен",
        image: "images/кнауфгкло.jpg"
    },
    {
        name: "Клей Тайфун №51",
        cost: 9.60,
        description: "Клей для утеплителя",
        image: "images/клей51.jpg"
    },
    {
        name: "Белгипс ГКЛВ",
        cost: 10.50,
        description: "Гипсокартон для стен",
        image: "images/белгипсгклв.png"
    },
    {
        name: "Стяжка Тайфун №42",
        cost: 14.70,
        description: "Стяжка для пола",
        image: "images/тайфун42.jpg"
    }
];

var list = document.querySelector('.list-product');
goods.forEach(function(item) {
    var box = createBox(item);
    list.appendChild(box);
});

function createBox(item) {
    var box = document.createElement('div');
    box.classList.add("product");
    box.innerHTML =
        '<div class="product-img"><img src=' + item.image + '></div>' +
        '<div class="product-title">' + item.name + '</div>' +
        '<div class="product-description">' + item.description + '</div>' +
        '<div class="product-price">' + item.cost + " руб " + '</div>' +
        '<button class="product-btn">' + "Купить" + '</button>'
    return box;
};

$('#load-more').click(function(event) {
    event.preventDefault();
    $('.list-product').appendChild(product);
});


// var product = document.querySelectorAll('#product-title');
// // var img = document.createElement('img');
// var h2 = document.createElement('h2');
// var name = item.name;
// h2.innerText = name;
// h2.innerHTML = name;
// // img.innerHTML = '<img src="' + item.image + '">';
// product[1].appendChild(h2);
// console.log(h2);