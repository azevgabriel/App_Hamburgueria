import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';

export default function CadastroFoto(){

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
      <TouchableOpacity 
      style={styles.plus}
      activeOpacity={0.8}
      onPress={openImagePickerAsync}
      >
        <Text>
        <AntDesign name="plus" style={styles.iconPlus}/>
        </Text>
      </TouchableOpacity>
    </View>
  
  )
  
}