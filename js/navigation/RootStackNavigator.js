import { createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { loginStack } from './NavigationLayout';
import { colors } from '../config/styles';

export default createSwitchNavigator(
  {
    loginStack,
    NavigationLayout,
  },
  {
    initialRouteName: 'loginStack',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
        height: 0,
      },
    },
  },
);
