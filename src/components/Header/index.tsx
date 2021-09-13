import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';

export default function Header() {
    return(
      <View style={styles.container1}>
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>Olá,</Text>
            <Text style={styles.textHeaderName}>Marina!{'\n'}</Text>
            <Text style={styles.textSub}>Veja seus <Text style={styles.textSubBold}>CUPONS!</Text></Text>
        </View>
      </View>
       
    )
}