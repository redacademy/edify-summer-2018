import { StyleSheet, Dimensions } from 'react-native';
import { typography, colors } from '../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: colors.white,
    height: height,
  },
  mainText: {
    alignSelf: 'center',
    marginBottom: 15,
    color: '#35377B',
    fontSize: 20,
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width / 1.5,
    marginTop: 15,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
    color: '#35377B',
    fontSize: 20,
    fontFamily: typography.secFont,
  },
});

export default styles;
