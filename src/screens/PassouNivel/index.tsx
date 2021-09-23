import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';

import icon from '../../assets/nivel.png';
import Button from '../../components/Button';

export default function PassouNivel(){
  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textoNivel}>
          Parabéns! {`\n`}
          Você passou de {`\n`}
          nível!
        </Text>
      </View>
      <View style={styles.recompensaContainer} >
        <Image 
          source={icon}
          resizeMode='contain'
          style={styles.icon}
        />
        <Text style={styles.descricao}>
          Veja sua recompensa em {`\n`}
          fidelidades.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          color={colors.darkGray}
          title="Avançar"
        />
      </View>
    </View> 
  );
}