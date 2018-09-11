import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Resource from './../../components/Resource';
import PropTypes from 'prop-types';

const Resources = ({ resources, navigation }) => {
  return (
    <View style={styles.container}>
      {resources.map((resource, index) => (
        <Resource resource={resource} key={index} navigation={navigation} />
      ))}
    </View>
  );
};

Resources.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Resources;
