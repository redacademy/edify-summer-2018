import React, { Component } from 'react';
import { View, Text } from 'react-native';
import OnboardingPage from './Onboarding';
class OnboardingContainer extends Component {
  render() {
    return <OnboardingPage navigation={this.props.navigation} />;
  }
}

export default OnboardingContainer;
