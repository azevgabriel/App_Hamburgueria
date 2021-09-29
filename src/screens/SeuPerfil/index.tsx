import React from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CadastroFoto from '../../components/CadastroFoto';
import BotaoTab  from '../../components/BotãoTab';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import { styles } from '../SeuPerfil/styles';

export default function SeuPerfil(){
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>

      <View style={styles.box}>
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

      <View style={styles.tab}>
        <BotaoTab 
            title={"🏆 Fidelidade"}
            style={styles.spaceTab}
        />
        <View style={styles.divisor} />
        <BotaoTab 
            title={"😎 Perfil"}
            style={styles.spaceTab}
        />
      </View>

    </View>

    </TouchableWithoutFeedback>
  )
}
