import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import AccountScreen from '../screens/Account';
import ProfileScreen from '../screens/Profile';
import EdifyScreen from '../screens/Edify';
import ResourcesScreen from '../screens/Resources';
import { HumanIcon } from '../components/Icons/HumanIcon';
import { AccountIcon } from '../components/Icons/AccountIcon';
import { EdifyIcon } from '../components/Icons/EdifyIcon';
import { sharedNavigationOptions } from './config';

const EdifyStack = createStackNavigator(
  {
    Edify: EdifyScreen,
    Resources: ResourcesScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Account: AccountStack,
    Edify: EdifyStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        switch (routeName) {
          case 'Account':
            icon = <AccountIcon color={tintColor} />;
            break;
          case 'Profile':
            icon = <HumanIcon color={tintColor} />;
            break;
          case 'Edify':
            icon = <EdifyIcon color={tintColor} />;
            break;
          default:
            icon = <EdifyIcon color={tintColor} />;
            break;
        }
        return icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#35377B',
      inactiveTintColor: '#FFFFFF',
      showLabel: false,
      style: {
        backgroundColor: '#75D2D1',
        borderTopColor: '#75D2D1',
        height: 80,
      },
    },
  },
);
