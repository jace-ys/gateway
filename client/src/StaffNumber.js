import React, { Component, Button } from 'react';
import { Bar } from 'react-chartjs-2';
import { chart } from './chartOptions';

export default class StaffNumber extends Component {
  constructor() {
    super();
    this.state = {
      queue_status : [0,0,0,0],
      staff_number: 0
    };
  }
  componentDidMount() {
    var chatSocket = new WebSocket('ws://172.20.10.6:8000/ws/queues/');
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      console.log(data['staff_number']);
      this.setState({ staff_number: data['staff_number']})

    };
    chatSocket.onclose = (e) => {
      console.error('Chat socket closed unexpectedly');
    };

    chatSocket.onerror = (e) => {
      console.log(e);
    };
  }

  render() {

    const { staff_number } = this.state

    return (
      <h2>Number of staff needed in an hour: { this.state.staff_number }</h2>


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
