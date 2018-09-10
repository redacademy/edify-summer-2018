import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    height: height / 2,
    position: 'relative',
    marginTop: 20,
    marginHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  authorContainer: {
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
  button: {
    backgroundColor: colors.purple,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    top: -21, // the extra pixel makes up the for plus symbol width.
  },
  buttonText: {
    paddingHorizontal: 10,
    fontSize: 50,
    color: colors.white,
    fontFamily: typography.secFont,
  },
});

export default styles;
