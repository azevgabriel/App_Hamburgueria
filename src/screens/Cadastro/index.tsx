import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Modal,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Image
} from "react-native";
import { styles } from "../Cadastro/styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CadastroFoto from "../../components/CadastroFoto";
import Button from "../../components/Button";
import colors from "../../styles/colors";
import avatarIcon from "../../assets/icon.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import { TextInputMask } from "react-native-masked-text";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from "../../hooks/useAuth";
type Props = NativeStackScreenProps<RootStackParamList>;

export default function Cadastro({ navigation }: Props) {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [loadingAsync, setLoadingAsync] = useState(false);
  let cpfField = null;
  let telefoneField = null;

  const { signUp, login, loading } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [imageUser, setImageUser] = useState("");

  async function handleSubmit() {
    const data = {
      name: name,
      cpf: cpf,
      phone: phone,
      password: password,
    };
    if (!name) {
      return ToastAndroid.show('Digite seu nome, por favor.', ToastAndroid.SHORT);
    }
    if (name.length > 100) {
      return ToastAndroid.show('Nome muito grande.', ToastAndroid.SHORT);
    }
    if (!cpf) {
      return ToastAndroid.show('Digite seu CPF, por favor.', ToastAndroid.SHORT);
    }
    if (cpf.length < 14) {
      return ToastAndroid.show('CPF Inválido.', ToastAndroid.SHORT);
    } else {
      const sumDigit =
      parseInt(cpf[0])*1
      + parseInt(cpf[1])*2
      + parseInt(cpf[2])*3
      + parseInt(cpf[4])*4
      + parseInt(cpf[5])*5
      + parseInt(cpf[6])*6
      + parseInt(cpf[8])*7
      + parseInt(cpf[9])*8
      + parseInt(cpf[10])*9

      const restoCpf = sumDigit % 11
      const digitoVerificadorCpf = restoCpf >= 10 ? restoCpf.toString()[1] : restoCpf.toString()[0] 

      const sumDigitParteDois =
      parseInt(cpf[0])*0
      + parseInt(cpf[1])*1
      + parseInt(cpf[2])*2
      + parseInt(cpf[4])*3
      + parseInt(cpf[5])*4
      + parseInt(cpf[6])*5
      + parseInt(cpf[8])*6
      + parseInt(cpf[9])*7
      + parseInt(cpf[10])*8
      + parseInt(digitoVerificadorCpf)*9
        
      const restoCpfParte2 = sumDigitParteDois % 11
      const digitoVerificadorCpfParte2 = restoCpfParte2 >= 10 ? restoCpfParte2.toString()[1] : restoCpfParte2.toString()[0] 

      if((digitoVerificadorCpf != cpf[12]) || (digitoVerificadorCpfParte2 != cpf[13]))
        return ToastAndroid.show('CPF inválido.', ToastAndroid.SHORT);

    }
    if (!phone) {
      return ToastAndroid.show('Digite o número do seu celular, por favor.', ToastAndroid.SHORT);
    }
    if (phone.length < 13) {
      return ToastAndroid.show('Telefone inválido.', ToastAndroid.SHORT);
    }
    if (!password) {
      return ToastAndroid.show('Digite sua senha, por favor.', ToastAndroid.SHORT);
    }
    if (password.length < 8) {
      return ToastAndroid.show('Senha muito pequena.', ToastAndroid.SHORT);
    }
    if (password.length > 20) {
      return ToastAndroid.show('Senha muito grande.', ToastAndroid.SHORT);
    }
    setLoadingAsync(true)
    try {
      await (signUp({
        image: imageUser,
        cpf,
        phone,
        name,
        password //criptografar
      }));
      if (!loading) {
        setCpf('')
        setName('')
        setPhone('')
        setPassword('')
        setImageUser('')
        ToastAndroid.show(
          "Usuário Cadastrado com sucesso",
          ToastAndroid.SHORT
        );
        navigation.navigate('WelcomeAgain');
      }
    } catch (error) {
      setModalVisible(true)
    }
    setLoadingAsync(false)
  }

  function getImage() {
    if (imageUser == 'Avatar1') {
      return avatar1;
    } else if (imageUser == 'Avatar2') {
      return avatar2;
    } else if (imageUser == 'Avatar3') {
      return avatar3;
    } else if (imageUser == 'Avatar4') {
      return avatar4;
    }
    return avatarIcon;

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar hidden={false} translucent barStyle={'dark-content'} backgroundColor="#f2f2f2" />
        <View style={styles.viewTitle}>
          <Text style={styles.text}>Faça seu cadastro!</Text>
        </View>

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
              <Text style={styles.textModal2}>Erro ao fazer cadastro. Tente novamente!</Text>
              <TouchableOpacity
                onPress={() => { setModalVisible(false) }}
                style={styles.buttonModalCancelar2}
              >
                <Text style={styles.textCancelar2}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.viewPhoto}>
          <View style={styles.userContainer}>
            <Image source={getImage()} style={{ width: 140, height: 140, }} />
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                setModalVisible(!modalVisible2);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setImageUser('Avatar1');
                        setModalVisible2(!modalVisible2);
                      }}
                    >
                      <Image source={avatar1} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setImageUser('Avatar2');
                        setModalVisible2(!modalVisible2);
                      }}
                    >
                      <Image source={avatar2} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setImageUser('Avatar3');
                        setModalVisible2(!modalVisible2);
                      }}
                    >
                      <Image source={avatar3} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setImageUser('Avatar4');
                        setModalVisible2(!modalVisible2);
                      }}
                    >
                      <Image source={avatar4} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>
                  <Pressable
                    style={styles.buttonChoose}
                    onPress={() => setModalVisible2(!modalVisible2)}
                  >
                    <Text>Cancelar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <TouchableOpacity
              style={styles.plus}
              activeOpacity={0.8}
              onPress={() => setModalVisible2(true)}
            >
              <Text>
                <AntDesign name="plus" style={styles.iconPlus} />
              </Text>
            </TouchableOpacity>

          </View>
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
          {
            !loadingAsync
              ?
              <Button
                color={colors.darkGray}
                title="Confirmar dados."
                onPress={handleSubmit}
              />
              :
              <Button color={colors.shapeGray} title="Carregando!" />
          }
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
