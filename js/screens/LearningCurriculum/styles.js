import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: colors.white
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center', 
  },
  header: {
    fontFamily: typography.secFont,
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 15,
    textAlign: 'center',
    alignItems: 'center',
    color: colors.grey,
  },
  subject: {
    fontFamily: typography.mainFont,
    fontSize: 20,
    padding: 10,
    color: colors.grey,
  },
  activity: {
    fontFamily: typography.mainFont,
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonWrap: {
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: typography.mainFont,
  },
});

export default styles;
