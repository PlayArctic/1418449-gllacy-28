
var modaldarkwrapper = document.querySelector('.modal-dark-wrapper');


var feedback = document.querySelector('.feedback-btn');
var feedbackpopup = document.querySelector('.feedback-form');
var buttonclose = document.querySelector('.button-close');




if (feedback) {
       feedback.addEventListener('click', function (evt) {
              evt.preventDefault();
              feedbackpopup.classList.add('visually-show');
              modaldarkwrapper.classList.add('visually-show');

       });
}


if (buttonclose) {
       buttonclose.addEventListener('click', function (evt) {
              evt.preventDefault();
              modaldarkwrapper.classList.remove('visually-show');
              feedbackpopup.classList.remove('visually-show');
       });
}



if (modaldarkwrapper) {
       modaldarkwrapper.addEventListener('click', function () {
              feedbackpopup.classList.remove('visually-show');
              modaldarkwrapper.classList.remove('visually-show');
       });
}


document.addEventListener('keydown', function (evt) {
       if (evt.keyCode === 27) {
              if (modaldarkwrapper) {
                     modaldarkwrapper.classList.remove('visually-show');
              }
              if (feedbackpopup) {
                     feedbackpopup.classList.remove('visually-show');
              }
       }
});


// Слайдер bullets

var bullet1 = document.querySelector('.slider-controls button:nth-child(1)');
var bullet2 = document.querySelector('.slider-controls button:nth-child(2)');
var bullet3 = document.querySelector('.slider-controls button:nth-child(3)');
var sliderWrapper = document.querySelector('.wrapper');
var sliderTitle1 = document.querySelector('.slider-list li:nth-child(1)');
var sliderTitle2 = document.querySelector('.slider-list li:nth-child(2)');
var sliderTitle3 = document.querySelector('.slider-list li:nth-child(3)');

bullet1.addEventListener('click', function () {
       bullet1.classList.add('current');
       bullet2.classList.remove('current');
       bullet3.classList.remove('current');
       sliderWrapper.classList.add('site-wrapper-1');
       sliderWrapper.classList.remove('site-wrapper-2');
       sliderWrapper.classList.remove('site-wrapper-3');
       sliderTitle1.classList.add('slide-current');
       sliderTitle2.classList.remove('slide-current');
       sliderTitle3.classList.remove('slide-current');
});

bullet2.addEventListener('click', function () {
       bullet1.classList.remove('current');
       bullet2.classList.add('current');
       bullet3.classList.remove('current');
       sliderWrapper.classList.remove('site-wrapper-1');
       sliderWrapper.classList.add('site-wrapper-2');
       sliderWrapper.classList.remove('site-wrapper-3');
       sliderTitle1.classList.remove('slide-current');
       sliderTitle2.classList.add('slide-current');
       sliderTitle3.classList.remove('slide-current');
});

bullet3.addEventListener('click', function () {
       bullet1.classList.remove('current');
       bullet2.classList.remove('current');
       bullet3.classList.add('current');
       sliderWrapper.classList.remove('site-wrapper-1');
       sliderWrapper.classList.remove('site-wrapper-2');
       sliderWrapper.classList.add('site-wrapper-3');
       sliderTitle1.classList.remove('slide-current');
       sliderTitle2.classList.remove('slide-current');
       sliderTitle3.classList.add('slide-current');
});


// Яндекс карты// 
//Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.

ymaps.ready(function () {
       var myMap = new ymaps.Map('map', {
              center: [59.939880, 30.330689],
              zoom: 15.5,
              controls: [] //убираем слои, пробки и т.д.
       }, {
              //searchControlProvider: 'yandex#search'
       }, {
              suppressMapOpenBlock: true //убираем открыть в яндекс картах
       }, {
              behaviors: [] //линейка это поведение. убираем линейку
       });

       // Создаём макет содержимого.
       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
       ),
              myPlacemark = new ymaps.Placemark([59.938525, 30.323026], {
                     //hintContent: 'Собственный значок метки',
                     //balloonContent: 'Это красивая метка'
              }, {
                     // Опции.
                     // Необходимо указать данный тип макета.
                     iconLayout: 'default#image',
                     // Своё изображение иконки метки.
                     iconImageHref: 'img/pin_ice.svg',
                     // Размеры метки.
                     iconImageSize: [80, 140],
                     // Смещение левого верхнего угла иконки относительно
                     // её 'ножки' (точки привязки).
                     iconImageOffset: [-40, -140],
                     // Смещение слоя с содержимым относительно слоя с картинкой.
                     iconContentOffset: [15, 15],
                     // Макет содержимого.
                     iconContentLayout: MyIconContentLayout
              }),



              myMap.geoObjects
                     .add(myPlacemark)
                     .add(myPlacemarkWithContent);
});
