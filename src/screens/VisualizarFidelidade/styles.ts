import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  textViewP:{
    left:largura/5.5,
    flex:0.5,
    fontFamily: fonts.Jost_600SemiBold,
    color: 'black',
    marginTop:altura/200,
    top: altura/20
},
textP:{
    fontFamily: fonts.Jost_400Regular,
    fontSize:30,
    color: 'black',
    fontWeight: 'bold',
},
botao: {
    fontFamily: fonts.Jost_600SemiBold,
    justifyContent: "center",
    textAlign: "center",
    width: largura / 1.5,
    borderRadius: 10,
    flex: 0.15,
    color:'white'
  },
  cupom: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 30,
    marginBottom: altura/5.5,
  },

});
