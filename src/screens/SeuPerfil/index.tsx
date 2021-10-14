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
  TouchableOpacity
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
  const {user} = useAuth()
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState(user.password);
  let telefoneField = null;

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
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
      password: password,
    };

    if (!name) {
      return ToastAndroid.show('Digite seu nome, por favor.', ToastAndroid.SHORT);
    }
    if (!phone) {
      return ToastAndroid.show('Digite o número do seu celular, por favor.', ToastAndroid.SHORT);
    }
    if (!password) {
      return ToastAndroid.show('Digite sua senha, por favor.', ToastAndroid.SHORT);
    }
    navigation.navigate('ViewCupons')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>Seu Perfil</Text>

            {
            user
              ?
              <View style={styles.userContainer}>
                <Image source={{ uri: user.image }} style={{ width: 140, height: 140, }} />
                <TouchableOpacity
                  style={styles.plus}
                  activeOpacity={0.8}
                  onPress={openImagePickerAsync}
                >
                  <Text>
                    <AntDesign name="plus" style={styles.iconPlus} />
                  </Text>
                </TouchableOpacity>
              </View>

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
                    dddMask: "(55) ",
                  }}
                  onChangeText={setPhone}
                  value={phone}
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
                onChangeText={setPassword}
              />

              <Button
                title="Atualizar dados."
                color={colors.darkGray}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
