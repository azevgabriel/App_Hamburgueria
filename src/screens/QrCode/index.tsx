import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import img from '../../../assets/image-solid.png';
import { styles } from './styles';
import Button from '../../components/Button';
import { CupomProps } from '../../global/props';
import Voltar from '../../components/Voltar';
import { Cupom } from '../../components/Cupom';
import colors from '../../styles/colors';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

interface Props {
    cupom: CupomProps
}
export default function QrCode({ cupom }: Props) {
    function handleWhatsSubmit(){
        // Ir pra proxima tela
    }
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black' />
            </View>
            <View style={styles.textViewP}>
                <Text style={styles.textDescHam}>15% OFF! 😜</Text>
            </View>
            <View style={styles.cupomPicture}>
                <Image source={{ uri: 'https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png' }} style={{ width: largura / 1.4, height: altura / 2.8 }} />
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Instruções de uso!{'\n'}</Text>
                <Text style={styles.textS}>Escaneie seu QR Code na Hamburgueria ou envie em nosso WhatsApp!</Text>
            </View>
            <View style={styles.botao}>
                <Button color='colors.darkGray' title={'Enviar WhatsApp'} onPress={() => handleWhatsSubmit()}/>
            </View>
        </View>
    )
}