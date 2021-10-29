import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons';
import img from '../../../assets/image-solid.png';
import { styles } from './styles';
import Button from '../../components/Button';
import { CupomProps, ObjectCupons } from '../../global/props';
import Voltar from '../../components/Voltar';
import { Cupom } from '../../components/Cupom';
import colors from '../../styles/colors';
import QRCode from 'react-native-qrcode-svg';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';

type Props = NativeStackScreenProps<RootStackParamList> ;

const id_user_coupon = 17861789178278718;

export default function QrCode({ navigation, route, ...rest}:Props) {
    const {cupom} = route.params as ObjectCupons
    function handleWhatsSubmit(){
        //Copiar código do id da tabela user_cupon para a area de transferencia do aparelho
        Clipboard.setString(id_user_coupon.toString());
        ToastAndroid.showWithGravityAndOffset(
            "Código copiado!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
          );
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
                <QRCode
                    value={id_user_coupon.toString()}
                    size={250}
                    color='black'
                    backgroundColor='white'
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                />
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Instruções de uso: {`\n`}</Text>
                <Text style={styles.textS}>Escaneie seu QR Code na Hamburgueria ou envie em nosso WhatsApp!</Text>
            </View>
            <View style={styles.botao}>
                <Button color={colors.darkGray} title={'Copiar Código'} onPress={() => handleWhatsSubmit()}/>
            </View>
        </View>
    )
}