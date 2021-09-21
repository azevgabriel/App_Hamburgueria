import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.Jost_600SemiBold,
    color: colors.darkGray,
    marginTop: 40,
    marginBottom: 40
  },
  viewInput: {
    marginBottom: 80,
    backgroundColor: colors.white
  },
  textInput: {
    color: colors.darkGray,
    fontFamily: fonts.Jost_600SemiBold,
    marginTop: 10
  },
  input: {
    height: 50,
    borderWidth: 3,
    padding: 10,
    borderColor: colors.shapeGray,
    marginBottom: 25,
    borderRadius: 4
  }
})