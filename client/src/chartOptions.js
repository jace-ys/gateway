export const chart = {
  options: {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: '#ffffff',
        fontSize: 14,
        boxWidth: 14
      }
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            drawBorder: true,
            color: '#ffffff',
          },
          scaleLabel: {
            display: true,
            labelString: 'Queue Times',
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
          stacked: true,
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: 'white',
            fontSize: 14,
            fontStyle: 'bold'
          }
        }
      ]
    },
  }
}
