import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'; 

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  user: {
    fontSize: 150,
    color: colors.shapeGray
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
  iconPlus: {
    fontSize: 30,
    color: colors.green
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
})