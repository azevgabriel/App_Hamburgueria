import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fbe292',
        flex: 1,
        alignItems: 'center'
    },
    back:{
        width:largura,
        bottom:altura/50,
        paddingHorizontal: '5%',
        marginTop: 20
    },
    textViewP:{
        paddingHorizontal: '5%',
        marginTop: 20,
        width:largura,
        flex:0.3,
        justifyContent:'center',
        fontSize:16,
    },
    textDescHam:{
        fontFamily: fonts.Jost_600SemiBold,
        fontSize:30,
        color: colors.black,
        textAlign: 'center'
    },
    cupomPicture:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.9,
        width:largura,
        paddingHorizontal: '5%'
    },
    textViewS:{
        flex:0.5,
        width:largura,
        paddingHorizontal: '5%',
        justifyContent: 'center'
    },
    textS:{
        fontFamily: fonts.Jost_600SemiBold,
        fontSize:23,
        color:colors.darkGray,
        textAlign:'center',
    },
    botao:{
    justifyContent:'center',
    textAlign:'center',
    width: largura,
    flex:0.3,
    paddingHorizontal: '5%'
    },
})