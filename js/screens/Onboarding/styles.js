import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 24,
    paddingBottom: 25,
    flex: 0.3,
    fontFamily: 'Proxima Nova Alt',
    paddingHorizontal: 80,
    textAlign: 'center',
    fontWeight: '400',
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
    flex: 1.3,
    fontFamily: 'Proxima Nova Alt',
  },
  skipButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 30,
  },
  skip: {
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  image: {
    height: 219,
    width: 219,
  },
  // circle:{
  //   width: 18,
  //   height: 18,
  //   marginHorizontal: 3,
  //   backgroundColor,
  //   borderRadius: 9,
  // }
});

export default styles;
