import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default (loadingScreen = () => {
  return (
    <Image
      style={{ height: 100, width: 100 }}
      source={require('../../assets/gif/frogloading.gif')}
      style={styles.loadingScreen}
    />
  );
});
