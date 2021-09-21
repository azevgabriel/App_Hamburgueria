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


export function Cupom({
    usos_permitidos,
    url_image_cupom,
    title,
    data_validade,
    ...rest}: CupomProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.hamburguinhos}>
                <Text style={styles.HamIconText}>
                    🍔 {usos_permitidos}
                </Text>
                <Text style={styles.HamIconText}>
                    x3
                </Text>
            </View>
            <View style={styles.ImageView}>
                <Image style={styles.image} source={{ uri: url_image_cupom }} />
            </View>
            <View style={styles.titleText}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.bodyText}>
                <Text style={styles.day}>
                    até dia {data_validade}
                </Text>
            </View>
        </TouchableOpacity>
    );
}