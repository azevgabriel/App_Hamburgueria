import React, { useState } from "react";
import { Alert, View, Text, TextInput } from "react-native";
import Voltar from "../../components/Voltar";

import { styles } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

import CadastroFoto from "../../components/CadastroFoto";
import colors from "../../styles/colors";

import NumberSetter from "../../components/NumberSetter";

import Button from "../../components/Button";

export default function NovoCupom() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [datamax, setDataMax] = useState("");

  async function handleSubmit() {
    const data = {
      titulo: titulo,
      descricao: descricao,
      datamax: datamax,
    };

    if (!titulo) {
      return Alert.alert("Digite o título do cupom, por favor.");
    }
    if (!descricao) {
      return Alert.alert("Digite a descrição, por favor.");
    }
    if (!datamax) {
      return Alert.alert("Digite o número do seu celular, por favor.");
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
        />

        <Text style={styles.titleInput}>Descrição:</Text>
        <TextInput
          placeholder="Utilize até..."
          placeholderTextColor={colors.borderGray}
          style={styles.input}
          onChangeText={(value) => setDescricao(value)}
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
