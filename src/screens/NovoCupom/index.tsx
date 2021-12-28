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
  StatusBar
}
  from "react-native";
import Voltar from "../../components/Voltar";

import { styles } from "./styles";
import colors from "../../styles/colors";
import Button from "../../components/Button";
import { ObjectCupons } from "../../global/props";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import icon1 from "../../assets/cuponsImages/icon1.jpg";
import icon2 from "../../assets/cuponsImages/icon2.jpg";
import icon3 from "../../assets/cuponsImages/icon3.jpg";
import icon4 from "../../assets/cuponsImages/icon4.jpg";
import icon5 from "../../assets/cuponsImages/icon5.jpg";
import icon6 from "../../assets/cuponsImages/icon6.jpg";
import icon7 from "../../assets/cuponsImages/icon7.jpg";
import icon8 from "../../assets/cuponsImages/icon8.jpg";
import icon9 from "../../assets/cuponsImages/icon9.png";
import icon10 from "../../assets/cuponsImages/icon10.jpg";
import icon11 from "../../assets/cuponsImages/icon11.png";
import icon12 from "../../assets/cuponsImages/icon12.png";
import icon13 from "../../assets/cuponsImages/icon13.jpg";
import icon14 from "../../assets/cuponsImages/icon14.jpg";
import icon15 from "../../assets/cuponsImages/icon15.png";
import icon16 from "../../assets/cuponsImages/icon16.png";
import icon17 from "../../assets/cuponsImages/icon17.jpg";
import icon18 from "../../assets/cuponsImages/icon18.png";
import icon19 from "../../assets/cuponsImages/icon19.jpg";
import icon20 from "../../assets/cuponsImages/icon20.jpg";
import icon21 from "../../assets/cuponsImages/icon21.jpg";
import icon22 from "../../assets/cuponsImages/icon22.jpg";
import icon23 from "../../assets/cuponsImages/icon23.png";
import icon24 from "../../assets/cuponsImages/icon24.jpg";
import icondefault from "../../assets/cuponsImages/icondefault.jpg";

