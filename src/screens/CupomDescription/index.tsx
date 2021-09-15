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

export default function CupomDescription({ usosPermitidos, usosRestantes, ...rest}:CupomProps){
    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black'/>
            </View>
            <View style={styles.textViewP}>
                <View style={styles.hamburguinhos}>
                    <Text style={styles.HamIconText}>🍔 {usosPermitidos}</Text>
                 </View>
                <Text style={styles.textDescHam}>15% OFF! 😜</Text>
            </View>
            <View style={styles.cupomPicture}>
                <Image source={{uri: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg'}} style={{width: largura/1.55, height: altura/3.2}}/>
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa architecto aspernatur delectus neque dolores, asperiores, beatae fugiat id in omnis mollitia ab nihil?{'\n'}</Text>
                <Text style={styles.textS}>Procedimento: Gere o QR Code, apresente na hora de pedir o lanche ou envie por Whatsapp.</Text>
            </View>
            <View style={styles.botao}>
                <Button color='colors.darkGray' title={'Gerar QRCode'}/>
            </View>
        </View>
    )
}