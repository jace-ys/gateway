export const chart = {
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        fontColor: '#ffffff',
        fontSize: 14,
        boxWidth: 14
      }
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: true,
            color: '#ffffff'
          },
          scaleLabel: {
            display: true,
            labelString: 'Congestion Rating',
            fontColor: 'white',
            fontSize: 18,
            fontStyle: 'bold'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 14,
            fontStyle: 'bold',
            beginAtZero: true,
            min: 0,
            max: 100
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: '#ffffff'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 14,
            fontStyle: 'bold'
          }
        }
      ]
    }
  }
}
