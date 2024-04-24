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

