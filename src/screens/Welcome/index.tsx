import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import {styles} from './styles';

import Hamburger from '../../assets/hamburger.png';

import Button from '../../components/Button';

export default function Welcome(){
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
            />
            <Text style={[styles.label,{marginTop: "8%"}]}>
                Já tenho cadastro.
                </Text>
            <Button
                title="Entrar"
                color="#293845"
            />
        </View>
    )
}