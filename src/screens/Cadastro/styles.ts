import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  text: {
    fontSize: 25,
    fontFamily: fonts.Jost_600SemiBold,
    color: colors.darkGray,
    marginTop: 40,
    marginBottom: 50
  },
  viewInput: {
    marginBottom: 60,
    backgroundColor: colors.white
  },
  titleInput: {
    color: colors.darkGray,
    fontFamily: fonts.Jost_600SemiBold,
    marginTop: 10
  },
  input: {
    height: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: colors.shapeGray,
    borderRadius: 4
  }
})