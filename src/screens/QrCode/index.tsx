import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import img from '../../../assets/image-solid.png';
import { styles } from './styles';
import Button from '../../components/Button';
import { CupomProps, ObjectCupons } from '../../global/props';
import Voltar from '../../components/Voltar';
import { Cupom } from '../../components/Cupom';
import colors from '../../styles/colors';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';

type Props = NativeStackScreenProps<RootStackParamList> ;

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export default function QrCode({ navigation, route, ...rest}:Props) {
    const {cupom} = route.params as ObjectCupons
    function handleWhatsSubmit(){
        //Copiar código do id da tabela user_cupon para a area de transferencia do aparelho
    }

    function handleBack(){
        navigation.navigate('ViewCupons')
    }
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black' onPress={handleBack}/>
            </View>
            <View style={styles.textViewP}>
                <Text style={styles.textDescHam}>{cupom.title?.substring(0,15)+'...'}</Text>
            </View>
            <View style={styles.cupomPicture}>
                <Image source={{ uri: 'https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png' }} style={{ width: largura / 1.4, height: altura / 2.8 }} />
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Instruções de uso!{'\n'}</Text>
                <Text style={styles.textS}>Escaneie seu QR Code na Hamburgueria ou envie em nosso WhatsApp!</Text>
            </View>
            <View style={styles.botao}>
                <Button color='colors.darkGray' title={'Copiar Código'} onPress={() => handleWhatsSubmit()}/>
            </View>
        </View>
    )
}