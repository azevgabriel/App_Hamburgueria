import React, { useState } from "react";
import { View, Text, TextInput, ToastAndroid, TouchableWithoutFeedback, Keyboard, ScrollView, Image, TouchableOpacity } from "react-native";
import Voltar from "../../components/Voltar";

import { styles } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

import CadastroFoto from "../../components/CadastroFoto";
import colors from "../../styles/colors";

import NumberSetter from "../../components/NumberSetter";

import Button from "../../components/Button";
import { CupomProps } from "../../global/props";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  cupom?: CupomProps
}
export default function NovoCupom({ cupom }: Props) {
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
      return ToastAndroid.show('Digite o título do cupom, por favor.', ToastAndroid.SHORT);
    }
    if (!description) {
      return ToastAndroid.show('Digite a descrição, por favor.', ToastAndroid.SHORT);
    }
    if (!datamax) {
      return ToastAndroid.show('Digite a data corretamente por favor.', ToastAndroid.SHORT);
    }
  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.back}>
          <Voltar color="black" />
        </View>
        <View style={styles.components}>
          {
            cupom
              ?
              <View style={styles.userContainer}>
                <Image source={{ uri: cupom.image }} style={{ width: 140, height: 140, }} />
                <TouchableOpacity
                  style={styles.plus}
                  activeOpacity={0.8}
                >
                  <Text>
                    <AntDesign name="plus" style={styles.iconPlus} />
                  </Text>
                </TouchableOpacity>
              </View>

              :
              <CadastroFoto />
          }

          <Text style={styles.titleInput}>Título:</Text>
          <TextInput
            placeholder="Título"
            placeholderTextColor={colors.borderGray}
            style={styles.input}
            onChangeText={(value) => setTitulo(value)}
            value={cupom?.title}
            maxLength={50}
          />

          <Text style={styles.titleInput}>Descrição:</Text>
          <TextInput
            placeholder="Utilize até..."
            placeholderTextColor={colors.borderGray}
            style={styles.input}
            onChangeText={(value) => setDescription(value)}
            value={cupom?.description}
            maxLength={100}
          />

          <NumberSetter title="Hamburguinhos🍔" numberOld={cupom?.burgers_added} />

          <NumberSetter title="Número de usos" numberOld={cupom?.permitted_uses} />

          <Text style={styles.titleInput}>Data máxima</Text>
          <TextInput
            placeholder="13/12/2021 ou indeterminado"
            placeholderTextColor={colors.borderGray}
            style={styles.input}
            value={cupom?.expiration_date}
            onChangeText={(value) => setDataMax(value)}
          />

          <View style={{marginTop: 5}}>
            <Button color="#32cd32" title="Cadastrar" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
