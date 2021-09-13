import React from 'react';
import { View, Text } from 'react-native';

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

          </View>
          <View style={styles.text}>
              <Text style={[styles.textoCard, {marginBottom: 10}]}>🍔: {hamburguinhos}</Text>
              <Text style={styles.textoCard}>{texto}</Text>
          </View>
         </View>
       </View>
    )
}