
var modalDarkWrapper = document.querySelector(".modal-dark-wrapper");
var modalWrapper = document.querySelector(".modal-wrapper");
var feedback = document.querySelector(".feedback-btn");
var feedbackPopup = document.querySelector(".feedback-form");
var buttonClose = document.querySelector(".button-close");
var customerName = document.querySelector("[name=customer-name]");


var search = document.querySelector(".search");
var searchPopup = document.querySelector(".search-field");

var login = document.querySelector(".login");
var loginPopup = document.querySelector(".login-form");

var cart = document.querySelector(".cart");
var cartFull = document.querySelector(".cart-full");
var cartPopup = document.querySelector(".cart-field");


search.addEventListener("click", function (evt) {
       evt.preventDefault();
       searchPopup.classList.add("visually-show");
       modalWrapper.classList.add("visually-show");
});



login.addEventListener("click", function (evt) {
       evt.preventDefault();
       loginPopup.classList.add("visually-show");
       modalWrapper.classList.add("visually-show");
});



if (cartPopup && cart) {
       cart.addEventListener("click", function (evt) {
              evt.preventDefault();
              cartPopup.classList.add("visually-show-inlblock");
              modalWrapper.classList.add("visually-show");
       });
}

if (cartPopup && cartFull) {
       cartFull.addEventListener("click", function (evt) {
              evt.preventDefault();
              cartPopup.classList.add("visually-show-inlblock");
              modalWrapper.classList.add("visually-show");
       });
}



if (feedback) {
       feedback.addEventListener("click", function (evt) {
              evt.preventDefault();
              feedbackPopup.classList.add("visually-show-popup");
              modalDarkWrapper.classList.add("visually-show");
              customerName.focus();

       });
}


if (buttonClose) {
       buttonClose.addEventListener("click", function (evt) {
              evt.preventDefault();
              modalDarkWrapper.classList.remove("visually-show");
              feedbackPopup.classList.remove("visually-show-popup");
              feedbackForm.classList.remove("modal-error");
       });
}


modalWrapper.addEventListener("click", function () {
       loginPopup.classList.remove("visually-show");
       searchPopup.classList.remove("visually-show");
       if (feedbackPopup) {
              feedbackPopup.classList.remove("visually-show");
       }
       if (cartPopup) {
              cartPopup.classList.remove("visually-show-inlblock");
       }
       modalWrapper.classList.remove("visually-show");

});


if (modalDarkWrapper) {
       modalDarkWrapper.addEventListener("click", function () {
              feedbackPopup.classList.remove("visually-show-popup");
              feedbackForm.classList.remove("modal-error");
              modalDarkWrapper.classList.remove("visually-show");

       });
}


document.addEventListener("keydown", function (evt) {
       if (evt.keyCode === 27) {
              if (modalDarkWrapper) {
                     modalDarkWrapper.classList.remove("visually-show");
              }
              if (feedbackPopup) {
                     feedbackPopup.classList.remove("visually-show-popup");
                     feedbackForm.classList.remove("modal-error");
              }
       }
});

// Form feedback//

var feedbackForm = document.querySelector(".feedback-form");
if (feedbackForm) {
       var feedbackFormForm = feedbackForm.querySelector("form");
       var feedbackName = feedbackForm.querySelector(".customer-name");
       var feedbackEmail = feedbackForm.querySelector(".customer-email");
       var feedbackMessage = feedbackForm.querySelector(".customer-message");
}



if (feedbackFormForm) {
       feedbackFormForm.addEventListener("submit", function (evt) {
              if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
                     evt.preventDefault();
                     feedbackForm.classList.add("modal-error");
                     feedbackForm.classList.remove("modal-error");
                     feedbackForm.offsetWidth = feedbackForm.offsetWidth;
                     feedbackForm.classList.add("modal-error");
              } else {
                     feedbackForm.classList.remove("visually-show-popup");
                     modalDarkWrapper.classList.remove("visually-show");
                     feedbackForm.classList.remove("modal-error");
              }

       });
}


// Слайдер bullets //

var bullet1 = document.querySelector(".slider-controls button:nth-child(1)");
var bullet2 = document.querySelector(".slider-controls button:nth-child(2)");
var bullet3 = document.querySelector(".slider-controls button:nth-child(3)");
var sliderWrapper = document.querySelector(".wrapper");
var sliderTitle1 = document.querySelector(".slider-list li:nth-child(1)");
var sliderTitle2 = document.querySelector(".slider-list li:nth-child(2)");
var sliderTitle3 = document.querySelector(".slider-list li:nth-child(3)");


if (bullet1) {
       bullet1.addEventListener("click", function () {
              bullet1.classList.add("current");
              bullet2.classList.remove("current");
              bullet3.classList.remove("current");
              sliderWrapper.classList.add("site-wrapper-1");
              sliderWrapper.classList.remove("site-wrapper-2");
              sliderWrapper.classList.remove("site-wrapper-3");
              sliderTitle1.classList.add("slide-current");
              sliderTitle2.classList.remove("slide-current");
              sliderTitle3.classList.remove("slide-current");
       });

       bullet2.addEventListener("click", function () {
              bullet1.classList.remove("current");
              bullet2.classList.add("current");
              bullet3.classList.remove("current");
              sliderWrapper.classList.remove("site-wrapper-1");
              sliderWrapper.classList.add("site-wrapper-2");
              sliderWrapper.classList.remove("site-wrapper-3");
              sliderTitle1.classList.remove("slide-current");
              sliderTitle2.classList.add("slide-current");
              sliderTitle3.classList.remove("slide-current");
       });

       bullet3.addEventListener("click", function () {
              bullet1.classList.remove("current");
              bullet2.classList.remove("current");
              bullet3.classList.add("current");
              sliderWrapper.classList.remove("site-wrapper-1");
              sliderWrapper.classList.remove("site-wrapper-2");
              sliderWrapper.classList.add("site-wrapper-3");
              sliderTitle1.classList.remove("slide-current");
              sliderTitle2.classList.remove("slide-current");
              sliderTitle3.classList.add("slide-current");
       });
}



// Яндекс карты// 
//Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
if (typeof(ymaps) !== "undefined") {
       ymaps.ready(function () {
              var myMap = new ymaps.Map("map", {
                     center: [59.939880, 30.330689],
                     zoom: 15.5,
                     controls: [] //убираем слои, пробки и т.д.
              }, {
                     //searchControlProvider: "yandex#search"
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
                     }, {
                            // Опции.
                            // Необходимо указать данный тип макета.
                            iconLayout: "default#image",
                            // Своё изображение иконки метки.
                            iconImageHref: "img/pin-ice.svg",
                            // Размеры метки.
                            iconImageSize: [80, 140],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            iconImageOffset: [-40, -140],
                            // Смещение слоя с содержимым относительно слоя с картинкой.
                            iconContentOffset: [15, 15],
                            // Макет содержимого.
                            iconContentLayout: MyIconContentLayout
                     }),



                     myMap.geoObjects
                            .add(myPlacemark);
       });
}