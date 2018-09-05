import { createStackNavigator } from 'react-navigation';
import NavigationLayout from './NavigationLayout';

export default createStackNavigator(
  {
    NavigationLayout,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        height: 0,
      },
    },
  },
);
