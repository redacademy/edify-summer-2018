import { StyleSheet, Dimensions } from 'react-native';
import { typography, colors } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    alignSelf: 'center',
    textAlign: 'center',
    width: width / 2,
    fontFamily: typography.secFont,
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  title: {
    fontFamily: typography.secFont,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  description: {
    fontFamily: typography.secFont,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D35A4D',
    textAlign: 'center',
    alignSelf: 'center',
    width: width / 1.5,
    padding: 5,
  },
  procedure: {
    fontFamily: typography.secFont,
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default styles;
