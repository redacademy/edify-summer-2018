import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    fontFamily: typography.secFont,
    fontWeight: '600',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  button: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: typography.secFont,
    color: 'rgba(0, 0, 0, 0.5)',
    width: width / 3,
    textAlign: 'center',
  },
  active: {
    color: colors.black,
    borderBottomColor: colors.teal,
    borderBottomWidth: 3,
  },
  noNotesUpdates: {
    fontFamily: typography.firstFont,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
