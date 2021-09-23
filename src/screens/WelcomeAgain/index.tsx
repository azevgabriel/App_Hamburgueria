import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';

import icon from '../../assets/logo.png';
import Button from '../../components/Button';

export default function WelcomeAgain(){
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={icon}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>
          Bem vindo(a)
        </Text>
        <Text style={styles.againText}>
          novamente! 🥰
        </Text>
      </View>
      <View style={styles.inputContainer} >
        <Text style={styles.inputText}>
          Digite seu CPF abaixo:
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={styles.inputText}>
          Digite sua senha abaixo:
        </Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.ofertaText}>
          Aproveite nossas ofertas!
        </Text>
        <Button 
          color={colors.darkGray}
          title="Bora!"
        />
      </View>
    </View> 
  );
}