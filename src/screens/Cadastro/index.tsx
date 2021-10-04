import React, { useCallback } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../Cadastro/styles';
import CadastroFoto from '../../components/CadastroFoto';
import Button from '../../components/Button';
import colors from '../../styles/colors';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Cadastro({navigation}: Props){

  const handleConfirmacao = useCallback(() => {
    navigation.navigate('Confirmacao');
},[])

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
        placeholderTextColor={colors.shapeGray}
        style={styles.input}
        />

        <Text style={styles.titleInput}>
          CPF:
        </Text>
        <TextInput 
        placeholder= "XXX.XXX.XXX-XX"
        placeholderTextColor={colors.shapeGray} 
        style={styles.input}
        />

        <Text style={styles.titleInput}>
          Celular:
        </Text>
        <TextInput 
        placeholder= "(XX) X.XXXX-XXXX"
        placeholderTextColor={colors.shapeGray} 
        style={styles.input}
        />

        <Text style={styles.titleInput}>
          Senha:
        </Text>
        <TextInput 
        placeholder= "********"
        placeholderTextColor={colors.shapeGray} 
        style={styles.input}
        />

      </View>

      <Button
        color={colors.darkGray}
        title="Confirmar dados."
        onPress={handleConfirmacao}
      />

    </View>

    </TouchableWithoutFeedback>
  )
}