import React, { useCallback } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import {styles} from './styles';

import Hamburger from '../../assets/hamburger.png';

import Button from '../../components/Button';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Welcome({navigation}: Props){

    const handleCadastro = useCallback(() => {
        navigation.navigate('Cadastro');
    },[])

    const handleLogin = useCallback(() => {
        navigation.navigate('WelcomeAgain');
    },[])


    return(
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Bem vindo, visitante!
            </Text>
            <Image
                style={styles.image}
                source={Hamburger}
            />
            <Text style={styles.titleOne}>
                HAMBURGUERIA
            </Text>
            <Text style={styles.titleTwo}>
                BOGIATTO
            </Text>
            <Text style={styles.label}>
                Você é novo por aqui?
            </Text>
            <Button
                title="Cadastrar"
                color="#293845"
                onPress={handleCadastro}
            />
            <Text style={[styles.label,{marginTop: "8%"}]}>
                Já tenho cadastro.
                </Text>
            <Button
                title="Entrar"
                color="#293845"
                onPress={handleLogin}
            />
        </View>
    )
}