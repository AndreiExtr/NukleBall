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
            background: '#141414', // Укажите желаемый цвет контуров здесь
          },
      },
    },
    labels: ['Speed', 'Accuracy', 'Endurance', 'Power'],
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();