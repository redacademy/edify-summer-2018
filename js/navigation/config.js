import { colors, typography } from '../config/styles';

export const sharedNavigationOptions = () => ({
  headerBackTile: null,
  headerStyle: {
    backgroundColor: colors.teal,
    height: 65,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontFamily: typography.mainFont,
    fontSize: 40,
  },
});
