import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CadastroFoto from '../../components/CadastroFoto';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import { styles } from '../SeuPerfil/styles';

export default function SeuPerfil(){
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>

      <Text style={styles.title}>
        Seu Perfil
      </Text>

      <CadastroFoto />

      <View style={styles.viewInput}>

        <Text style={styles.textInput}>
          Nome:
        </Text>
        <TextInput 
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor={colors.shapeGray}
        />

        <Text style={styles.textInput}>
          Celular:
        </Text>
        <TextInput 
        style={styles.input}
        placeholder="(XX) X.XXXX-XXXX"
        placeholderTextColor={colors.shapeGray}
        />

        <Text style={styles.textInput}>
          Senha:
        </Text>
        <TextInput 
        style={styles.input}
        placeholder="********"
        placeholderTextColor={colors.shapeGray}
        />

        <Button 
          title="Atualizar dados."
          color={colors.darkGray}
        />

      </View>

    </View>

    </TouchableWithoutFeedback>
  )
}
