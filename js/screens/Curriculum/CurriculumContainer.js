import React, { Component } from 'react';
import Curriculum from './Curriculum';

export default class CurriculumContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum'
  }
  render() {
    return <Curriculum />;
  }
}
