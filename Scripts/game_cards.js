// Получаем контейнеры, в которые будем добавлять карточки
var cardContainer = document.getElementById("cards_row_gamer");
var cardContainer1 = document.getElementById("cards_row1_gamer");
var cardContainer2 = document.getElementById("cards_row2_gamer");
var cardContainer3 = document.getElementById("cards_row3_gamer");

// Создаем копию карточки
var originalCard = document.querySelector(".card_gamer");
var clonedCard = originalCard.cloneNode(true);

// Создаем 16 копий карточки (4 карточки по 4 раза)
for (var i = 0; i < 6; i++) {
    // Клонируем исходную карточку
    var cardClone = clonedCard.cloneNode(true);

    // Определяем, в какой контейнер добавлять карточку
    var container;
    if (i < 3) {
        container = cardContainer;
    } else {
        container = cardContainer1;
    }

    // Добавляем клонированную карточку в соответствующий контейнер
    container.appendChild(cardClone);
}



