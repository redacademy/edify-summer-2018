import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';
const styles = StyleSheet.create({
  errorPosition: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  errorStyle: {
    color: colors.purple,
    fontFamily: typography.secFont,
    fontSize: 24,
  },
});

export default styles;
