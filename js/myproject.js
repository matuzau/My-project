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

// var itemBox = document.querySelectorAll('.product');
// var cartCont = document.querySelector('.cart-content');

// function addEvent(elem, type, handler) {
//     if (elem.addEventListener) {
//         elem.addEventListener(type, handler, false);
//     } else {
//         elem.attachEvent('on' + type, function() {
//             handler.call(elem);
//         });
//     }
//     return false;
// }
// // Получаем данные из LocalStorage
// function getCartData() {
//     return JSON.parse(localStorage.getItem('cart'));
// }
// // Записываем данные в LocalStorage
// function setCartData(o) {
//     localStorage.setItem('cart', JSON.stringify(o));
//     return false;
// }
// // Добавляем товар в корзину
// function addToCart(e) {
//     this.disabled = true; // блокируем кнопку на время операции с корзиной
//     var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
//         parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
//         itemId = this.getAttribute(item.id), // ID товара
//         itemTitle = parentBox.querySelector(item.name).innerHTML, // название товара
//         itemPrice = parentBox.querySelector(item.cost).innerHTML; // стоимость товара
//     if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
//         cartData[itemId][2] += 1;
//     } else { // если товара в корзине еще нет, то добавляем в объект
//         cartData[itemId] = [itemTitle, itemPrice, 1];
//     }
//     if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
//         this.disabled = false; // разблокируем кнопку после обновления LS
//     }
//     return false;
// }
// // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
// for (var i = 0; i < itemBox.length; i++) {
//     addEvent(itemBox[i].querySelector('.product-btn'), 'click', addToCart);
// }
// // Открываем корзину со списком добавленных товаров
// function openCart(e) {
//     var cartData = getCartData(), // вытаскиваем все данные корзины
//         totalItems = '';
//     // если что-то в корзине уже есть, начинаем формировать данные для вывода
//     if (cartData !== null) {
//         totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
//         for (var items in cartData) {
//             totalItems += '<tr>';
//             for (var i = 0; i < cartData[items].length; i++) {
//                 totalItems += '<td>' + cartData[items][i] + '</td>';
//             }
//             totalItems += '</tr>';
//         }
//         totalItems += '</table>';
//         cartCont.innerHTML = totalItems;
//     } else {
//         // если в корзине пусто, то сигнализируем об этом
//         cartCont.innerHTML = 'В корзине пусто!';
//     }
//     return false;
// }
// /* Открыть корзину */
// addEvent(document.getElementById('order'), 'click', openCart);

menu.onclick = function myFunction() {
    var x = document.querySelector('.header__nav');
    if (x.className === "header__nav") {
        x.className += "responsive";
    } else {
        x.className = "header__nav";
    }
}