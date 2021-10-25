import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, ToastAndroid, ScrollView } from "react-native";
import { styles } from "./styles";
import colors from "../../styles/colors";
import icon from "../../assets/logo.png";
import Button from "../../components/Button";
import { TextInputMask } from "react-native-masked-text";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function WelcomeAgain({ navigation }: Props) {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  let cpfField = null;

  const { user, signInUser } = useAuth();

  const handleSubmit = async() => {

    if (!cpf) {
      return ToastAndroid.show('Digite o CPF, por favor.', ToastAndroid.SHORT);
    }

    if (!password) {
      return ToastAndroid.show('Digite a Senha, por favor.', ToastAndroid.SHORT);
    }

    try {
      await signInUser({ 
        cpf: cpf, 
        password: password 
      });
      if (user)
      console.log(user);
      //navigation.navigate('ViewCupons');
    } catch (er) {
      Alert.alert('Erro ao Fazer Login' + er)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={icon} resizeMode="contain" style={styles.logo} />
        <Text style={styles.welcomeText}>Bem vindo(a)</Text>
        <Text style={styles.againText}>novamente! 🥰</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Digite seu CPF abaixo:</Text>
        <TextInputMask
          placeholder="CPF"
          type={"cpf"}
          value={cpf}
          onChangeText={(value) => {
            setCpf(value);
          }}
          keyboardType="number-pad"
          returnKeyType="done"
          ref={(ref) => (cpfField = ref)}
          style={styles.input}
        />
        <Text style={styles.inputText}>Digite sua senha abaixo:</Text>
        <TextInput
          placeholder="*********"
          value={password}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          maxLength={50}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.ofertaText}>Aproveite nossas ofertas!</Text>
        <Button color={colors.darkGray} title="Bora!" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}
