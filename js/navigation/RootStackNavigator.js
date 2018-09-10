import { createSwitchNavigator } from 'react-navigation';
import NavigationLayout, { loginStack } from './NavigationLayout';

export default createSwitchNavigator(
  {
    loginStack,
    NavigationLayout,
  },
  {
    initialRouteName: 'loginStack',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        height: 0,
      },
    },
  },
);
