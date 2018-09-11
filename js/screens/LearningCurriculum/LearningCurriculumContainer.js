import React, { Component } from 'react';
import LearningCurriculum from './LearningCurriculum';

export default class LearningCurriculumContainer extends Component {
  static navigationOptions = {
    title: 'Curriculum',
  };
  render() {
    return <LearningCurriculum navigation={this.props.navigation} />;
  }
}
