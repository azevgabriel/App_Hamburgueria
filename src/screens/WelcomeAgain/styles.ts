import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    logoContainer: {
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
      fontWeight: 'bold'
    },
    againText: {
      color: colors.green,
      fontSize: 25,
      fontWeight: 'bold'
    },
    inputContainer: {
      flex: 2,
      marginHorizontal: '5%'
    },
    inputText:{
      color: colors.black,
      fontSize: 16,
      marginBottom: 5
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
      flex: 1,
      marginHorizontal: '5%',
      alignItems: 'flex-end'
    },
    ofertaText:{
      color: colors.darkGray,
      fontSize: 16,
      fontWeight: 'bold',
    }
})