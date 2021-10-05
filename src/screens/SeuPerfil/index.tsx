import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CadastroFoto from "../../components/CadastroFoto";
import BotaoTab from "../../components/BotãoTab";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../SeuPerfil/styles";

export default function SeuPerfil() {
  const [name, setName] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit() {
    const data = {
      name: name,
      celular: celular,
      senha: senha,
    };

    if (!name) {
      return Alert.alert("Edite seu nome corretamente.");
    }

    if (!celular) {
      return Alert.alert("Edite o número do seu celular corretamente");
    }
    if (!senha) {
      return Alert.alert("Edite sua senha corretamente..");
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Seu Perfil</Text>

          <CadastroFoto />

          <View style={styles.viewInput}>
            <Text style={styles.textInput}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor={colors.shapeGray}
              onChangeText={(value) => setName(value)}
            />

            <Text style={styles.textInput}>Celular:</Text>
            <TextInput
              style={styles.input}
              placeholder="(XX) X.XXXX-XXXX"
              placeholderTextColor={colors.shapeGray}
              onChangeText={(value) => setCelular(value)}
            />

            <Text style={styles.textInput}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={colors.shapeGray}
              onChangeText={(value) => setSenha(value)}
            />

            <Button
              title="Atualizar dados."
              color={colors.darkGray}
              onPress={handleSubmit}
            />
          </View>
        </View>

        <View style={styles.tab}>
          <BotaoTab title={"🏆 Fidelidade"} style={styles.spaceTab} />
          <View style={styles.divisor} />
          <BotaoTab title={"😎 Perfil"} style={styles.spaceTab} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
