import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, TextInput, Text, ToastAndroid } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import Button from "../../components/Button";
import { CupomProps } from "../../global/props";

interface Props {
  cupom: CupomProps
}
export const LevelRegistration = ({ cupom }: Props) => {
  useEffect(() => {
    // fazer o fech de hamburguinhos_fornecidos da tabela level
    // setNumberOfBurgers(valor buscado)
  }, [])

  const [numberOfBurgers, setNumberOfBurgers] = useState<number>(0);
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    if (!description) {
      return ToastAndroid.show('Digite a descrição do prêmio, por favor.', ToastAndroid.SHORT);
    }
  }

  const handleButton = (type: string) => {
    if (type === "plus") {
      setNumberOfBurgers((oldValue) => oldValue + 1);
    } else {
      if (numberOfBurgers !== 0) {
        setNumberOfBurgers((oldValue) => oldValue - 1);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <AntDesign name="caretleft" size={25} color="black" />
        </TouchableOpacity>
        {/* Fazer o fech de nivel */}
        <Text style={styles.title}>Nível 1</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Prêmio:</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.input}
          textBreakStrategy="highQuality"
          placeholder="Insira a descrição do Prêmio"
          maxLength={100}
          value={cupom.description}
        />
      </View>
      <View
        style={[
          styles.column,
          {
            justifyContent: "flex-start",
            height: "10%",
            marginTop: "5%",
            marginBottom: "auto",
          },
        ]}
      >
        <Text style={styles.label}>🍔 Hamburguinhos:</Text>
        <View
          style={[
            styles.row,
            {
              marginTop: "auto",
              height: "80%",
            },
          ]}
        >
          <TouchableOpacity onPress={() => handleButton("minus")}>
            <AntDesign name="minussquareo" size={30} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={styles.label}>{numberOfBurgers}</Text>
          </View>
          <TouchableOpacity onPress={() => handleButton("plus")}>
            <AntDesign name="plussquareo" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Editar" color="#1AAE9F" onPress={handleSubmit} />
    </View>
  );
};
