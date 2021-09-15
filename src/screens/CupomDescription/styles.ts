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
        padding: 50,
    },
    back:{
        width:largura,
        bottom:altura/50,
        left:largura*0.05,
    },
    cupomPicture:{
        alignItems: 'center',
        flex: 0.8,
        borderColor:colors.borderGray,
        borderWidth:2,
        borderStyle:'dashed',
        borderRadius:1,
        width:largura/1.5,
    },
    imagem:{
        width:largura/1.5,
        flex: 1,
        padding:30,
    },
    botao:{
        fontFamily: fonts.Jost_600SemiBold,
        justifyContent:'center',
        textAlign:'center',
        width: largura/1.5,
        borderRadius:10,
        backgroundColor: colors.darkGray,
        flex:0.2,
    },
    textViewP:{
        width:largura/1.5,
        flex:0.1,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        fontFamily: fonts.Jost_600SemiBold,
        color: colors.darkGray,
    },
    textDescHam:{
        fontFamily: fonts.Jost_400Regular,
        fontSize:20,
        color: colors.darkGray,
        fontWeight: 'bold',
    },
    textViewS:{
        fontFamily: fonts.Jost_600SemiBold,
        marginTop:30,
        flex:1,
        textAlign: 'center',
        flexDirection:'column',
        justifyContent:'center',
        width:largura/1.5,
    },
    textS:{
        fontSize:20,
        flex:1,
        color:colors.darkGray,
        fontFamily: fonts.Jost_400Regular,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    hamburguinhos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
      },
      HamIconText:{
        fontFamily: fonts.Jost_400Regular,
        fontSize:20,
        color: colors.darkGray,
        fontWeight: 'bold',
      },
})