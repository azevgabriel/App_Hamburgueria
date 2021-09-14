import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: '15%',
        marginVertical: '10%',
        //paddingTop: Platform.OS === 'android' ? 15 : 0,
    },
    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: -.2,
        color: '#293845',
    },
    image: {
        alignSelf: 'center',
        width: '90%',
        height: '30%',
        marginVertical: '15%',
    },
    titleOne: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        letterSpacing: -.3,
        color: '#D85B6E'
    },
    titleTwo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'right',
        letterSpacing: -.3,
        color: '#2B7F70',   
        marginBottom: '15%',
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        letterSpacing: -.3,
        color: '#293845',
        marginBottom: '1%',
    }
})