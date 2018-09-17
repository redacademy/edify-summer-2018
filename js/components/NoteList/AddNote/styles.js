import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../../config/styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 22,
  },
  container: {
    top: 180,
    marginHorizontal: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 100,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    borderRadius: 7,
  },
});

export default styles;
