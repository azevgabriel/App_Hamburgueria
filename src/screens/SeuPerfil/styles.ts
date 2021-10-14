import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  userContainer: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  iconPlus: {
      fontSize: 30,
      color: colors.green
  },
  box: {
    margin: 15,
    flex:9
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.Jost_600SemiBold,
    color: colors.darkGray,
    marginTop: 40,
    marginBottom: 40
  },
  viewInput: {
    marginBottom: 60,
    marginTop: 20
  },
  textInput: {
    color: colors.darkGray,
    fontFamily: fonts.Jost_600SemiBold,
    marginTop: 5
  },
  input: {
    height: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: colors.shapeGray,
    marginBottom: 20,
    borderRadius: 4
  },
  tab: {
    flex: 1.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderTopWidth: 2,
    marginTop:-50,
    height: 70
  },
  spaceTab: {
    flex: 1,
    alignItems: 'center'
  },
  divisor: {
    width: 2,
    height: '60%',
    backgroundColor: colors.shapeGray
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