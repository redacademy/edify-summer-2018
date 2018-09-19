import { StyleSheet } from 'react-native';
import { colors, typography } from '../../../config/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  note: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  text: {
    fontFamily: typography.secFont,
  },
  noteTitle: {
    fontWeight: '600',
  },
});

export default styles;
