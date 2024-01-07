// Объединенный файл

// БОКОВОЕ МЕНЮ
const sidebarItems = document.querySelectorAll('.sidebar li');
// Добавляем обработчик события клика к каждому элементу списка
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


//ССЫЛКИ НА СТРАНИЦЫ 
document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки и страницы
    const page1Link = document.getElementById("page1-link");
    const page2Link = document.getElementById("page2-link");
    const page3Link = document.getElementById("page3-link");
    const page4Link = document.getElementById("page4-link");
    const page5Link = document.getElementById("page5-link");
    const page6Link = document.getElementById("page6-link");
    const page7Link = document.getElementById("page7-link");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");
    const page6 = document.getElementById("page6");
    const page7 = document.getElementById("page7");

    // Функция для скрытия всех страниц
    function hideAllPages() {
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";
        page6.style.display = "none";
        page7.style.display = "none";
    }

    // Начнем с отображения первой страницы
    hideAllPages();
    page1.style.display = "block";

    // Добавляем обработчики событий для переключения между страницами
    page1Link.addEventListener("click", function() {
        hideAllPages();
        page1.style.display = "block";
    });

    page2Link.addEventListener("click", function() {
        hideAllPages();
        page2.style.display = "block";
    });


    page3Link.addEventListener("click", function() {
        hideAllPages();
        page3.style.display = "block";
    });

    page4Link.addEventListener("click", function() {
        hideAllPages();
        page4.style.display = "block";
    });

    page5Link.addEventListener("click", function() {
        hideAllPages();
        page5.style.display = "block";
    });

    page6Link.addEventListener("click", function() {
        hideAllPages();
        page6.style.display = "block";
    });

    page7Link.addEventListener("click", function() {
        hideAllPages();
        page7.style.display = "block";
    });

});


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
  


// ПЕРЕХОД НА СТРАНИЦУ ИГРОКА ПО КЛИКЕ НА КАРТОЧКУ
const cards = document.querySelectorAll('.card_gamer'); // Выбираем все элементы с классом 'card'
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'gamer.html'; // Замените на URL второго сайта
    });
});


// ПЕРЕХОД НА СТРАНИЦУ СКАУТА ПО КЛИКЕ НА КАРТОЧКУ
const cardSs = document.querySelectorAll('.card_scout'); // Выбираем все элементы с классом 'card'
cardSs.forEach(cardS => {
    cardS.addEventListener('click', function() {
        // Перейти на второй сайт
        window.location.href = 'scout.html'; // Замените на URL второго сайта
    });
});


// ПАГИНАЦИЯ
const paginationItems = document.querySelectorAll('.pagination a');
// Добавляем обработчик события клика к каждому элементу списка
paginationItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        paginationItems.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


//ТАБЫ
// Получаем все элементы списка TABS1
const tabs1Items = document.querySelectorAll('.tabs1 a');
// Добавляем обработчик события клика к каждому элементу списка
tabs1Items.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabs1Items.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


// Получаем все элементы списка TABS2
const tabs2Items = document.querySelectorAll('.tabs2 a');
// Добавляем обработчик события клика к каждому элементу списка
tabs2Items.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabs2Items.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


// Получаем все элементы списка TABS3
const tabs3Items = document.querySelectorAll('.tabs3 a');
// Добавляем обработчик события клика к каждому элементу списка
tabs3Items.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов
        tabs3Items.forEach(item => {
            item.classList.remove('active');
        });

        // Добавляем класс "active" к элементу, по которому был клик
        item.classList.add('active');
    });
});


//ДИАГРАММА
var options = {
    series: [22, 78, 67, 83],
    chart: {
      height: 240,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '32px',
          },
          value: {
            fontSize: '24px',
            color: '#DDDDDD',
          },
          total: {
            show: true,
            label: 'Total',
            color: '#DDDDDD',
            formatter: function (w) {
              return 249;
            },
          },
        },
        track: {
            background: '#1f1f1f', // Укажите желаемый цвет контуров здесь
          },
      },
    },
    stroke: {
        lineCap: 'round',
      },
    labels: ['Speed', 'Accuracy', 'Endurance', 'Power'],
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

