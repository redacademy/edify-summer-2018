import React, { Component } from 'react';
import Account from './Account';
import UserContext from './../../context/UserContext';

export default class AccountContainer extends Component {
  static navigationOptions = {
    title: 'Account',
  };
  render() {
    return (
      <UserContext.Consumer>
        {({ user, removeUser }) => {
          id = user.map(userData => userData.id)[0];
          return (
            <Account
              logout={removeUser}
              id={id}
              navigation={this.props.navigation}
            />
          );
        }}
      </UserContext.Consumer>
    );
  }
}
