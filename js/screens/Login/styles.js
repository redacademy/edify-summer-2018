//STYLES FOR LOGIN
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#75D2D1',
    minHeight: '100%',
    padding: 40,
    justifyContent: 'center',
  },
  edifyLogo: {
    height: 91,
    width: 101,
    marginRight: 10,
    marginBottom: 30,
  },
  loginLogo: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
  logoHeader: {
    // marginTop: 20,
    transform: [{ translateY: -10 }],
    padding: 0,
    margin: 0,
    fontSize: 70,
    fontWeight: '600',
    fontFamily: 'BalooBhai-Regular',
  },
  subHeader: {
    transform: [{ translateY: -45 }],
    fontFamily: 'Proxima Nova Alt',
  },
  logoText: {
    color: 'white',
    fontSize: 18,
  },
  loginHelpText: {
    flexDirection: 'row',
    color: 'white',

    // marginTop: 50,
  },
  helpText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Proxima Nova Alt',
    textDecorationLine: 'underline',
  },
  forgetText: {
    color: 'white',
    fontSize: 20,
  },
  loginButton: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: '600',
    fontSize: 20,
  },
  loginButtonContainer: {
    borderRadius: 10,
    backgroundColor: '#3B2984',
    marginTop: 50,
    marginBottom: 50,
  },
  loginField: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 10,
    fontFamily: 'Proxima Nova Alt',
  },
});

export default styles;
