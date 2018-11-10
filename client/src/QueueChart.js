import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import socketIOClient from 'socket.io-client';
import { chart } from './chartOptions';

export default class QueueChart extends Component {
  constructor() {
    super();
    this.state = {
      queues: [30, 48, 20, 38, 42, 25, 34, 24]
    };
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:3000');
    socket.on('newCheckIn', (queueData) => {
      this.setState({ queues: queueData });
    });
  }

  render() {
    const { queues } =  this.state;

    const plotData = {
      labels: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4', 'Gate 5', 'Gate 6', 'Gate 7', 'Gate 8'],
      datasets: [
        {
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.6)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: queues
        }
      ],
    };

    return (
  		<div>
        <Bar
        	data={plotData}
        	width={400}
        	height={450}
        	options={chart.options}
        />
  		</div>
		);
	}
}
