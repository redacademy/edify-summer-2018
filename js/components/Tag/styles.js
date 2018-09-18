import { StyleSheet } from 'react-native';
import { typography, colors } from '../../config/styles';

const styles = StyleSheet.create({
  tag: {
    fontFamily: typography.secFont,
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    color: "white"
  },
  tagWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default styles;
