import React, { Component } from 'react';
import Login from './Login';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import UserContext from './../../context/UserContext';

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
        {(authenticateUser, { data }) => (
          <UserContext.Consumer>
            {values => {
              return (
                <Login
                  navigation={this.props.navigation}
                  signIn={authenticateUser}
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
