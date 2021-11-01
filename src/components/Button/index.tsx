import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text
} from 'react-native';

import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps{        //props do botao
    color: string;                                          //extends pega as propriedades do touchableOpacity
    title: string;
}


export default function Button({title, color, ...rest}:ButtonProps) {
    return(
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: color}]}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}