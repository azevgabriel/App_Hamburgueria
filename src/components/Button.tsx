import React from 'react';
import {View, 
    TouchableOpacity, 
    TouchableOpacityProps,
    StyleSheet,
    Text
} from 'react-native';

import colors from '../styles/colors'; //importa arquivo de cores padrões do projeto


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

const styles = StyleSheet.create({
    button:{
        height: '10%',
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: colors.white,
        fontSize: 20,
    }
})
