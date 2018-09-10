import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: typography.secFont,
    textAlign: 'center',
    fontWeight: '400',
  },
  subTitle: {
    color: colors.white,
    fontSize: 16,
    paddingVertical: 20,
    fontFamily: typography.secFont,
  },
  skipButton: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  skip: {
    color: colors.white,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  image: {
    height: width / 1.5,
    width: width / 1.5,
  },
  circle: {
    width: 18,
    height: 18,
    marginHorizontal: 3,
    borderRadius: 9,
  },
});

export default styles;
