import { StyleSheet, Dimensions } from 'react-native';
import { typography } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    paddingBottom: 15,
    paddingHorizontal: 15,
    height: height / 2,
  },
  title: {
    paddingVertical: 15,
    fontFamily: typography.secFont,
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    width: 5,
  },
  image: {
    height: width * 0.4,
    width: width * 0.4,
  },
});

export default styles;
