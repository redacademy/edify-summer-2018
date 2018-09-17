import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    fontFamily: typography.mainFont,
    color: '#fff',
  },
});

export default styles;
