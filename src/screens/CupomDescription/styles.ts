import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import fonts from '../../styles/fonts';

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
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    cupomPicture:{
        alignItems: 'center',
        flex: 1,
    },
    imagem:{
        width:largura/1.5,
        flex: 1,
        borderColor:'gray',
        borderWidth:2,
        borderStyle:'dashed',
        padding:30,
    },
    botao:{
        height: altura/20,
        justifyContent:'center',
        textAlign:'center',
        width: largura/1.5,
        borderRadius:10,
        backgroundColor: 'gray',
        flex:0.1,
        marginTop:25,
    },
    textViewP:{
        width:largura/1.5,
        flex:0.1,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textDescHam:{
        fontFamily: fonts.Jost_400Regular,
        fontSize:20,
        color:'gray',
    },
    textViewS:{
        marginTop:50,
        flex:0.8,
        textAlign: 'center',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    textS:{
        fontSize:16,
        flex:1,
        color:'gray',
        fontFamily: fonts.Jost_400Regular,
    },
    hamburguinhos:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
      },
      HamIconText:{
        fontFamily: fonts.Jost_400Regular,
        fontSize:20,
        color:'gray',
      },
})