import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = {
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 15,
  },
  view: {
    flexGrow: 1,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'BalooBhai-Regular',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 20,
    width: width / 2,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Proxima Nova Alt',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
};

export default styles;
