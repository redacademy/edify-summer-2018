import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.teal,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 0.8,
    justifyContent: 'center',
    width,
    padding: 40,
  },
  edifyLogo: {
    height: undefined,
    width: undefined,
    flex: 0.9,
  },
  formContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoTextContainer: {
    position: 'relative',
  },
  logoHeader: {
    fontSize: 70,
    fontWeight: '600',
    fontFamily: typography.mainFont,
  },
  logoSubHeader: {
    fontFamily: typography.secFont,
    position: 'absolute',
    bottom: 16,
    left: 2,
  },
  logoText: {
    color: colors.white,
    fontSize: 18,
  },
  loginHelpText: {
    flexDirection: 'row',
    color: colors.white,
    width,
  },
  helpText: {
    fontWeight: '600',
    color: colors.white,
    fontSize: 20,
    fontFamily: typography.secFont,
    textDecorationLine: 'underline',
  },
  forgetText: {
    color: colors.white,
    fontSize: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  loginButton: {
    color: colors.white,
    textAlign: 'center',
    padding: 10,
    fontWeight: '600',
    fontSize: 20,
  },
  loginButtonContainer: {
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginField: {
    backgroundColor: colors.white,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 10,
    fontFamily: typography.secFont,
  },
  loginIndicator: {
    padding: 12,
  },
  fieldError: {
    position: 'absolute',
    bottom: 8,
    right: 5,
    color: colors.darkPurple,
  },
  fieldContainer: {
    position: 'relative',
  },
  inactiveLogin: {
    backgroundColor: colors.red,
  },
  errorText: {
    color: colors.white,
    fontSize: 20,
    position: 'absolute',
    top: -10,
  },
});

export default styles;
