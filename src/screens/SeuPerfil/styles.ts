import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 20,
    paddingBottom: 20
  },
  userContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      marginBottom: 10
  },
  titleContainer: {
    flex: 0.5
  },
  iconPlus: {
      fontSize: 30,
      color: colors.green
  },
  box: {
    margin: 15,
    flex: 1
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.Jost_600SemiBold,
    color: colors.darkGray,
    marginTop: 20,
    marginBottom: 10
  },
  viewInput: {
    marginTop: 20,
    flex: 5
  },
  textInput: {
    color: colors.darkGray,
    fontFamily: fonts.Jost_600SemiBold,
  },
  input: {
    height: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: colors.shapeGray,
    marginBottom: 20,
    borderRadius: 4
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  plus: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      marginTop: -45,
      marginLeft: 130,
      shadowColor: colors.black,
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 7
  },
})