/**
 * 
 * Pegar o tipo de user para modificar o texto do botao
 */
import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';
import { CupomProps, UserProps, ObjectCupons } from '../../global/props';
import Voltar from '../../components/Voltar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParamList> ;

export default function CupomDescription({ navigation, route, ...rest}:Props){

    const { cupom } = route.params as ObjectCupons;
    const { user } = useAuth();

    function handleUserClick(){
        user.type
        ?
        navigation.navigate('QrCode',{
            cupom,
        })
        :
        navigation.navigate('NovoCupom',{
            cupom,
        })
    }
    function handleBack(){
        navigation.navigate('ViewCupons');
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black' onPress={handleBack}/>
            </View>
            <View style={styles.textViewP}>
                <View style={styles.hamburguinhos}>
                    <Text style={styles.HamIconText}>🍔 {cupom.burgers_added}</Text>
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
                {
                    user.type == 1
                    ?
                    <Button color='colors.darkGray' title={'Gerar QRCode'} onPress={() => handleUserClick()}/>
                    :
                    <Button color='colors.darkGray' title={'Editar'} onPress={() => handleUserClick()}/>
                }
            </View>
        </View>
    )
}