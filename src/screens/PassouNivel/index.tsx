import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';

import icon from '../../assets/nivel.png';
import Button from '../../components/Button';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function PassouNivel({ navigation }: Props){
  function handleNext(){
    navigation.navigate('FidelidadeTela')
  }
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
          onPress={handleNext}
        />
      </View>
    </View> 
  );
}