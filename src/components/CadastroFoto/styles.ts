import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  user: {
    fontSize: 180,
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
  }
})