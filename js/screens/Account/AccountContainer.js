import React, { Component } from 'react';
import Account from './Account';

export default class AccountContainer extends Component {
  static navigationOptions = {
    title: 'Account',
  };
  render() {
    return <Account />;
  }
}
