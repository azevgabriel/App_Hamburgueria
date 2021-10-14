import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {styles} from './styles';

interface Props extends TouchableOpacityProps {
  nivel: number;
  hamburguinhos: number;
  texto: string;
  checked: boolean;
}

export function Fidelidade({nivel, hamburguinhos, texto, checked, ...rest}: Props) {
    return(
      <TouchableOpacity {...rest}>
       <View style={styles.container}>
         <View style={styles.aside}>
          <Text style={styles.textoNivel}>Nível {nivel}</Text>
         </View>
         <View style={!checked?styles.mainGray:styles.mainOrange}>
          <View style={styles.image}>
          <Image source={require('../../assets/adaptive-icon2.png')} style={{width: 30, height: 30}} resizeMode="contain"/>
          </View>
          <View style={styles.text}>
              <Text style={[!checked?styles.textoCardGray:styles.textoCardOrange, {marginBottom: 10}]}>🍔: {hamburguinhos}</Text>
              <Text style={!checked?styles.textoCardGray:styles.textoCardOrange}>Use seu primeiro cupom e ganhe um prêmio</Text>
          </View>
         </View>
       </View>
       </TouchableOpacity>
    )
}