//import * as ImagePicker from 'expo-image-picker';
import { useAuth } from "../../hooks/useAuth";
import { TextInputMask } from "react-native-masked-text";
//import axios from "axios";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function NovoCupom({ navigation, route, ...rest }: Props) {

  const { newCupom, updateCupom } = useAuth();
  const { cupom } = route.params as ObjectCupons;
  const [titulo, setTitulo] = useState(cupom ? cupom.title : '');
  const [description, setDescription] = useState(cupom ? cupom.description : '');
  const [datamax, setDataMax] = useState(cupom ? cupom.expiration_date : '');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [loadingAsync, setLoadingAsync] = useState(false);
  const [cupomimage, setcupomimage] = useState(cupom ? cupom.image : 'icondefault');
  const [hamburguinhos, setHamburguinhos] = useState(0);
  const [usos, setUsos] = useState(0);

  useEffect(() => {
    if (cupom != undefined) {
      if (cupom.permitted_uses != undefined) {
        setUsos(cupom.permitted_uses)
      }
      if (cupom.burgers_added != undefined) {
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


  // // Abre a câmera do dispositivo
  // async function takeAndUploadPhotoAsync() {
  //   const data = await ImagePicker.launchCameraAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //   });

  //   setModalVisible(false);

  //   if (data.cancelled) {
  //     return;
  //   }

  //   if (!data.uri) {
  //     return;
  //   }

  //   console.log(data);

  //   setLinkImage(data.uri);

  //   await axios.post("http://localhost:3000/files", data);
  // }

  // // Escolher imagem da galeria
  // let openImagePickerAsync = async () => {
  //   let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     alert('Precisamos dessa permissão para prosseguir!');
  //     return;
  //   }

  //   const data = await ImagePicker.launchImageLibraryAsync({});

  //   setModalVisible(false);
  function handleBack() {
    navigation.navigate('ViewCupons')
  }

  async function handleSubmit() {
    console.log(cupomimage)
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
          image: cupomimage,
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
        setModalVisible2(true)
        //Alert.alert('Erro ao Criar Cupom' + error)
      }
    } else {
      try {
        await (updateCupom({
          id: cupom.id,
          permitted_uses: usos,
          image: cupomimage,
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
        setModalVisible3(true)
        //Alert.alert('Erro ao Atualizar Cupom' + error)
      }
    }
    setLoadingAsync(false)

  }
  function getImage() {
    switch (cupomimage) {
      case 'icon1':
        return icon1;
        break
      case 'icon2':
        return icon2;
        break
      case 'icon3':
        return icon3;
        break
      case 'icon4':
        return icon4;
        break
      case 'icon5':
        return icon5;
        break
      case 'icon6':
        return icon6;
        break
      case 'icon7':
        return icon7;
        break
      case 'icon8':
        return icon8;
        break
      case 'icon9':
        return icon9;
        break
      case 'icon10':
        return icon10;
        break
      case 'icon11':
        return icon11;
        break
      case 'icon12':
        return icon12;
        break
      case 'icon13':
        return icon13;
        break
      case 'icon14':
        return icon14;
        break
      case 'icon15':
        return icon15;
        break
      case 'icon16':
        return icon16;
        break
      case 'icon17':
        return icon17;
        break
      case 'icon18':
        return icon18;
        break
      case 'icon19':
        return icon19;
        break
      case 'icon20':
        return icon20;
        break
      case 'icon21':
        return icon21;
        break
      case 'icon22':
        return icon22;
        break
      case 'icon23':
        return icon23;
        break
      case 'icon24':
        return icon24;
        break
      default:
        return icondefault;
    }

  }
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar hidden={false} translucent barStyle={'dark-content'} backgroundColor="#f2f2f2" />

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(false);
          }}
        >
          <View style={styles.modalBackground2}>
            <View style={styles.modalLogout2}>
              <Text style={styles.textModal2}>Erro ao criar cupom. Tente novamente!</Text>
              <TouchableOpacity
                onPress={() => { setModalVisible2(false) }}
                style={styles.buttonModalCancelar2}
              >
                <Text style={styles.textCancelar2}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            setModalVisible3(false);
          }}
        >
          <View style={styles.modalBackground2}>
            <View style={styles.modalLogout2}>
              <Text style={styles.textModal2}>Erro ao atualizar cupom. Tente novamente!</Text>
              <TouchableOpacity
                onPress={() => { setModalVisible3(false) }}
                style={styles.buttonModalCancelar2}
              >
                <Text style={styles.textCancelar2}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.back}>
          <Voltar color="black" onPress={handleBack} />
        </View>
        <View style={styles.components}>
          <View style={styles.userContainer}>
            {
              cupom
                ?
                <Image source={getImage()} style={{ width: 140, height: 140, }} />
                :
                <Image source={getImage()} style={{ width: 140, height: 140, }} />
            }

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon1');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon1} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon2');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon2} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon3');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon3} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setcupomimage('icon4');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon4} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon5');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon5} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon6');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon6} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon7');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon7} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setcupomimage('icon8');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon8} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon9');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon9} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon10');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon10} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon11');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon11} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setcupomimage('icon12');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon12} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon13');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon13} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon14');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon14} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon15');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon15} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setcupomimage('icon16');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon16} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon17');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon17} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon18');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon18} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon19');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon19} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setcupomimage('icon20');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon20} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon21');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon21} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon22');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon22} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingRight: 15 }}
                      onPress={() => {
                        setcupomimage('icon23');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon23} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setcupomimage('icon24');
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Image source={icon24} style={{ width: 70, height: 70, borderWidth: 2, borderRadius: 50, borderColor: colors.darkGray }} />
                    </TouchableOpacity>
                  </View>
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
