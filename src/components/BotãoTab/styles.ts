import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    button:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
      color: colors.darkOrange,
      borderBottomWidth: 1,
      borderColor: colors.softOrange,
      fontFamily: fonts.Jost_400Regular,
      fontSize: 18
    }
})