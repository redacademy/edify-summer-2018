import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const OutlinedButton = ({ pressed, title, color, titleStyle }) => {
  const colors = {
    borderColor: color,
    color: color,
  };
  return (
    <TouchableOpacity
      onPress={pressed}
      activeOpacity={0.7}
      style={[styles.button, colors]}
    >
      <Text style={[styles.buttonText, colors, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

OutlinedButton.defaultProps = {
  titleStyle: {},
};

OutlinedButton.propTypes = {
  pressed: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  titleStyle: PropTypes.object.isRequired,
};
export default OutlinedButton;
