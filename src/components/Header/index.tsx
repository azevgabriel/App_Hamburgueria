import React from 'react';
import { View, Text } from 'react-native';
import { UserProps } from '../../global/props';
import {styles} from './styles';

export default function Header( {name} : UserProps) {
  var name_lenght_small = true
  if(name){
      if(name.length >= 14){
          name_lenght_small = false;
      }
  }
    return(
      <View style={styles.container1}>
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>Olá,</Text>
            {
              name_lenght_small
              ?
              <Text style={styles.textHeaderName}>{name}!{'\n'}</Text>
              :
              <Text style={styles.textHeaderName_small}>{name}!{'\n'}</Text>
            }
            <Text style={styles.textSub}>Veja seus <Text style={styles.textSubBold}>CUPONS!</Text></Text>
        </View>
      </View>
       
    )
}