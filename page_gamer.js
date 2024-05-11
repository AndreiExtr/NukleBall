// Устанавливаем вкладку "Игроки" в фокусе после перехода на страницу игрока
const playersTab = document.getElementById('item2');
playersTab.classList.add('active');


// СКРОЛЛ ДЛЯ БЛОКА ВИДЕО, ДРУЗЬЯ И МАТЧИ
let currentIndexV = 0;
const slidesV = document.querySelectorAll('.slidV');
const totalSlidesV = slidesV.length;

let currentIndexF = 0;
const slidesF = document.querySelectorAll('.slidF');
const totalSlidesF = slidesF.length;

function scrollSliderV(direction) {
  currentIndexV = (currentIndexV + direction + totalSlidesV) % totalSlidesV;
  const offset = -currentIndexV * slidesV[0].offsetWidth;
  document.querySelector('.sliderV').style.transform = `translateX(${offset}px)`;
}

function scrollSliderF(direction) {
  currentIndexF = (currentIndexF + direction + totalSlidesF) % totalSlidesF;
  const offset = -currentIndexF * slidesF[0].offsetWidth;
  document.querySelector('.sliderF').style.transform = `translateX(${offset}px)`;
}

// ==========================

//ДИАГРАММА
var options = {
  series: [22, 78, 67, 83],
  chart: {
    height: 220,
    type: "radialBar",
  },
  series: [67, 84, 97, 61],
  plotOptions: {
    radialBar: {
      track: {
        background: '#1f1f1f', // Укажите желаемый цвет контуров здесь
      },
      dataLabels: {
        total: {
          show: true,
          label: 'Рейтинг',
          color: '#DDDDDD'
        },
        name: {
          fontSize: '12px',
        },
        value: {
          fontSize: '12px',
          color: '#DDDDDD',
        },
      }
    },
    track: {
          background: '#1f1f1f', // Укажите желаемый цвет контуров здесь
    },      
  },
  stroke: {
      lineCap: 'round',
    },  
  labels: ['Скорость', 'Точность', 'Ловкость', 'Сила']
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();