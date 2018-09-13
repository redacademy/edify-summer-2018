import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
const Backarrow = () => {
  return (
    <Image
      style={styles.backarrow}
      source={require('../../assets/images/icons/arrow.png')}
    />
  );
};

export default Backarrow;
