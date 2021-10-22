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
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    back:{
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: '5%',
        alignSelf: 'flex-start'
    },
    cupomPicture:{
        alignItems: 'center',
        flex: 0.8,
        borderColor:colors.borderGray,
        borderWidth:2,
        borderStyle:'dashed',
        borderRadius:1,
        width:largura/1.5,
        marginTop: 5,
        marginBottom: 20
    },
    imagem:{
        width:largura/1.5,
        flex: 1,
        padding:30
    },
    botao:{
        width: largura/1.5,
        borderRadius:10,
        backgroundColor: colors.darkGray,
        marginBottom: 20
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
        marginTop:10,
        flex:1,
        textAlign: 'center',
        flexDirection:'column',
        justifyContent:'center',
        width:largura/1.5,
    },
    textS:{
        fontSize:18,
        flex:1,
        color:colors.darkGray,
        fontFamily: fonts.Jost_400Regular,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginBottom: 25
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