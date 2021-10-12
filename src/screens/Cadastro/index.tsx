import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../Cadastro/styles";
import { useNavigation } from "@react-navigation/native";
import CadastroFoto from "../../components/CadastroFoto";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import { TextInputMask } from "react-native-masked-text";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  let cpfField = null;
  let telefoneField = null;


  async function handleSubmit() {
    const data = {
      name: name,
      cpf: cpf,
      phone: phone,
      password: password,
    };

    if (!name) {
      return ToastAndroid.show('Digite seu nome, por favor.',  ToastAndroid.SHORT);
      
    }
    if (!cpf) {
      return ToastAndroid.show('Digite seu cpf, por favor.',  ToastAndroid.SHORT);
    }
    if (!phone) {
      return ToastAndroid.show('Digite o número do seu celular, por favor.',  ToastAndroid.SHORT);
    }
    if (!password) {
      return ToastAndroid.show('Digite sua senha, por favor.',  ToastAndroid.SHORT);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>Faça seu cadastro!</Text>

        <CadastroFoto />

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Nome:</Text>
          <TextInput
            placeholder="Nome"
            placeholderTextColor={colors.shapeGray}
            value={name}
            style={styles.input}
            onChangeText={(value) => setName(value)}
            maxLength={100}
          />

          <Text style={styles.titleInput}>CPF:</Text>
          <View style={styles.titleInput}>
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
          </View>

          <Text style={styles.titleInput}>Celular:</Text>
          <View>
            <TextInputMask
              placeholder="Telefone"
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "(55) ",
              }}
              value={phone}
              onChangeText={(value) => {
                setPhone(value);
              }}
              keyboardType="phone-pad"
              returnKeyType="done"
              ref={(ref) => (telefoneField = ref)}
              style={styles.input}
            />
          </View>

          <Text style={styles.titleInput}>Senha:</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor={colors.shapeGray}
            value={password}
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            maxLength={50}
          />
        </View>

        <Button
          color={colors.darkGray}
          title="Confirmar dados."
          onPress={handleSubmit}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
