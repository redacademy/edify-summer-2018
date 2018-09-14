import React, { Fragment } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { getUser } from './../../config/models.js';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._checkLoggedIn();
  }

  _checkLoggedIn = async () => {
    const getUserData = await getUser();
    const user = getUserData.map(user => ({ token: user.token, id: user.id }));

    const { navigation } = this.props;
    if (user[0] && user[0].token) {
      navigation.navigate('Profile', { userId: user[0].id });
    } else {
      navigation.navigate('loginStack');
    }
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
