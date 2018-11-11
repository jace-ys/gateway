import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import QueueChart from './QueueChart';
import StaffNumber from './StaffNumber';
import AvgConLevel from './AvgConLevel';

export default class App extends Component {
  render() {
    return (
      <div text align="center" style={{ padding: '10px' }}>
        <div style={{float: 'left', width:'50%'}}>
          <h1>Security Checkpoints Congestion</h1>
          <QueueChart />
          </div>
          <div text align="center" style={{width:'50%', 'padding-top': '200px'}}>
            <StaffNumber />
            <AvgConLevel />
          </div>
      </div>
    );
  }
}
