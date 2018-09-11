import React, { Component } from 'react';
import Activity from './Activity';

export default class ActivityContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum',
  };
  render() {
    return <Activity />;
  }
}
