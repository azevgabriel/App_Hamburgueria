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
    }
})