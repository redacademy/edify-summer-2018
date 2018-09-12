import React, { Component } from 'react';
import OnboardingPage from './Onboarding';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const TOGGLE_ONBOARDING = gql`
  mutation($id: ID!, $showOnboarding: Boolean!) {
    updateUser(id: $id, showOnboarding: $showOnboarding) {
      id
    }
  }
`;
class OnboardingContainer extends Component {
  render() {
    userId = this.props.navigation.getParam('userId');

    return (
      <Mutation
        mutation={TOGGLE_ONBOARDING}
        variables={{ id: userId, showOnboarding: false }}
      >
        {toggleOnboard => {
          return (
            <OnboardingPage
              navigation={this.props.navigation}
              toggleOnboarding={toggleOnboard}
            />
          );
        }}
      </Mutation>
    );
  }
}

export default OnboardingContainer;
