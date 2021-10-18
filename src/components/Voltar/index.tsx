import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {styles} from './styles';

interface Props extends TouchableOpacityProps{
  color: string;
}

export default function Voltar({color, ...rest}: Props) {
    return(
        <TouchableOpacity 
          style={styles.container}
          {...rest}
        >
            <AntDesign name="left" size={25} color={color} />
        </TouchableOpacity>
    )
}