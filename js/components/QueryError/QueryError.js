import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default (QueryError = () => {
  return (
    <View style={styles.errorPosition}>
      <Text style={styles.errorStyle}>Oops, Something went wrong!</Text>
    </View>
  );
});
