import React from 'react';
import { View, Text, Image } from 'react-native';

import {styles} from './styles';

type Props = {
  nivel: number;
  hamburguinhos: number;
  texto: string;
}

export function Fidelidade({nivel, hamburguinhos, texto}: Props) {
    return(
       <View style={styles.container}>
         <View style={styles.aside}>
          <Text style={styles.textoNivel}>Nível {nivel}</Text>
         </View>
         <View style={styles.mainGray}>
          <View style={styles.image}>
          <Image source={require('../../assets/adaptive-icon2.png')} style={{width: 30, height: 30}} resizeMode="contain"/>
          </View>
          <View style={styles.text}>
              <Text style={[styles.textoCardGray, {marginBottom: 10}]}>🍔: {hamburguinhos}</Text>
              <Text style={[styles.textoCardGray, {color: 'black'}]}>Use seu primeiro cupom e ganhe um prêmio</Text>
          </View>
         </View>
       </View>
    )
}