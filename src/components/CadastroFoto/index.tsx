import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function CadastroFoto(){
  return(
    <View style={styles.container}>
      <FontAwesome name="user-circle" style={styles.user}/>
      <TouchableOpacity 
      style={styles.plus}
      activeOpacity={0.8}
      >
        <Text>
        <AntDesign name="plus" style={styles.iconPlus} />
        </Text>
      </TouchableOpacity>
    </View>
  
  )
  
}