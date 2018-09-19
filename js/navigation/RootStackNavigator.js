import { createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { loginStack } from './NavigationLayout';
import AuthLoadingScreen from './../screens/AuthLoading';
import { colors } from '../config/styles';
import TagModal from '../components/TagModal/';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    loginStack,
    NavigationLayout,
  },
  {
    initialRouteName: 'AuthLoading',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
        height: 0,
      },
    },
  },
);
