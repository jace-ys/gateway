import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { chart } from './chartOptions';

const dataset = {
  labels: ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4', 'Gate 5', 'Gate 6', 'Gate 7', 'Gate 8'],
  datasets: [
    {
      label: 'Groups w/ children',
      backgroundColor: 'rgba(255,99,132,0.4)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.6)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [30, 49, 20, 38, 42, 25, 34, 24]
    },
    {
      label: 'Groups w/o children',
      backgroundColor: 'rgba(99,255,132,0.4)',
      borderColor: 'rgba(99,255,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(99,255,132,0.6)',
      hoverBorderColor: 'rgba(99,255,132,1)',
      data: [30, 48, 20, 38, 42, 25, 34, 24]
    }
  ],
};

export default class QueueChart extends Component {
  componentWillMount() {

  }

  render() {
    return (
  		<div>
        <Bar
        	data={dataset}
        	width={400}
        	height={450}
        	options={chart.options}
        />
  		</div>
		);
	}
}
