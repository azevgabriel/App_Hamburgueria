import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {styles} from './styles';

type Props = {
  color: string;
}

export function Header({color}: Props) {
    return(
       <View style={styles.container}>
        <Feather
          name = "arrow-left" /*esse não é o nome do icone do protótipo, 
                                mas não consegui achar o nome certo na versão
                                que foi baixada (12.0.0)*/
          size={24}
          color = {color}
        ></Feather>
       </View>
    )
}