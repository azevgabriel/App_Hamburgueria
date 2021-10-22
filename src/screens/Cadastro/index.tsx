import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert
} from "react-native";
import { styles } from "../Cadastro/styles";
import { useNavigation } from "@react-navigation/native";
import CadastroFoto from "../../components/CadastroFoto";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import { TextInputMask } from "react-native-masked-text";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from "../../hooks/useAuth";
type Props = NativeStackScreenProps<RootStackParamList> ;

export default function Cadastro({ navigation}:Props) {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  let cpfField = null;
  let telefoneField = null;

	const { signUp,login, loading } = useAuth();


  async function handleSubmit() {
    const data = {
      name: name,
      cpf: cpf,
      phone: phone,
      password: password,
    };
    if (!name) {
      return ToastAndroid.show('Digite seu nome, por favor.',  ToastAndroid.SHORT);
    }
    if (name.length > 100) {
      return ToastAndroid.show('Nome muito grande.',  ToastAndroid.SHORT);
    }
    if (!cpf) {
      return ToastAndroid.show('Digite seu CPF, por favor.',  ToastAndroid.SHORT);
    }
    if (cpf.length < 14) {
      return ToastAndroid.show('CPF Inválido.',  ToastAndroid.SHORT);
    }else{
      const sumDigit = 
      parseInt(cpf[0])
      +parseInt(cpf[1])
      +parseInt(cpf[2])
      +parseInt(cpf[4])
      +parseInt(cpf[5])
      +parseInt(cpf[6])
      +parseInt(cpf[8])
      +parseInt(cpf[9])
      +parseInt(cpf[10])
      +parseInt(cpf[12])
      +parseInt(cpf[13])
      if(!((sumDigit.toString())[0] == (sumDigit.toString())[1]))
      return ToastAndroid.show('CPF inválido.',  ToastAndroid.SHORT);
    }
    if (!phone) {
      return ToastAndroid.show('Digite o número do seu celular, por favor.',  ToastAndroid.SHORT);
    }
    if (phone.length < 13) {
      return ToastAndroid.show('Telefone inválido.',  ToastAndroid.SHORT);
    }
    if (!password) {
      return ToastAndroid.show('Digite sua senha, por favor.',  ToastAndroid.SHORT);
    }
    if (password.length < 8) {
      return ToastAndroid.show('Senha muito pequena.',  ToastAndroid.SHORT);
    }
    if (password.length > 20) {
      return ToastAndroid.show('Senha muito grande.',  ToastAndroid.SHORT);
    }

    try {
			await (signUp({
        image: "",
        cpf,
        phone,
        name,
        password //criptografar
      }));
      if(!loading){

        setCpf('')
        setName('')
        setPhone('')
        setPassword('')
        navigation.navigate('ViewCupons');
      }
		} catch (error) {
			Alert.alert('Erro: '+error)
		}
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.viewTitle}>
          <Text style={styles.text}>Faça seu cadastro!</Text>
        </View>

        <View style={styles.viewPhoto}>
          <CadastroFoto />
        </View>

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Nome:</Text>
          <TextInput
            placeholder="Nome"
            placeholderTextColor={colors.shapeGray}
            value={name}
            style={styles.input}
            onChangeText={(value) => setName(value)}
            maxLength={100}
          />

          <View>
          <Text style={styles.titleInput}>CPF:</Text>
            <TextInputMask
              placeholder="CPF"
              placeholderTextColor={colors.shapeGray}
              type={"cpf"}
              value={cpf}
              onChangeText={(value) => {
                setCpf(value);
              }}
              keyboardType="number-pad"
              returnKeyType="done"
              ref={(ref) => (cpfField = ref)}
              style={styles.input}
            />
          </View>

          <Text style={styles.titleInput}>Celular:</Text>
          <View>
            <TextInputMask
              placeholder="Telefone"
              placeholderTextColor={colors.shapeGray}
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
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

          <Text style={styles.titleInput}>Senha:</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor={colors.shapeGray}
            value={password}
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            maxLength={50}
          />
        </View>

        <View style={styles.viewButton}>
          <Button
            color={colors.darkGray}
            title="Confirmar dados."
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
