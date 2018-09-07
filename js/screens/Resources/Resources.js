import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Resource from './../../components/Resource';

const Resources = ({ resources, navigation }) => {
  return (
    <View style={styles.container}>
      {resources.map((resource, index) => (
        <Resource resource={resource} key={index} navigation={navigation} />
      ))}
    </View>
  );
};

export default Resources;
