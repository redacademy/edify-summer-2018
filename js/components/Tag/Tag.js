import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { colors } from './../../config/styles';

const subjectColor = colorFlag => {
  switch (colorFlag) {
    case 'algebra':
      return {
        backgroundColor: colors.red,
        borderColor: colors.red,
      };
    case 'painting':
      return {
        backgroundColor: colors.yellow,
        borderColor: colors.yellow,
      };
    case 'reading':
      return {
        backgroundColor: colors.skyblue,
        borderColor: colors.skyblue,
      };
    case 'singing':
      return {
        backgroundColor: colors.darkPurple,
        borderColor: colors.darkPurple,
      };
    default:
      return {
        backgroundColor: colors.lightPurple,
        borderColor: colors.lightBlue,
      };
  }
};

const Tag = ({ tag }) => {
  const colorFlag = tag.title;
  return (
    <TouchableOpacity style={[styles.tagWrapper, subjectColor(colorFlag)]}>
      <Text style={styles.tag}>#{tag.title}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
