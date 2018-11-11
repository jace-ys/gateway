import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  onclick() {
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      }),
    });
  }

  render() {
    return (
      <View style={styles.colContainer}>
        <Image source={require('./res/frame.png')} />
        <View style={styles.rowContainer}>
          <Button
            title="A"
            color="#F4D35E"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonContainer}
            onclick
          />
          <Button
            title="B"
            color="#F4D35E"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonContainer}
          />
          <Button
            title="C"
            color="#F4D35E"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttonContainer}
          />
        </View>
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
});
