import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import RootStack from './navigation/RootStackNavigator';
import { ApolloProvider } from 'react-apollo';
import client from './config/api.js';
import { UserProvider } from './context/UserContext';
import SplashScreen from 'react-native-splash-screen';
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Fragment>
          <UserProvider>
            <StatusBar barStyle="light-content" />
            <RootStack />
          </UserProvider>
        </Fragment>
      </ApolloProvider>
    );
  }
}
