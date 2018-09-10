import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

const styles = StyleSheet.create({
  resourceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  resourceText: {
    color: colors.purple,
    fontSize: 20,
    maxWidth: '80%',
    fontFamily: typography.secFont,
  },
  externalIcon: {
    height: 30,
    width: 30,
  },
});

export default styles;
