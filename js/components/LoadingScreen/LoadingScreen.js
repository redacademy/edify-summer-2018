import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default (loadingScreen = () => {
  return (
    <Image
      source={require('../../assets/gif/frogloading.gif')}
      style={styles.loadingScreen}
    />
  );
});
