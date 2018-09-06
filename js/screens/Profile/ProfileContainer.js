import React, { Component } from 'react';
import Profile from './Profile';

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          grade: 'Grade Four',
          avatar: 'fox',
        },
        {
          id: 2,
          grade: 'Grade Four',
          avatar: 'cat',
        },
        {
          id: 3,
          grade: 'Grade Four',
          avatar: 'monkey',
        },
      ],
    };
  }
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <Profile data={this.state.data} />;
  }
}
