import { StyleSheet, Dimensions } from 'react-native';
import { typography, colors } from '../../config/styles';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 20,
    minHeight: height,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: typography.secFont,
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 15,
    color: colors.grey,
  },
  introText: {
    fontFamily: typography.secFont,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
    color: colors.grey,
  },
  description: {
    fontFamily: typography.secFont,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D35A4D',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  procedureBlock: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  procedureText: {
    paddingHorizontal: 15,
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.grey,
  },
});

export default styles;
