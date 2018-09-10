import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexGrow: 1,
    padding: 15,
  },
  divider: {
    backgroundColor: colors.purple,
    height: 2,
  },
  edifyText: {
    color: colors.purple,
    fontSize: 24,
    marginVertical: 30,
    fontFamily: typography.secFont,
  },
});

export default styles;
