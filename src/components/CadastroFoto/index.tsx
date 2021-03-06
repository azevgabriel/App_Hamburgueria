import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import avatarIcon from "../../assets/icon.png";

import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

export default function CadastroFoto(){

  const [modalVisible, setModalVisible] = useState(false);
  const [linkImage, setLinkImage] = useState('');

  // Abre a câmera do dispositivo
  async function takeAndUploadPhotoAsync() {
    const data = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    setModalVisible(false);

    if (data.cancelled) {
      return;
    }

    if(!data.uri){
      return;
    }

    console.log(data);

    setLinkImage(data.uri);

    await axios.post("http://localhost:3000/files", data);
  }

  // Escolher imagem da galeria
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Precisamos dessa permissão para prosseguir!');
      return;
    }

    const image = await ImagePicker.launchImageLibraryAsync({});

    setModalVisible(false);

    if(image.cancelled){
      return;
    }

    if(!image.uri){
      return;
    }

    console.log(image);

    setLinkImage(image.uri);

    await axios.post("http://localhost:3000/files", image);
    
  };

  return(
    <View style={styles.container}>

      <Image source={linkImage? {uri: linkImage} : avatarIcon} style={{ width: 140, height: 140, }} />

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
        <AntDesign name="plus" style={styles.iconPlus}/>
        </Text>
      </TouchableOpacity>

    </View>
  
  )
  
}