import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import RootStack from './navigation/RootStackNavigator';

import { ApolloProvider } from 'react-apollo';
import client from './../api/api';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <StatusBar barStyle="light-content" />
          <RootStack />
        </Fragment>
      </ApolloProvider>
    );
  }
}
