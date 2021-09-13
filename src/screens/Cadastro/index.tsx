import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../Cadastro/styles';
import CadastroFoto from '../../components/CadastroFoto';
import Button from '../../components/Button';
import colors from '../../styles/colors';

export default function Cadastro(){
  return(

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>

      <Text style={styles.text}>
      Faça seu cadastro!
      </Text>

      <CadastroFoto />

      <View style={styles.viewInput}>

      <Text style={styles.titleInput}>
        Nome:
      </Text>
      <TextInput 
      placeholder= "Nome"
      placeholderTextColor={colors.borderGray}
      style={styles.input}
      />

      <Text style={styles.titleInput}>
        CPF:
      </Text>
      <TextInput 
      placeholder= "XXX.XXX.XXX-XX"
      placeholderTextColor={colors.borderGray} 
      style={styles.input}
      />

      <Text style={styles.titleInput}>
        Celular:
      </Text>
      <TextInput 
      placeholder= "(XX) X.XXXX-XXXX"
      placeholderTextColor={colors.borderGray} 
      style={styles.input}
      />

      <Text style={styles.titleInput}>
        Senha:
      </Text>
      <TextInput 
      placeholder= "********"
      placeholderTextColor={colors.borderGray} 
      style={styles.input}
      />

      </View>

      <Button
      color={colors.darkGray}
      title={'Confirmar dados.'}
      />

    </View>

    </TouchableWithoutFeedback>
  )
}