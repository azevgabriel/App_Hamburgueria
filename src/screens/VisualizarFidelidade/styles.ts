import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      width: '100%'
    },
    box: {
      flex: 9,
      marginHorizontal: '5%',
    },
    textoContainer: {
      flexDirection:'row',
      flex: 0.18,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginBottom: 10
    },
    texto: {
      color: colors.black,
      fontFamily: fonts.Jost_600SemiBold,
      fontSize: 30
    },
    cupomContainer: {
      flex: 1,
      marginBottom: 20
    },
    tab: {
      flex: 1.1,
      flexDirection: 'row',
  
      justifyContent: 'center',
      alignItems: 'center',
  
      borderTopColor: 'rgba(0,0,0,0.2)',
      borderTopWidth: 2
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