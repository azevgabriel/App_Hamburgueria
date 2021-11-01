import React, { useState } from "react";
import { View, Text, Image, TextInput, Alert, ToastAndroid, ScrollView, CheckBox, TouchableOpacity, Modal, StatusBar } from "react-native";
import { styles } from "./styles";
import colors from "../../styles/colors";
import icon from "../../assets/logo.png";
import Button from "../../components/Button";
import { TextInputMask } from "react-native-masked-text";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';
import { Load } from "../../components/Load";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function WelcomeAgain({ navigation }: Props) {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let cpfField = null;

  const { user, login } = useAuth();

  const handleSubmit = async () => {

    if (!cpf) {
      return ToastAndroid.show('Digite o CPF, por favor.', ToastAndroid.SHORT);
    }

    if (!password) {
      return ToastAndroid.show('Digite a Senha, por favor.', ToastAndroid.SHORT);
    }

    setLoading(true)
    try {
      await login({ cpf, senha: password }, isSelected);
      navigation.navigate('ViewCupons');
    } catch {
      setOpenModal(true);
    }
    setLoading(false)
  }

  return (
    <>
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={openModal}
      onRequestClose={() => {
          setOpenModal(false);
      }}
      >
        <View style={styles.modalBackground}>
            <View style={styles.modalLogout}>
                <Text style={styles.textModal}>Houve algum erro. Tente novamente!</Text>
                    <TouchableOpacity
                        onPress={() => {setOpenModal(false)}}
                        style={styles.buttonModalCancelar}
                    >
                        <Text style={styles.textCancelar}>Ok</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </Modal>

    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden = {false} translucent barStyle={'dark-content'} backgroundColor= "#f2f2f2"/>
      <View style={styles.logoContainer}>
        <Image source={icon} resizeMode="contain" style={styles.logo} />
        <Text style={styles.welcomeText}>Bem vindo(a)</Text>
        <Text style={styles.againText}>novamente! 🥰</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.inputText}>Admin</Text>
        </View>
        <Text style={styles.inputText}>Digite seu CPF abaixo:</Text>
        <TextInputMask
          placeholder="CPF"
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
        <Text style={styles.inputText}>Digite sua senha abaixo:</Text>
        <TextInput
          placeholder="*********"
          value={password}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          maxLength={50}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.ofertaText}>Aproveite nossas ofertas!</Text>
        {
          !loading
            ?
            <Button color={colors.darkGray} title="Bora!" onPress={handleSubmit} />
            :
            <Button color={colors.shapeGray} title="Carregando!"/>
        }
      </View>
    </ScrollView>
    </>
  );
}
