import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  formTitle: {
    paddingVertical: 7,
    fontFamily: typography.secFont,
    fontSize: 16,
    fontWeight: '600',
  },
  textField: {
    borderColor: colors.purple,
    borderWidth: 1,
    width: width / 1.5,
    fontSize: 17,
    padding: 3,
    borderRadius: 5,
  },
});

export default styles;
