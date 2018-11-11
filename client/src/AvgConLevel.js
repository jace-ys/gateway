import React, { Component, Button } from 'react';
import { Bar } from 'react-chartjs-2';
import { chart } from './chartOptions';

export default class AvgConLevel extends Component {
  constructor() {
    super();
    this.state = {
      queue_status : [0,0,0,0],
      level: ""
    };
  }
  componentDidMount() {
    var chatSocket = new WebSocket('ws://172.20.10.6:8000/ws/queues/');
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      console.log(data['level']);
      this.setState({ level: data['level']})

    };
    chatSocket.onclose = (e) => {
      console.error('Chat socket closed unexpectedly');
    };

    chatSocket.onerror = (e) => {
      console.log(e);
    };
  }

  render() {

    const { level } = this.state

    return (
      <h2>Average Congestion level: { this.state.level }</h2>


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
