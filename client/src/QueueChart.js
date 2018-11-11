import React, { Component, Button } from 'react';
import { Bar } from 'react-chartjs-2';
import { chart } from './chartOptions';

export default class QueueChart extends Component {
  constructor() {
    super();
    this.state = {
      queue_status : [0,0,0,0],
      gates_shd_open: 0
    };
  }
  componentDidMount() {
    var chatSocket = new WebSocket('ws://172.20.10.6:8000/ws/queues/');
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      console.log(data['queue_status']);
      let i = data['queue_status'].length - this.state.queue_status.lenghth;
      if(i > 0) {
        this.setState({ gates_shd_open: i})
      } else{
        this.setState({ queue_status : data['queue_status']});
      }
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
      labels: ['Lane 1', 'Lane 2', 'Lane 3', 'Lane 4', 'Lane 5', 'Lane 6', 'Lane 7', 'Lane 8'],
      datasets: [{
          label: 'Groups w/ children',
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.6)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: queue_status
        }
      ],
    };

    return (
      <div>
        <button type="button" class="bo">BC1</button>
        <button type="button" class="bo">BC2</button>
        <button type="button" class="bo">BC3</button>
        <button type="button" class="bo">BC4</button>
        <button type="button" class="bo">BC5</button>
        <button type="button" class="bo">BC6</button>
        <button type="button" class="bo">BC7</button>
        <button type="button" class="bo">BC8</button>
        <button type="button" class="bo">BC9</button>
        <Bar data = {dataset} width = {400} height = {350} options = {chart.options}/>
        <button type="button" class={this.state.queue_status[0]> 40 ? "yoBusy":"yo"}>Gate1</button>
        <button type="button" class={this.state.queue_status[0] > 40||this.state.queue_status[1] > 40 ? "yoBusy":"yo"}>Gate2</button>
        <button type="button" class={this.state.queue_status[1] > 40||this.state.queue_status[2] > 40 ? "yoBusy":"yo"}>Gate3</button>
        <button type="button" class={this.state.queue_status[2] > 40||this.state.queue_status[3] > 40 ? "yoBusy":"yo"}>Gate4</button>
        <button type="button" class={this.state.queue_status[3] > 40 ? "yoBusy":"yo"}>Gate5</button>
        <button type="button" class={((this.state.queue_status.reduce((a, b) => a + b, 0)) > 60 * 4) ? "new" : "yo"}>Gate6</button>
        <button type="button" class={((this.state.queue_status.reduce((a, b) => a + b, 0)) > 60 * 5) ? "new" : "yo"}>Gate7</button>
        <button type="button" class={((this.state.queue_status.reduce((a, b) => a + b, 0)) > 60 * 6) ? "new" : "yo"}>Gate8</button>
        <button type="button" class={((this.state.queue_status.reduce((a, b) => a + b, 0)) > 60 * 7) ? "new" : "yo"}>Gate9</button>
      </div>


    );
  }
}

// const styles = StyleSheet.create({
//   buttonContainer: {
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   }
// })
