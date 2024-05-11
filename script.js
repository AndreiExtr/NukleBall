// ==========================

// ИГРОКИ
var cardContainer = document.getElementById("cards_row_gamer");
var cardContainer1 = document.getElementById("cards_row1_gamer");
var cardContainer2 = document.getElementById("cards_row2_gamer");
var cardContainer3 = document.getElementById("cards_row3_gamer");

// Создаем копию карточки
var originalCard = document.querySelector(".card_gamer");
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

// ==========================

// СКАУТЫ
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

// ==========================

// МАТЧИ
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

// ==========================

//ТАЙМЕР
document.addEventListener('DOMContentLoaded', function () {
    const newLocal = 1;
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, newLocal);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты

    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
//ТАЙМЕР

// ==========================



// // ПЕРЕХОД ИЗ СПИСКА КАРТОЧЕК НА СТРАНИЦУ ИГРОКА
document.addEventListener('DOMContentLoaded', function() {
  // Получаем все карточки игроков
  const cardGamers = document.querySelectorAll('.cards_row_gamer');

  // Получаем текущий активный раздел в боковой панели
  const currentActiveSection = document.querySelector('.sidebar .nav-item.active');

  // Для каждой карточки игрока добавляем обработчик события клика
  cardGamers.forEach(function(cardGamer) {
    cardGamer.addEventListener('click', function() {
      // Переходим на страницу игрока
      window.location.href = `page_gamer.html`;
      

      // Устанавливаем вкладку "Игроки" в фокусе после перехода на страницу игрока
      const playersTab = document.getElementById('item2');
      playersTab.classList.add('active');
    });
  });

  // Если текущий активный раздел в боковой панели был "Игроки", активируем его снова
  if (currentActiveSection && currentActiveSection.id === 'item2') {
    currentActiveSection.classList.add('active');
  }
});


// document.addEventListener('DOMContentLoaded', function() {
//   // Получаем все карточки игроков
//   const cardGamers = document.querySelectorAll('.cards_row_gamer');

//   // Для каждой карточки игрока добавляем обработчик события клика
//   cardGamers.forEach(function(cardGamer) {
//     cardGamer.addEventListener('click', function() {
//       // // Переходим на страницу игрока с id="page2.1"
//       window.location.href = `page_gamer.html`;
      
//       // Добавляем/удаляем классы активности для визуального отображения текущей страницы в навигации
//       const items = document.querySelectorAll('.nav-item');
//       items.forEach(item => {
//         if (item.id === 'item2.1') {
//           item.classList.add('active');
//         } else {
//           item.classList.remove('active');
//         }
//       });

//       // Устанавливаем вкладку "Игроки" в фокусе после перехода на страницу игрока
//       const playersTab = document.getElementById('item2');
//       playersTab.classList.add('active');
//     });
//   });
// });


