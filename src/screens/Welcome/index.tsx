import React, { useCallback } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

import { styles } from './styles';

import Hamburger from '../../assets/hamburger.png';

import Button from '../../components/Button';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, UserProps } from '../../global/props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Welcome({ navigation }: Props) {
    const { set_User } = useAuth();
    const handleCadastro = useCallback(() => {
        navigation.navigate('Cadastro');
    }, [])

    const handleLogin = useCallback(async () => {

        const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN');
        const user = await AsyncStorage.getItem('@Hamburgueria:USER');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            set_User(JSON.parse(user));
            navigation.navigate('ViewCupons');
        } else {
            navigation.navigate('WelcomeAgain');
        }
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} translucent barStyle={'dark-content'} backgroundColor="#f2f2f2" />
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
            <Text style={[styles.label, { marginTop: "8%" }]}>
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