import React, { useState } from "react";
import { View, Text, TextInput, ToastAndroid } from "react-native";
import Voltar from "../../components/Voltar";

import { styles } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

import CadastroFoto from "../../components/CadastroFoto";
import colors from "../../styles/colors";

import NumberSetter from "../../components/NumberSetter";

import Button from "../../components/Button";

export default function NovoCupom() {
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [datamax, setDataMax] = useState("");

  async function handleSubmit() {
    const data = {
      titulo: titulo,
      description: description,
      datamax: datamax,
    };

    if (!titulo) {
      return ToastAndroid.show('Digite o título do cupom, por favor.',  ToastAndroid.SHORT);
    }
    if (!description) {
      return ToastAndroid.show('Digite a descrição, por favor.',  ToastAndroid.SHORT);
    }
    if (!datamax) {
      return ToastAndroid.show('Digite a data corretamente por favor.',  ToastAndroid.SHORT);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Voltar color="black" />
      </View>
      <View style={styles.components}>
        <CadastroFoto />

        <Text style={styles.titleInput}>Título:</Text>
        <TextInput
          placeholder="Título"
          placeholderTextColor={colors.borderGray}
          style={styles.input}
          onChangeText={(value) => setTitulo(value)}
          maxLength={50}
        />

        <Text style={styles.titleInput}>Descrição:</Text>
        <TextInput
          placeholder="Utilize até..."
          placeholderTextColor={colors.borderGray}
          style={styles.input}
          onChangeText={(value) => setDescription(value)}
          maxLength={100}
        />

        <NumberSetter title="Hamburguinhos🍔" />

        <NumberSetter title="Número de usos" />

        <Text style={styles.titleInput}>Data máxima</Text>
        <TextInput
          placeholder="13/12/2021 ou indeterminado"
          placeholderTextColor={colors.borderGray}
          style={styles.input}
          onChangeText={(value) => setDataMax(value)}
        />

        <Button color="#32cd32" title="Cadastrar" onPress={handleSubmit} />
      </View>
    </View>
  );
}
