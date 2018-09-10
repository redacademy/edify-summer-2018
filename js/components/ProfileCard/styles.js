import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  imageContainer: {
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default styles;
