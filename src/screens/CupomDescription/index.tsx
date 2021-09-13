import React from 'react';
import {View, Image, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';
import img from '../../../assets/image-solid.png';
import {styles} from './styles';
import Button from '../../components/Button';
import { CupomProps } from '../../global/props';
import Voltar from '../../components/Voltar';


export default function CupomDescription({ usosPermitidos, usosRestantes, ...rest}:CupomProps){
    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black'/>
            </View>
            <View style={styles.textViewP}>
                <View style={styles.hamburguinhos}>
                    <Text style={styles.HamIconText}>🍔 {usosPermitidos}</Text>
                    <Text style={styles.HamIconText}>X{usosRestantes}</Text>
                 </View>
                <Text style={styles.textDescHam}>15% OFF! 😜</Text>
            </View>
            <View style={styles.cupomPicture}>
                <Image source={img} style={styles.imagem}/>
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa architecto aspernatur delectus neque dolores, asperiores, beatae fugiat id in omnis mollitia ab nihil? Eum quisquam esse necessitatibus ipsum voluptatibus.</Text>
                <Text style={styles.textS}>Procedimento: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa architecto aspernatur delectus neque dolores, asperiores, beatae fugiat id in omnis mollitia ab nihil? Eum quisquam esse necessitatibus ipsum voluptatibus.</Text>
            </View>
            <View style={styles.botao}>
                <Button title = 'Gerar QRCode' color=''/>
            </View>
        </View>
    )
}