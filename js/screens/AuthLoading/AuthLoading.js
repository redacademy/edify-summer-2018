import React, { Fragment } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { getUser } from './../../config/models.js';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._checkLoggedIn();
  }

  _checkLoggedIn = async () => {
    const getUserToken = await getUser();
    const userToken = getUserToken.map(user => user.token);

    this.props.navigation.navigate(
      !userToken[0] ? 'loginStack' : 'NavigationLayout',
    );
  };

  //TODO: Splash screen will be inserted when designers get back to us.
  render() {
    return (
      <Fragment>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </Fragment>
    );
  }
}

export default AuthLoading;
