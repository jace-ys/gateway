<<<<<<< HEAD
import React, {
  Component
} from 'react';
import {
  Bar
} from 'react-chartjs-2';
import {
  chart
} from './chartOptions';
=======
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import socketIOClient from 'socket.io-client';
import { chart } from './chartOptions';
>>>>>>> 72f0f77b56de623b31045322d3ffa464473bbab2

export default class QueueChart extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      queue_status : [0,0,0,0]
    };
  }
  componentDidMount() {
    var chatSocket = new WebSocket('ws://localhost:8000/ws/queues/');
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      console.log(data['queue_status']);
      this.setState({ queue_status : data['queue_status']});
    };
    chatSocket.onclose = (e) => {
      console.error('Chat socket closed unexpectedly');
    };

    chatSocket.onerror = (e) => {
      console.log(e);
    };
  }

  render() {

    const { queue_status } = this.state

    const dataset = {
      labels: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4', 'Gate 5', 'Gate 6', 'Gate 7', 'Gate 8'],
      datasets: [{
          label: 'Groups w/ children',
=======
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
>>>>>>> 72f0f77b56de623b31045322d3ffa464473bbab2
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.6)',
          hoverBorderColor: 'rgba(255,99,132,1)',
<<<<<<< HEAD
          data: queue_status
=======
          data: queues
>>>>>>> 72f0f77b56de623b31045322d3ffa464473bbab2
        }
      ],
    };

<<<<<<< HEAD
    return ( <
      div >
      <
      Bar data = {
        dataset
      }
      width = {
        400
      }
      height = {
        450
      }
      options = {
        chart.options
      }
      /> <
      /div>
    );
  }
=======
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
>>>>>>> 72f0f77b56de623b31045322d3ffa464473bbab2
}
