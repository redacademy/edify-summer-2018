import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';
import { colors } from '../../config/styles';

export default (loadingScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size="large" color={colors.purple} />
    </View>
  );
});
