import React, { useCallback, useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from '../Cadastro/styles';
import CadastroFoto from '../../components/CadastroFoto';
import Button from '../../components/Button';
import colors from '../../styles/colors';
// import AsyncStorage from "@react-native-async-storage/async-storage";


import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Cadastro({navigation}: Props){

  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");

  const handleConfirmacao = useCallback(() => {
    navigation.navigate('Confirmacao');
  },[])

  async function handleSubmit() {

    const data = {
      name: name,
      cpf: cpf,
      celular: celular,
      senha: senha
    }
    
    if (!name) {
      return Alert.alert("Digite seu nome, por favor.");
    }
    if (!cpf) {
      return Alert.alert("Digite seu cpf, por favor.");
    }
    if (!celular) {
      return Alert.alert("Digite o número do seu celular, por favor.");
    }
    if (!senha) {
      return Alert.alert("Digite sua senha, por favor.");
    }

    //chamar funcao de dentro do authContext para cadastro (signUp)

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>Faça seu cadastro!</Text>

        <CadastroFoto />

        <View style={styles.viewInput}>
          <Text style={styles.titleInput}>Nome:</Text>
          <TextInput
            placeholder="Nome"
            placeholderTextColor={colors.shapeGray}
            style={styles.input}
            onChangeText={(value) => setName(value)}
          />

          <Text style={styles.titleInput}>CPF:</Text>
          <TextInput
            placeholder="XXX.XXX.XXX-XX"
            placeholderTextColor={colors.shapeGray}
            style={styles.input}
            onChangeText={(value) => setCPF(value)}
          />

          <Text style={styles.titleInput}>Celular:</Text>
          <TextInput
            placeholder="(XX) X.XXXX-XXXX"
            placeholderTextColor={colors.shapeGray}
            style={styles.input}
            onChangeText={(value) => setCelular(value)}
          />

          <Text style={styles.titleInput}>Senha:</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor={colors.shapeGray}
            style={styles.input}
            onChangeText={(value) => setSenha(value)}
          />
        </View>

        <Button
          color={colors.darkGray}
          title="Confirmar dados."
          onPress={handleConfirmacao}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
