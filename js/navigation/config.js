import { colors, typography } from '../config/styles';
import { Image, View } from 'react-native';
import React from 'react';
import BackArrow from '../components/BackArrow';

export const sharedNavigationOptions = () => ({
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: colors.teal,
    height: 65,
  },
  headerBackImage: <BackArrow />,
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontFamily: typography.mainFont,
    fontSize: 40,
  },
});
