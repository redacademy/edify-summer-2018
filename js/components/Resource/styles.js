import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resourceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  resourceText: {
    color: '#3b2984',
    fontSize: 20,
    maxWidth: '80%',
    fontFamily: 'Proxima Nova Alt',
  },
  externalIcon: {
    height: 30,
    width: 30,
  },
});

export default styles;
