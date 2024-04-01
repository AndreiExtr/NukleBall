// Получаем контейнер, в который будем добавлять карточки
var cardContainer = document.getElementById("cards_row");
var cardContainer1 = document.getElementById("cards_row1");

// Создаем копию карточки
var originalCard = document.querySelector(".card");
var clonedCard = originalCard.cloneNode(true);

// Создаем 20 копий карточки
for (var i = 0; i < 6; i++) {
    // Клонируем исходную карточку
    var cardClone = clonedCard.cloneNode(true);

    // Добавляем клонированную карточку в целевой контейнер
    if (i < 3) {
        cardContainer.appendChild(cardClone);
    } else {
        cardContainer1.appendChild(cardClone);
    }
}

