import { Platform, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'android' ? 15 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setterContainer:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button:{
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.borderGray,
        borderRadius: 3,
    },
    displayNumber:{
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.borderGray,
        borderRadius: 3
    },
    buttonText:{
        color: colors.borderGray,
        fontSize: 27,
    },
    displayNumberText:{
        color: colors.borderGray,
        fontSize: 20,
    },
    title:{
        marginBottom: 7,
    }
})