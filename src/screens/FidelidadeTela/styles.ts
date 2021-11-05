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
    alignItems: "center"
  },
  back: {
    width: largura,
    paddingHorizontal: '5%',
    marginTop: 10
  },
  refreshButton: {
    marginTop: 5,
    alignSelf: 'flex-end',
    paddingHorizontal: '7%'
  },
  botao: {
    fontFamily: fonts.Jost_600SemiBold,
    justifyContent: "center",
    textAlign: "center",
    width: largura / 1.5,
    borderRadius: 10,
    backgroundColor: colors.darkGray,
    flex: 0.2,
  },
  textViewS: {
    fontFamily: fonts.Jost_600SemiBold,
    marginTop: 15,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: largura / 1.5
  },
  textS: {
    fontSize: 20,
    color: colors.darkGray,
    fontFamily: fonts.Jost_400Regular,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  hamburguinhos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  cupom: {
    borderTopColor: 'gray',
    borderTopWidth: 2,
    paddingTop: 15,
    width: largura,
    paddingHorizontal: '5%',
    marginBottom: 10,
    paddingBottom: 20
  },
  viewHeader: {
    marginBottom: 40,
    width: largura,
    alignItems: 'center'
  },
  progressBar: {
    borderRadius: 50,
    height:altura/60
  }
  
});
