import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: typography.secFont,
    fontWeight: 'bold',
    paddingLeft: 7,
  },
  close: {
    color: colors.lightPurple,
    bottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: colors.lightPurple,
    borderWidth: 1,
    height: 100,
    borderRadius: 7,
    textAlign: 'left',
    padding: 2,
  },
  button: {
    padding: 10,
    backgroundColor: colors.lightPurple,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  submit: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
