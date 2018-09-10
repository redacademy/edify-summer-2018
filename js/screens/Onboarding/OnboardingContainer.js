import React, { Component } from 'react';
import OnboardingPage from './Onboarding';
class OnboardingContainer extends Component {
  render() {
    return <OnboardingPage navigation={this.props.navigation} />;
  }
}

export default OnboardingContainer;
