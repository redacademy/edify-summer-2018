import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { getUser } from './../../config/models.js';

class AuthLoadingScreen extends React.Component {
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
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
