import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontFamily: typography.secFont,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  subject: {
    fontFamily: typography.secFont,
    fontSize: 18,
    padding: 10,
  },
  activity: {
    fontFamily: typography.mainFont,
    // color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
});

export default styles;
