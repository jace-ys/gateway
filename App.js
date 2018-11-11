import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  // ip = '192.168.43.231';

  constructor() {
    super();
      this.state = {
        gate: "gate"
      };
  }

  onclickA() {
    // Getting chase by the goverment
    // No Tier 2 visa, no money TAT
    fetch('http://172.20.10.6:8000/queues/allocate/?large_luggages=2&small_luggages=1&no_of_ppl=1&no_of_kids=0')
    .then((response) => {
      console.log(response._bodyText);
      this.setState({ gate: response._bodyText });
    })
    .catch(function(error) {
      console.log(error);
      // ADD THIS THROW error
      throw error;
    });
  }

  onclickB() {
    fetch('http://172.20.10.6:8000/queues/allocate/?large_luggages=4&small_luggages=2&no_of_ppl=2&no_of_kids=2')
    .then((response) => {
      console.log(response._bodyText);
      this.setState({ gate: response._bodyText });
    })
    .catch(function(error) {
      console.log(error);
      // ADD THIS THROW error
      throw error;
    });
  }

  onclickC() {
    fetch('http://172.20.10.6:8000/queues/allocate/?large_luggages=4&small_luggages=3&no_of_ppl=4&no_of_kids=0')
    .then((response) => {
      console.log(response._bodyText);
      this.setState({ gate: response._bodyText });
    })
    .catch(function(error) {
      console.log(error);
      // ADD THIS THROW error
      throw error;
    })
  }

  render() {
    return (
      <View style={styles.colContainer}>
        <Image source={require('./res/frame.png')} />
        <View style={styles.rowContainer}>
          <Button
            title="Single"
            color="#F4D35E"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonContainer}
            onPress={ () => this.onclickA() }
          />
          <Button
            title="Family"
            color="#F4D35E"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonContainer}
            onPress={ () => this.onclickB() }
          />
          <Button
            title="Group"
            color="#F4D35E"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonContainer}
            onPress={ () => this.onclickC() }
          />
        </View>
        <Text style={styles.titleText}>
          Please go to lane {this.state.gate} through gate {this.state.gate}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  colContainer: {
    flex: 1,
    backgroundColor: '#28AFB0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  rowContainer: {
    width: '100%',
    height: 50,
    padding: 20,
    margin: 40,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
