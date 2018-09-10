import { StyleSheet } from 'react-native';
import { typography } from '../../config/styles';

const styles = StyleSheet.create({
  button: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 3,
    padding: 3,
    marginVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: typography.mainFont,
  },
});

export default styles;
