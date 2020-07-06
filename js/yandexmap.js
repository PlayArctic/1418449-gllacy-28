// Функция ymaps.ready() будет вызвана, когда
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
    })

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
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -140],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            //iconContentOffset: [15, 15],
            // Макет содержимого.
            //iconContentLayout: MyIconContentLayout
        }),



        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
});