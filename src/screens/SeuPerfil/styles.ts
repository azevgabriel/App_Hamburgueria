import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonChoose: {
    backgroundColor: colors.softOrange,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalBackground2: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalLogout2: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#990000'
  },
  textModal2: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 20,
    color: colors.black,
    marginBottom: 15,
    textAlign: 'center'
  },
  buttonModalCancelar2: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    marginRight: 15,
    backgroundColor: '#990000',
    borderRadius: 8,
    paddingVertical: 10
  },
  textCancelar2: {
    fontFamily: fonts.Jost_400Regular,
    fontSize: 18,
    color: colors.white
  },
})