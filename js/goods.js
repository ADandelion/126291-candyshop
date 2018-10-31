'use strict';

var GOODS_NAME = ['Чесночные сливки', 'Огуречный педант', 'Молочная хрюша', 'Грибной шейк', 'Баклажановое безумие', 'Паприколу итальяно', 'Нинзя-удар васаби', 'Хитрый баклажан', 'Горчичный вызов', 'Кедровая липучка', 'Корманный портвейн', 'Чилийский задира', 'Беконовый взрыв', 'Арахис vs виноград', 'Сельдерейная душа', 'Початок в бутылке', 'Чернющий мистер чеснок', 'Раша федераша', 'Кислая мина', 'Кукурузное утро', 'Икорный фуршет', 'Новогоднее настроение', 'С пивком потянет', 'Мисс креветка', 'Бесконечный взрыв', 'Невинные винные', 'Бельгийское пенное', 'Острый язычок', ];
var GOODS_PICTURE = ['img/cards/gum-cedar.jpg', 'img/cards/gum-chile.jpg', 'img/cards/gum-eggplant.jpg', 'img/cards/gum-mustard.jpg', 'img/cards/gum-portwine.jpg', 'img/cards/gum-wasabi.jpg', 'img/cards/ice-cucumber.jpg', 'img/cards/ice-garlic.jpg', 'img/cards/ice-italian.jpg', 'img/cards/ice-mushroom.jpg', 'img/cards/ice-pig.jpg', 'img/cards/marmalade-bear.jpg', 'img/cards/marmalade-caviar.jpg', 'img/cards/marmalade-corn.jpg', 'img/cards/marmalade-new-year.jpg', 'img/cards/marmalade-sour.jpg', 'img/cards/marshmallow-bacon.jpg', 'img/cards/marshmallow-beer.jpg', 'img/cards/marshmallow-shrimp.jpg', 'img/cards/marshmallow-spicy.jpg', 'img/cards/marshmallow-wine.jpg', 'img/cards/soda-bacon.jpg', 'img/cards/soda-celery.jpg', 'soda-cob.jpg', 'img/cards/soda-garlic.jpg', 'img/cards/soda-peanut-grapes.jpg', 'img/cards/soda-russian.jpg'];
var GOODS_NUMBER = 26;
var CARTS_NUMBER = 2;

var goodsAmount = [];
var nutritionFacts = {
  sugar: [false, true],
  contents: ['молоко', 'сливки', 'вода', 'пищевой краситель', 'патока', 'ароматизатор бекона', 'ароматизатор свинца', 'ароматизатор дуба, идентичный натуральному', 'ароматизатор картофеля', 'лимонная кислота', 'загуститель', 'эмульгатор', 'консервант: сорбат калия', 'посолочная смесь: соль, нитрит натрия', 'ксилит', 'карбамид', 'вилларибо', 'виллабаджо', ]
};


// Выбираем случайный элемент из массива
var getRandomElement = function (element) {
  var rand = Math.floor(Math.random() * element.length);
  return element[rand];
};


// Выбираем случайное число из массива
var getRandomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

// Выбираем несколько элементов из массива nutritionFacts.contents
var getRandomSeveralValues = function (severalContent) {
  var severalValues = '';
  for (var i = 0; i < getRandomInteger(0, 17); i++) {
    severalValues += getRandomElement(severalContent) + ',' + ' ';
  }
  return severalValues;

};
//
// Создаем массив из объектов
var addGoodsObject = function (fnRandomElement, fnRandomInteger, fnRandomSeveralValues) {
  for (var i = 0; i < GOODS_NUMBER; i++) {
    goodsAmount.push({
      name: fnRandomElement(GOODS_NAME),
      picture: fnRandomElement(GOODS_PICTURE),
      amount: fnRandomInteger(0, 20),
      price: fnRandomInteger(100, 1500),
      weight: fnRandomInteger(30, 300),
      rating: {
        value: fnRandomInteger(1, 5),
        number: fnRandomInteger(10, 900)
      },
      nutritionFacts: {
        sugar: fnRandomElement(nutritionFacts.sugar),
        energy: fnRandomInteger(70, 500),
        contents: fnRandomSeveralValues(nutritionFacts.contents)
      }
    })
  }
  return goodsAmount;
};
var test111 = addGoodsObject(getRandomElement, getRandomInteger, getRandomSeveralValues);
console.log(test111)

// Часть 2
var catalogCards = document.querySelector('.catalog__cards');
catalogCards.classList.remove('catalog__cards--load');

var catalogLoad = catalogCards.querySelector('.catalog__load');
catalogLoad.classList.add('visually-hidden');


var cardTemplate = document.querySelector('#card');

// Добавляем данные для карточка товара
var addCardInformation = function (card) {
  var cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = goodsAmount.name;
  cardElement.querySelector('.card__img').src = goodsAmount.picture;
  cardElement.querySelector('.card__price').textContent = goodsAmount.price;
  cardElement.querySelector('.card__price').textContent = goodsAmount.weight;
  cardElement.querySelector('.card__price').textContent = goodsAmount.weight;

};

















