import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text
} from 'react-native';

import {styles} from './styles';

interface ButtonProps extends TouchableOpacityProps{        //props do botao                                        //extends pega as propriedades do touchableOpacity
    title: string;
}


export default function BotaoTab({title, ...rest}:ButtonProps) {
    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}