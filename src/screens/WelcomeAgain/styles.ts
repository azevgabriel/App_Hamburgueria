import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
      marginTop:20,
      flexGrow: 1,
      flexDirection: 'column',
      paddingBottom: 30
    },
    checkbox: {
      alignSelf: "center",
    },
    logoContainer: {
      marginTop:50,
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      height: Dimensions.get('window').width * 0.5
    },
    welcomeText: {
      marginTop: 25,
      color: colors.red,
      fontSize: 25,
      fontFamily: fonts.Jost_600SemiBold
    },
    againText: {
      color: colors.green,
      fontSize: 25,
      fontFamily: fonts.Jost_600SemiBold
    },
    inputContainer: {
      flex: 3,
      marginHorizontal: '5%'
    },
    inputText:{
      color: colors.black,
      fontSize: 16,
      marginBottom: 5,
      fontFamily: fonts.Jost_400Regular
    },
    input: {
      height: 40,
      borderWidth: 2,
      borderColor: colors.borderGray,
      borderRadius: 8,
      padding: 10,
      marginBottom: 10
    },
    buttonContainer: {
      flex: 1.3,
      marginHorizontal: '5%',
      alignItems: 'flex-end',
    },
    ofertaText:{
      marginTop: 20,
      color: colors.darkGray,
      fontSize: 16,
      fontFamily: fonts.Jost_600SemiBold
    },
    modalBackground: {
      backgroundColor: 'rgba(0,0,0,0.7)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalLogout: {
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
    textModal: {
      fontFamily: fonts.Jost_400Regular,
      fontSize: 20,
      color: colors.black,
      marginBottom: 15,
      textAlign: 'center'
    },
    buttonModalCancelar: {
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
    textCancelar: {
      fontFamily: fonts.Jost_400Regular,
      fontSize: 18,
      color: colors.white
    },
})