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
        alignItems: 'center',
        padding: 5,
        paddingTop: 10
    },
    back:{
        width:largura,
        bottom:altura/50,
        left:largura*0.05,
    },
    textViewP:{
        width:largura/1.5,
        flex:0.2,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent:'center',
        fontSize:16,
        fontFamily: fonts.Jost_600SemiBold,
        color: colors.darkGray,
    },
    textDescHam:{
        fontFamily: fonts.Jost_400Regular,
        fontSize:40,
        color: colors.darkGray,
        fontWeight: 'bold',
    },
    cupomPicture:{
        alignItems: 'center',
        flex: 0.9,
        borderColor:colors.borderGray,
        width:largura/1.5,
        height:altura,
    },
    imagem:{
        width:largura/1.5,
        flex: 1,
        padding:30,
        height:altura,
    },
    textViewS:{
        marginTop:40,
        marginBottom:30,
        fontFamily: fonts.Jost_600SemiBold,
        flex:0.5,
        textAlign: 'center',
        flexDirection:'column',
        justifyContent:'center',
        width:largura/1.2,
    },
    textS:{
        fontSize:23,
        flex:1,
        color:colors.darkGray,
        fontFamily: fonts.Jost_400Regular,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
      HamIconText:{
        fontFamily: fonts.Jost_400Regular,
        fontSize:20,
        color: colors.darkGray,
        fontWeight: 'bold',
      },
      botao:{
        fontFamily: fonts.Jost_600SemiBold,
        justifyContent:'center',
        textAlign:'center',
        width: largura/1.5,
        borderRadius:10,
        backgroundColor: colors.darkGray,
        flex:0.15,
    },
})