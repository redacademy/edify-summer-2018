import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingContainer from './screens/Onboarding/index'
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <OnboardingContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
