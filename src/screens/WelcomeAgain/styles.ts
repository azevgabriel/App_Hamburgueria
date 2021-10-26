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
    }
})