import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: typography.mainFont,
    color: '#fff',
  },
});

export default styles;
