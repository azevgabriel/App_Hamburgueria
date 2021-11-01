import React, { useState } from "react";
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
  Modal,
  Pressable,
  StatusBar
} from "react-native";
import CadastroFoto from "../../components/CadastroFoto";
import BotaoTab from "../../components/BotãoTab";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../SeuPerfil/styles";
import { TextInputMask } from "react-native-masked-text";
import { useAuth } from "../../hooks/useAuth";
import { AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';

import * as ImagePicker from 'expo-image-picker';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function SeuPerfil({ navigation, }: Props) {
  const { update, user, loading } = useAuth();
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState('');
  const [Oldpassword, setOldPassword] = useState('');
  const [loadingAsync, setLoadingAsync] = useState(false);
  let telefoneField = null;
  const [modalVisible, setModalVisible] = useState(false);

  // Abre a câmera do dispositivo
  async function takeAndUploadPhotoAsync() {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
      return;
    }

    console.log(result);
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

  async function handleSubmit() {
    const data = {
      name: name,
      phone: phone,
      password: password, //ccriptografar
    };

    if (!name) {
      return ToastAndroid.show('Digite seu nome, por favor.', ToastAndroid.SHORT);
    }
    if (name.length > 100) {
      return ToastAndroid.show('Nome muito grande.', ToastAndroid.SHORT);
    }
    if (!phone) {
      return ToastAndroid.show('Digite o número do seu celular, por favor.', ToastAndroid.SHORT);
    }
    if (phone.length < 13) {
      return ToastAndroid.show('Telefone inválido.', ToastAndroid.SHORT);
    }
    if (!Oldpassword) {
      return ToastAndroid.show('Digite sua senha antiga, por favor.', ToastAndroid.SHORT);
    }
    if (!password) {
      return ToastAndroid.show('Digite sua senha, por favor.', ToastAndroid.SHORT);
    }
    if (password.length < 8) {
      return ToastAndroid.show('Senha muito pequena.', ToastAndroid.SHORT);
    }
    setLoadingAsync(true)
    try {
      await (update({

        id: user.id,
        image: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png",
        phone,
        name,
        password,
        burgers: user.burgers,
        cpf: user.cpf,
        level: user.level,
        type: user.type,

      }, Oldpassword));
      if (!loading) {
        ToastAndroid.show(
          "Usuário atualizado com sucesso",
          ToastAndroid.SHORT
        );
        navigation.navigate('ViewCupons');
      }
    } catch (error) {
      Alert.alert('Erro: ' + error)
    }
    setLoadingAsync(false)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar hidden = {false} translucent barStyle={'dark-content'} backgroundColor= "#f2f2f2"/>
        <View style={styles.box}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Seu Perfil</Text>
          </View>

          {
            user
              ?
              user.image && user.image != ""
                ?
                <View style={styles.userContainer}>
                  <Image source={{ uri: user.image }} style={{ width: 140, height: 140, }} />

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
              :
              <CadastroFoto />
          }

          <View style={styles.viewInput}>
            <Text style={styles.textInput}>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor={colors.shapeGray}
              onChangeText={setName}
              value={name}
            />

            <Text style={styles.textInput}>Celular:</Text>
            <View>
              <TextInputMask
                placeholder="Telefone"
                placeholderTextColor={colors.shapeGray}
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                }}
                onChangeText={setPhone}
                value={phone}
                keyboardType="phone-pad"
                returnKeyType="done"
                ref={(ref) => (telefoneField = ref)}
                style={styles.input}
              />
            </View>
            <Text style={styles.textInput}>Senha Antiga:</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={colors.shapeGray}
              onChangeText={setOldPassword}
            />
            <Text style={styles.textInput}>Senha Nova:</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor={colors.shapeGray}
              onChangeText={setPassword}
            />


          </View>
          <View style={styles.buttonContainer}>
            {
              !loadingAsync
                ?
                <Button
                  title="Atualizar dados."
                  color={colors.darkGray}
                  onPress={handleSubmit}
                />
                :
                <Button color={colors.shapeGray} title="Carregando!" />
            }
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
