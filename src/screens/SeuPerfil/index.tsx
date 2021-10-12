import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CadastroFoto from "../../components/CadastroFoto";
import BotaoTab from "../../components/BotãoTab";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../SeuPerfil/styles";
import { TextInputMask } from "react-native-masked-text";

export default function SeuPerfil() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  let telefoneField = null;

  async function handleSubmit() {
    const data = {
      name: name,
      phone: phone,
      password: password,
    };

    if (!name) {
      return ToastAndroid.show('Digite seu nome, por favor.',  ToastAndroid.SHORT);
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
              onChangeText={(value) => setPhone(value)}
            /><View>
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

            <Text style={styles.textInput}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={colors.shapeGray}
              onChangeText={(value) => setPassword(value)}
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
