import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import QueueChart from './QueueChart';

export default class App extends Component {
  render() {
    return (
      <Container text align="center" style={{ padding: '30px' }}>
        <h1>Gate Queue Profiles</h1>
        <QueueChart />
      </Container>
    );
  }
}
