import React from 'react';
import { Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const NoItems = ({ message }) => {
  return <Text style={styles.noItems}>{message}</Text>;
};

NoItems.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoItems;
