import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 15,
    marginTop: 30,
    paddingBottom: 40
  },
  viewTitle: {
    flex: 1,
  },
  viewPhoto: {
    flex: 3
  },
  viewButton: {
    flex: 2
  },
  text: {
    fontSize: 25,
    fontFamily: fonts.Jost_600SemiBold,
    color: colors.darkGray,
    marginTop: 10,
    marginBottom: 20,
  },
  viewInput: {
    marginBottom: 20,
    marginTop: 20,
    flex: 12
  },
  titleInput: {
    color: colors.darkGray,
    fontFamily: fonts.Jost_600SemiBold,
    marginTop: 10,
    marginBottom: 2
  },
  input: {
    height: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: colors.shapeGray,
    borderRadius: 4
  }
})