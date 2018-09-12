import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    height: height / 2.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop: 10,
  },
  title: {
    fontFamily: typography.secFont,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
  },
  description: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.white,
  },
  close: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 20,
  },
});

export default styles;
