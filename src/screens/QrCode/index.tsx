import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';
import img from '../../../assets/image-solid.png';
import {styles} from './styles';
import Button from '../../components/Button';
import { CupomProps } from '../../global/props';
import Voltar from '../../components/Voltar';
import { Cupom } from '../../components/Cupom';
import colors from '../../styles/colors';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export default function QrCode({ }:CupomProps){
    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black'/>
            </View>
            <View style={styles.textViewP}>
                <Text style={styles.textDescHam}>15% OFF! 😜</Text>
            </View>
            <View style={styles.cupomPicture}>
                <Image source={{uri: 'https://pnglux.com/wp-content/uploads/2021/04/1617430559_QR-code-PNG-High-Quality-Image.png'}} style={{width: largura/1.2, height: altura/2.4}}/>
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Instruções de uso!{'\n'}</Text>
                <Text style={styles.textS}>Escaneie seu QR Code na Hamburgueria ou envie em nosso WhatsApp!</Text>
            </View>
            <View style={styles.botao}>
                <Button color='colors.darkGray' title={'Enviar WhatsApp'}/>
            </View>
        </View>
    )
}