// Получить случайное число от 0 до size-1
var getRandomNumber = function (size) {
    // Округление до ближайшего снизу целого числа
    return Math.floor(Math.random() * size);
};

// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
    // Расстояние по горизонтали
    var diffX = event.offsetX - target.x;
    // Расстояние по вертикали
    var diffY = event.offsetY - target.y;
    // Расстояние между двумя точками
    return  Math.sqrt ((diffX * diffX) + (diffY * diffY ));
};

// Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
    // Задание подсказки от расстояния до точки клада
     // Если расстояние меньше 10
    if (distance < 10) {
        return "Обожжешься!";
        // Если расстояние меньше 20 
    } else if (distance < 20) {
        return "Очень горячо";
        // Если расстояние меньше 40
    } else if (distance < 40) {
        return "Горячо" + " " + (50 - clicks);
        // Если расстояние меньше 80
    } else if (distance < 80) {
        return "Тепло";
        // Если расстояние меньше 160
    }else if (distance < 160) {
        return "Холодно"  + " " + (50 - clicks);
         // Если расстояние меньше 320
    }else if (distance < 320) {
        return "Очень холодно";
    }else if (distance < 360) {
        return "Очень-Очень холодно";
    }else {
        return "Замерзнешь!";
    }
};

// Создаем переменные ширина, высота
var width = 400;
var height = 400;
// Подсчёт кликов
var clicks = 0;

// Случайная позиция клада
var target = {
    // Создание позиции по горизонтали
    x: getRandomNumber (width),
    // Создание позиции по вертикали
    y: getRandomNumber (height)
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
clicks++;

// Получаем расстояние от места клика до клада
var distance = getDistance(event, target);

// Преобразуем расстояние в подсказку
var distanceHint = getDistanceHint(distance);

// Записываем в элемент #distance новую подсказку
$("#distance").text(distanceHint);

if (clicks >50) {
    alert ("КОНЕЦ ИГРЫ");
}

// Если клик был достаточно близко, поздравляем с победой
if (distance <8) {
    alert ("Клад найден! Сделано кликов: " + clicks);
}
});
