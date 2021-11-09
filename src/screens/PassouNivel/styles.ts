import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    titleContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
    },
    textoNivel: {
      fontFamily: fonts.Jost_600SemiBold,
      fontSize: 35,
      textAlign: "center",
      color: colors.black
    },
    icon: {
      height: Dimensions.get('window').width * 0.4,
      marginBottom: 20
    },
    descricao: {
      fontFamily: fonts.Jost_400Regular,
      fontSize: 22,
      textAlign: "center",
      color: colors.black
    },
    recompensaContainer: {
      flex: 4,
      alignItems: "center",
      marginTop: 20
    },
    buttonContainer: {
      flex: 1,
      marginHorizontal: '5%'
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