import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    button:{
        height: 55,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.Jost_400Regular
    }
})