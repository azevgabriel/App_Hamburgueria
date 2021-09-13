import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { CupomProps } from '../../global/props';


import { styles } from './styles';


export function Cupom({id, usosPermitidos, usosRestantes, UrlImageCupom, title, validade, ...rest}:CupomProps){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <View style={styles.hamburguinhos}>
            <Text style={styles.HamIconText}>
                🍔 {usosPermitidos}
            </Text>
            <Text style={styles.HamIconText}>
                x{usosRestantes}
            </Text>
        </View>
        <View style={styles.ImageView}>
            <Image style={styles.image} source={{uri: UrlImageCupom}}/>
        </View>
        <View style={styles.titleText}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        <View style={styles.bodyText}>
            <Text style={styles.day}>
                até dia {validade}
            </Text>
        </View>
    </TouchableOpacity>
  );
}