import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {styles} from './styles';

type Props = {
  color: string;
}

export default function Voltar({color}: Props) {
    return(
      <View style={styles.container}>
        <TouchableOpacity>
                    <AntDesign name="caretleft" size={25} color={color} />
                </TouchableOpacity>
      </View>
    )
}