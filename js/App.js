import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import RootStack from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <RootStack />
      </Fragment>
    );
  }
}
