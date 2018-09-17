import React, { Component } from 'react';
import Login from './Login';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import UserContext from './../../context/UserContext';
import PropTypes from 'prop-types';

const SIGNIN_USER = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
      showOnboarding
    }
  }
`;

export default class LoginContainer extends Component {
  render() {
    return (
      <Mutation mutation={SIGNIN_USER}>
        {(authenticateUser, { data, loading, error }) => (
          <UserContext.Consumer>
            {values => {
              return (
                <Login
                  navigation={this.props.navigation}
                  signIn={authenticateUser}
                  loginLoading={loading}
                  loginError={error}
                  user={values}
                />
              );
            }}
          </UserContext.Consumer>
        )}
      </Mutation>
    );
  }
}

LoginContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
