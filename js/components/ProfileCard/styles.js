import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: colors.purple,
  },
  cardTwo: {
    backgroundColor: colors.skyblue,
  },
  avatarContainer: {
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: width,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  AvatarOne: {
    backgroundColor: colors.teal,
  },
  AvatarTwo: {
    backgroundColor: colors.purple,
  },
  text: {
    fontSize: 20,
    fontFamily: typography.mainFont,
    color: '#fff',
  },
  button: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 3,
    padding: 3,
    marginVertical: 15,
  },
  buttonOne: {
    borderColor: colors.teal,
    color: colors.teal,
  },
  buttonTwo: {
    borderColor: colors.purple,
    color: colors.purple,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: typography.mainFont,
  },
});

export default styles;
