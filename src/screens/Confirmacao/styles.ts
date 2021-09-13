import { Dimensions, Platform, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.swampGreen,
        paddingTop: Platform.OS === 'android' ? 15 : 0,
    },
    imageContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginHorizontal: '5%',
        height: '100%',
    },
    image:{
        height: Dimensions.get('window').width * 0.7
    },
    welcomeText:{
        marginTop: '5%',
        fontSize: 25,
        color: colors.white,
        fontWeight: 'bold'
    },
    nameText:{
        fontSize: 25,
        color: colors.red,
        fontWeight: 'bold'
    },
    ofertaText:{
        alignItems: 'flex-end',
        color: colors.blue,
        fontSize: 16,
        fontWeight: 'bold',
    }

})