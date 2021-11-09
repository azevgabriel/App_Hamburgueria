import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  ToastAndroid,
  Alert,
  StatusBar,
  Modal
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

import Button from "../../components/Button";
import { CupomProps, CuposAndLevels, ObjectCupons } from "../../global/props";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../global/props";
import { useAuth } from "../../hooks/useAuth";
import colors from "../../styles/colors";

type Props = NativeStackScreenProps<RootStackParamList>;
export const LevelRegistration = ({ navigation, route, ...rest }: Props) => {
  const { updateCupom, updateLevel } = useAuth();
  const { cupom, level } = route.params as CuposAndLevels;
  const [loadingAsync, setLoadingAsync] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  useEffect(() => {
    setNumberOfBurgers(cupom.burgers_added ? cupom.burgers_added : 0);
    setNumberOfBurgers(level.burgers_needed ? level.burgers_needed : 0);
  }, []);

  const [numberOfBurgers, setNumberOfBurgers] = useState<number>(0);
  const [description, setDescription] = useState(cupom.description);

  function handleBack() {
    navigation.navigate("VisualizarFidelidade");
  }
  async function handleSubmit() {
    if (!description) {
      return ToastAndroid.show(
        "Digite a descrição do prêmio, por favor.",
        ToastAndroid.SHORT
      );
    }
    setLoadingAsync(true)
    try {
      await updateCupom({
        id: cupom.id,
        permitted_uses: cupom.permitted_uses,
        image: cupom.image,
        title: cupom.title,
        expiration_date: cupom.expiration_date,
        description: description,
        fidelity: cupom.fidelity,
        fidelity_level: cupom.fidelity_level,
        burgers_added: cupom.burgers_added,
      });
      await updateLevel({
        id: level.id,
        level: level.level,
        burgers_needed: numberOfBurgers,
      });
      ToastAndroid.show(
        "Cupom de fidelidade Alterado com sucesso",
        ToastAndroid.SHORT
      );
      navigation.navigate("VisualizarFidelidade");
    } catch (error) {
      setModalVisible(true)
      //Alert.alert("Erro ao Atualizar Nivel e Level" + error);
    }
    setLoadingAsync(false)
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
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden = {false} translucent barStyle={'dark-content'} backgroundColor= "#f2f2f2"/>

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(false);
        }}
      >
        <View style={styles.modalBackground2}>
            <View style={styles.modalLogout2}>
                <Text style={styles.textModal2}>Erro ao atualizar nível e level. Tente novamente!</Text>
                <TouchableOpacity
                    onPress={() => { setModalVisible(false) }}
                    style={styles.buttonModalCancelar2}
                >
                    <Text style={styles.textCancelar2}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

      <View style={styles.row}>
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="left" size={25} color="black" />
        </TouchableOpacity>
        {/* Fazer o fech de nivel */}
        <Text style={styles.title}>Nível {level.level}</Text>
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
          value={description}
          onChangeText={setDescription}
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
              marginTop: 10,
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
      {
        !loadingAsync
          ?
          <Button title="Editar" color="#1AAE9F" onPress={handleSubmit} />
          :
          <Button color={colors.shapeGray} title="Carregando!" />
      }
    </ScrollView>
  );
};
