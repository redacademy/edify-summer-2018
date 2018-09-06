import { StyleSheet, Dimensions } from 'react-native';

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
    backgroundColor: '#5E5AA0',
  },
  cardTwo: {
    backgroundColor: '#5DAFE0',
  },
  avatarContainer: {
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: width,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  AvatarOne: {
    backgroundColor: '#75D2D1',
  },
  AvatarTwo: {
    backgroundColor: '#5E5AA0',
  },
  text: {
    fontSize: 20,
    fontFamily: 'BalooBhai-Regular',
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
    borderColor: '#75D2D1',
    color: '#75D2D1',
  },
  buttonTwo: {
    borderColor: '#5E5AA0',
    color: '#5E5AA0',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'BalooBhai-Regular',
  },
});

export default styles;
