/**
 * 
 * Pegar o tipo de user para modificar o texto do botao
 */
import React from 'react';
import { View, Image, Text, Dimensions, StatusBar } from 'react-native';
import { styles } from './styles';
import Button from '../../components/Button';
import { CupomProps, UserProps, ObjectCupons } from '../../global/props';
import Voltar from '../../components/Voltar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';

import icon1 from "../../assets/cuponsImages/icon1.jpg";
import icon2 from "../../assets/cuponsImages/icon2.jpg";
import icon3 from "../../assets/cuponsImages/icon3.jpg";
import icon4 from "../../assets/cuponsImages/icon4.jpg";
import icon5 from "../../assets/cuponsImages/icon5.jpg";
import icon6 from "../../assets/cuponsImages/icon6.jpg";
import icon7 from "../../assets/cuponsImages/icon7.jpg";
import icon8 from "../../assets/cuponsImages/icon8.jpg";
import icon9 from "../../assets/cuponsImages/icon9.png";
import icon10 from "../../assets/cuponsImages/icon10.jpg";
import icon11 from "../../assets/cuponsImages/icon11.png";
import icon12 from "../../assets/cuponsImages/icon12.png";
import icon13 from "../../assets/cuponsImages/icon13.jpg";
import icon14 from "../../assets/cuponsImages/icon14.jpg";
import icon15 from "../../assets/cuponsImages/icon15.png";
import icon16 from "../../assets/cuponsImages/icon16.png";
import icon17 from "../../assets/cuponsImages/icon17.jpg";
import icon18 from "../../assets/cuponsImages/icon18.png";
import icon19 from "../../assets/cuponsImages/icon19.jpg";
import icon20 from "../../assets/cuponsImages/icon20.jpg";
import icon21 from "../../assets/cuponsImages/icon21.jpg";
import icon22 from "../../assets/cuponsImages/icon22.jpg";
import icon23 from "../../assets/cuponsImages/icon23.png";
import icon24 from "../../assets/cuponsImages/icon24.jpg";
import icondefault from "../../assets/cuponsImages/icondefault.jpg";

const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

type Props = NativeStackScreenProps<RootStackParamList>;

export default function CupomDescription({ navigation, route, ...rest }: Props) {

    const { cupom } = route.params as ObjectCupons;
    const { user } = useAuth();


    function getImage() {
        switch (cupom.image) {
            case 'icon1':
                return icon1;
                break
            case 'icon2':
                return icon2;
                break
            case 'icon3':
                return icon3;
                break
            case 'icon4':
                return icon4;
                break
            case 'icon5':
                return icon5;
                break
            case 'icon6':
                return icon6;
                break
            case 'icon7':
                return icon7;
                break
            case 'icon8':
                return icon8;
                break
            case 'icon9':
                return icon9;
                break
            case 'icon10':
                return icon10;
                break
            case 'icon11':
                return icon11;
                break
            case 'icon12':
                return icon12;
                break
            case 'icon13':
                return icon13;
                break
            case 'icon14':
                return icon14;
                break
            case 'icon15':
                return icon15;
                break
            case 'icon16':
                return icon16;
                break
            case 'icon17':
                return icon17;
                break
            case 'icon18':
                return icon18;
                break
            case 'icon19':
                return icon19;
                break
            case 'icon20':
                return icon20;
                break
            case 'icon21':
                return icon21;
                break
            case 'icon22':
                return icon22;
                break
            case 'icon23':
                return icon23;
                break
            case 'icon24':
                return icon24;
                break
            default:
                return icondefault;
        }

    }

    function handleUserClick() {
        user.type
            ?
            navigation.navigate('QrCode', {
                cupom,
            })
            :
            navigation.navigate('NovoCupom', {
                cupom,
            })
    }
    function handleBack() {
        navigation.navigate('ViewCupons');
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} translucent barStyle={'dark-content'} backgroundColor="#fbe292" />
            <View style={styles.back}>
                <Voltar color='black' onPress={handleBack} />
            </View>
            <View style={styles.textViewP}>
                <View style={styles.hamburguinhos}>
                    <Text style={styles.HamIconText}>🍔 {cupom.burgers_added}</Text>
                </View>
                <Text style={styles.textDescHam}>{cupom.title?.substring(0, 15) + '...'}</Text>
            </View>
            <View style={styles.cupomPicture}>
                {
                    cupom.fidelity
                        ?
                        <Image style={{ width: largura / 1.55, height: altura / 3.7 }} source={require('../../assets/star.png')} />
                        :
                        cupom.image && cupom.image != ''
                            ?
                            <Image source={getImage()} style={{ width: largura / 1.55, height: altura / 3.2 }} />
                            :
                            <Image source={icondefault} style={{ width: largura / 1.55, height: altura / 3.2 }} />
                }
            </View>
            <View style={styles.textViewS}>
                <Text style={styles.textS}>Descrição: {cupom.description + '\n'}</Text>
                <Text style={styles.textS}>Procedimento: Gere o QR Code, apresente na hora de pedir o lanche ou envie por Whatsapp.</Text>
            </View>
            <View style={styles.botao}>
                {
                    user.type == 1
                        ?
                        <Button color='colors.darkGray' title={'Gerar QRCode'} onPress={() => handleUserClick()} />
                        :
                        <Button color='colors.darkGray' title={'Editar'} onPress={() => handleUserClick()} />
                }
            </View>
        </View>
    )
}