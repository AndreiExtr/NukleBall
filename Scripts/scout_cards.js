// Получаем контейнеры, в которые будем добавлять карточки
var cardContainer = document.getElementById("cards_row_scout");
var cardContainer1 = document.getElementById("cards_row1_scout");
var cardContainer2 = document.getElementById("cards_row2_scout");
var cardContainer3 = document.getElementById("cards_row3_scout");

// Создаем копию карточки
var originalCard = document.querySelector(".card_scout");
var clonedCard = originalCard.cloneNode(true);

// Создаем 16 копий карточки (4 карточки по 4 раза)
for (var i = 0; i < 12; i++) {
    // Клонируем исходную карточку
    var cardClone = clonedCard.cloneNode(true);

    // Определяем, в какой контейнер добавлять карточку
    var container;
    if (i < 3) {
        container = cardContainer;
    } else if (i < 6) {
        container = cardContainer1;
    } else  if (i < 9) {
        container = cardContainer2;
    } else {
      container = cardContainer3;
    }

    // Добавляем клонированную карточку в соответствующий контейнер
    container.appendChild(cardClone);
}