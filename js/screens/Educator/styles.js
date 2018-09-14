import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  educatorInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  educatorWorkInfo: {
    marginTop: 15,
  },
  infoText: {
    fontSize: 17,
    fontFamily: typography.secFont,
    fontWeight: '600',
  },
  infoTitle: {
    paddingVertical: 8,
    fontSize: 17,
    fontFamily: typography.secFont,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    shadowColor: colors.black,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    margin: 10,
    borderRadius: 100,
    backgroundColor: colors.teal,
  },
  contactButton: {
    padding: 10,
  },
});

export default styles;
