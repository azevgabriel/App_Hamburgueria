import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Voltar from '../../components/Voltar';

import { styles } from './styles';

import CadastroFoto from '../../components/CadastroFoto';
import colors from '../../styles/colors';

import NumberSetter from '../../components/NumberSetter'

import Button from '../../components/Button';

export default function NovoCupom(){
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Voltar color='black'/>
            </View>
            <View style={styles.components}>
                <CadastroFoto />

                <Text 
                    style={styles.titleInput}
                >
                    Título:
                </Text>
                <TextInput
                    placeholder= "Título"
                    placeholderTextColor={colors.borderGray}
                    style={styles.input}
                />

                <Text 
                    style={styles.titleInput}
                >
                    Descrição:
                </Text>
                <TextInput
                    placeholder= "Utilize até..."
                    placeholderTextColor={colors.borderGray}
                    style={styles.input}
                />

                <NumberSetter 
                    title="Hamburguinhos🍔"
                />

                <NumberSetter 
                    title="Número de usos"
                />

                <Text 
                    style={styles.titleInput}
                >
                    Data máxima
                </Text>
                <TextInput
                    placeholder= "13/12/2021 ou indeterminado"
                    placeholderTextColor={colors.borderGray}
                    style={styles.input}
                />

            <Button 
                color="#32cd32"
                title="Cadastrar"
            />

            </View>
        </View>
    )
}