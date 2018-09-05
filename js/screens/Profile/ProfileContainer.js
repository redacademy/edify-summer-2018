import React, { Component } from 'react';
import Profile from './Profile';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <Profile />;
  }
}
