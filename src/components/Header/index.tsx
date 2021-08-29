import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {styles} from './styles';

type Props = {
  color: string;
}

export default function Header({color}: Props) {
    return(
      //  <View style={styles.container}>
      //   <Feather
      //     name = "arrow-left" /*esse não é o nome do icone do protótipo, 
      //                           mas não consegui achar o nome certo na versão
      //                           que foi baixada (12.0.0)*/
      //     size={24}
      //     color = {color}
      //   ></Feather>
      //  </View>
      <View style={styles.container1}>
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>Olá,</Text>
            <Text style={styles.textHeaderName}>Marina!{'\n'}</Text>
            <Text style={styles.textSub}>Veja seus <Text style={styles.textSubBold}>CUPONS!</Text></Text>
        </View>
      </View>
       
    )
}