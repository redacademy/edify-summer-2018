import React, { Component } from 'react';
import Edify from './Edify';

export default class EdifyContainer extends Component {
  static navigationOptions = {
    title: 'Information',
  };
  render() {
    return <Edify navigation={this.props.navigation} />;
  }
}
