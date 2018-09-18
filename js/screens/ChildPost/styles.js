import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  textContainer: {
    padding: 15,
  },
  mainImage: {
    width: width * 1,
    height: height * 0.5,
  },
  postMeta: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  sideText: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.grey,
    fontWeight: '500',
  },
  creator: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.darkPurple,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  description: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.grey,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
  },
  moodStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodDescription: {
    fontFamily: typography.mainFont,
    fontSize: 16,
    color: colors.darkPurple,
    fontWeight: '500',
    alignItems: 'center',
  },

  container: {
    marginHorizontal: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 100,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    borderRadius: 7,
  },

  title: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: typography.secFont,
    fontWeight: 'bold',
    color: colors.grey,
  },

  divider: {
    borderWidth: 0.2,
    backgroundColor: colors.grey,
  },
  textInput: {
    borderColor: colors.lightPurple,
    borderWidth: 1,
    height: 100,
    borderRadius: 7,
    textAlign: 'left',
    padding: 5,
    fontFamily: typography.secFont,
    color: colors.grey,
  },

  button: {
    padding: 10,
    backgroundColor: colors.lightPurple,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },

  submit: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  header: {
    justifyContent: 'space-between',
  },
  comment:{
    paddingVertical: 10,
  },
  commenter: {
    fontFamily: typography.mainFont,
    fontSize: 16,
    color: colors.grey,
    fontWeight: '400',
  },
  commentText:{
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.grey,
  
  },
  commentTime:{
    paddingTop:10,
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.grey,
  }
});
export default styles;
