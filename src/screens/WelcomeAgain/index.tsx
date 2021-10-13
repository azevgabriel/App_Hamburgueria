import React, {useCallback, useState} from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';

import icon from '../../assets/logo.png';
import Button from '../../components/Button';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootStackParamList';

import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function WelcomeAgain({navigation}: Props){

  const { login } = useAuth();

  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
 
  const handleViewCupons = useCallback(() => {  
    navigation.navigate('ViewCupons');
  },[])

  async function handleSubmit() {
      
    // await login({
    //   cpf, 
    //   senha
    // })
    
    // pegar os dados, verificar se ambos os campos estao preenchidos, usar sempre useCallback em vez de functions

  }

  
  
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
          onChangeText={(value) => setCPF(value)}
          
        />
        <Text style={styles.inputText}>
          Digite sua senha abaixo:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setSenha(value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.ofertaText}>
          Aproveite nossas ofertas!
        </Text>
        <Button 
          color={colors.darkGray}
          title="Bora!"
          onPress={handleSubmit}
        />
      </View>
    </View> 
    
  );
}