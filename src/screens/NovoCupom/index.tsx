import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
  Modal,
}
  from "react-native";
import Voltar from "../../components/Voltar";

import { styles } from "./styles";
import CadastroFoto from "../../components/CadastroFoto";
import colors from "../../styles/colors";

import Button from "../../components/Button";
import { ObjectCupons } from "../../global/props";
import { AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';

import * as ImagePicker from 'expo-image-picker';
import { useAuth } from "../../hooks/useAuth";
import { TextInputMask } from "react-native-masked-text";

type Props = NativeStackScreenProps<RootStackParamList>;
export default function NovoCupom({ navigation, route, ...rest }: Props) {
  const { newCupom, updateCupom } = useAuth();
  const { cupom } = route.params as ObjectCupons;
  const [titulo, setTitulo] = useState(cupom ? cupom.title : '');
  const [description, setDescription] = useState(cupom ? cupom.description : '');
  const [datamax, setDataMax] = useState(cupom ? cupom.expiration_date : '');
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingAsync, setLoadingAsync] = useState(false);

  const [hamburguinhos, setHamburguinhos] = useState(0);
  const [usos, setUsos] = useState(0);

  useEffect(() => {
    if(cupom != undefined){
      if(cupom.permitted_uses != undefined){
        setUsos(cupom.permitted_uses)
      }
      if(cupom.burgers_added != undefined){
        setHamburguinhos(cupom.burgers_added)
      }
    }
  }, [])

  function handleIncreaseHamb() {
    setHamburguinhos(() => hamburguinhos + 1)
  }

  function handleDecreaseHamb() {
    if (hamburguinhos > 0) {
      setHamburguinhos(() => hamburguinhos - 1)
    }
  }

  function handleIncreaseUsos() {
    setUsos(() => usos + 1)
  }

  function handleDecreaseUsos() {
    if (usos > 0) {
      setUsos(() => usos - 1)
    }
  }


  // Abre a câmera do dispositivo
  async function takeAndUploadPhotoAsync() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
      return;
    }
  }

  // Escolher imagem da galeria
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Precisamos dessa permissão para prosseguir!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    console.log(pickerResult);
  };

  function handleBack() {
    navigation.navigate('ViewCupons')
  }

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
    setLoadingAsync(true)
    if (!cupom) {
      try {
        await (newCupom({
          permitted_uses: usos,// Mudar para o valor
          image: "https://img.cybercook.com.br/receitas/664/hamburguer-de-linguica-1-840x480.jpeg",//pegar image
          title: titulo,
          expiration_date: datamax,
          description: description,
          fidelity: false,
          burgers_added: hamburguinhos// Mudar para o valor
        }));
        ToastAndroid.show(
          "Cupom cadastrado com sucesso",
          ToastAndroid.SHORT
        );
        navigation.navigate('ViewCupons')
      } catch (error) {
        Alert.alert('Erro ao Criar Cupom' + error)
      }
    } else {
      try {
        await (updateCupom({
          id: cupom.id,
          permitted_uses: usos,
          image: "https://img.cybercook.com.br/receitas/664/hamburguer-de-linguica-1-840x480.jpeg",//pegar image
          title: titulo,
          expiration_date: datamax,
          description: description,
          fidelity: cupom.fidelity,
          fidelity_level: cupom.fidelity_level,
          burgers_added: hamburguinhos
        }));
        ToastAndroid.show(
          "Cupom alterado com sucesso",
          ToastAndroid.SHORT
        );
        navigation.navigate('ViewCupons')
      } catch (error) {
        Alert.alert('Erro ao Atualizar Cupom' + error)
      }
    }
    setLoadingAsync(false)

  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.back}>
          <Voltar color="black" onPress={handleBack} />
        </View>
        <View style={styles.components}>
          {
            cupom
              ?
              <View style={styles.userContainer}>
                <Image source={{ uri: cupom.image }} style={{ width: 140, height: 140, }} />

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Pressable
                        style={styles.buttonChoose}
                        onPress={takeAndUploadPhotoAsync}
                      >
                        <Text>Abrir câmera</Text>
                      </Pressable>
                      <Pressable
                        style={styles.buttonChoose}
                        onPress={openImagePickerAsync}
                      >
                        <Text>Escolha da galeria</Text>
                      </Pressable>
                      <Pressable
                        style={styles.buttonChoose}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text>Cancelar</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>

                <TouchableOpacity
                  style={styles.plus}
                  activeOpacity={0.8}
                  onPress={() => setModalVisible(true)}
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
            onChangeText={setTitulo}
            value={titulo}
            maxLength={50}
          />

          <Text style={styles.titleInput}>Descrição:</Text>
          <TextInput
            placeholder="Utilize até..."
            placeholderTextColor={colors.borderGray}
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            maxLength={100}
          />

          <View style={styles.containerSetter}>
            <View style={styles.title}>
              <Text>
                Hamburguinhos 🍔
              </Text>
            </View>
            <View style={styles.setterContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleDecreaseHamb}
                activeOpacity={0.6}
              >
                <Text
                  style={styles.buttonText}
                >-</Text>
              </TouchableOpacity>
              <View style={styles.displayNumber}>
                <Text style={styles.displayNumberText}>{hamburguinhos}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={handleIncreaseHamb}
                {...rest}
              >
                <Text
                  style={styles.buttonText}
                >+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerSetter}>
            <View style={styles.title}>
              <Text>
                Número de usos
              </Text>
            </View>
            <View style={styles.setterContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleDecreaseUsos}
                activeOpacity={0.6}
              >
                <Text
                  style={styles.buttonText}
                >-</Text>
              </TouchableOpacity>
              <View style={styles.displayNumber}>
                <Text style={styles.displayNumberText}>{usos}</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={handleIncreaseUsos}
                {...rest}
              >
                <Text
                  style={styles.buttonText}
                >+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.titleInput}>Data máxima</Text>
          <TextInputMask
            placeholder="Data"
            placeholderTextColor={colors.shapeGray}
            type={"datetime"}
            options={{
              format: 'DD/MM/AAAA'
            }}
            value={datamax}
            onChangeText={setDataMax}
            keyboardType="phone-pad"
            returnKeyType="done"
            style={styles.input}
          />
          <View style={{ marginTop: 5 }}>
            {
              !loadingAsync
                ?
                <Button color="#32cd32" title="Cadastrar" onPress={handleSubmit} />
                :
                <Button color={colors.shapeGray} title="Carregando!" />
            }
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
