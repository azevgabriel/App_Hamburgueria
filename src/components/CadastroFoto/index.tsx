import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

export default function CadastroFoto(){

  const [modalVisible, setModalVisible] = useState(false);

  // Abre a câmera do dispositivo
  async function takeAndUploadPhotoAsync(){
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if(result.cancelled){
      return;
    }

    console.log(result);
  }

  // Escolher imagem da galeria
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
      alert('Precisamos dessa permissão para prosseguir!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    console.log(pickerResult);
  };

  return(
    <View style={styles.container}>

      <FontAwesome name="user-circle" style={styles.user}/>

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