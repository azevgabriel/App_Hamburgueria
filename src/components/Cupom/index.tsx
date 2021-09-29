import React, { useState } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { CupomProps, UserCupomProps } from '../../global/props';


import { styles } from './styles';

interface Cupom_UserCupomProps extends TouchableOpacityProps{
    user_cupom:UserCupomProps;
    cupom: CupomProps;
}

export function Cupom({user_cupom, cupom, ...rest}:Cupom_UserCupomProps) {

    var title_lenght_small = true
    if(cupom.title){
        if(cupom.title.length >= 18){
            title_lenght_small = false;
        }
    }
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.hamburguinhos}>
                <Text style={styles.HamIconText}>
                    🍔 {cupom.hamburguinhos_fornecidos }
                </Text>
                <Text style={styles.HamIconText}>
                    x{user_cupom.usos_restantes}
                </Text>
            </View>
            <View style={styles.ImageView}>
                <Image style={styles.image} source={{ uri: cupom.url_image_cupom }} />
            </View>
            <View style={styles.titleText}>
                {
                    title_lenght_small
                    ?
                    <Text style={styles.title}>
                    {cupom.title}
                    </Text>
                    :
                    <Text style={styles.title_small}>
                    {cupom.title}
                    </Text>
                }
                
            </View>
            <View style={styles.bodyText}>
                <Text style={styles.day}>
                    {
                        (cupom.data_validade?.toUpperCase() != 'NULL' && cupom.data_validade != '' && cupom.data_validade != null)
                        ?
                        'até dia '+cupom.data_validade
                        :
                        'Tempo Ilimitado'
                    }
                </Text>
            </View>
        </TouchableOpacity>
    );
}