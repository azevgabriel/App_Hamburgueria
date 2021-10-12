import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import api from "../../services/api";
import { styles } from "./styles";
import colors from "../../styles/colors";
import { UserProps } from "../../global/props";
import icon from "../../assets/logo.png";
import Button from "../../components/Button";
import { TextInputMask } from "react-native-masked-text";

interface Props {
  user: UserProps;
}

export default function WelcomeAgain() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  let cpfField = null;

  async function fetchUser(cpf:string, password:string) {
    console.log(password)
    // Procurar o user com um post passando o cpf e senha
  }

  async function handleSubmit() {
    fetchUser(cpf, password);
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
}
