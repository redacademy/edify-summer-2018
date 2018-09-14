import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    top: 8,
    right: 20,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: typography.secFont,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    paddingVertical: 7,
    fontFamily: typography.secFont,
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    width: width / 1.5,
    fontSize: 17,
    padding: 3,
  },
});

export default styles;
