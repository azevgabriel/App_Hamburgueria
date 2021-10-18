import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: '5%'
  },
  text: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 24,
    color: colors.white
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    width: 250,
    height: 250,
    borderColor: colors.white,
    borderWidth: 4,
    borderStyle: 'dashed',
    borderRadius: 10
  }
});