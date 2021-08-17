import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';


import { styles } from './styles';

export function Cupom(){
  return (
    <View style={styles.container}>
        <View style={styles.hamburguinhos}>
            <Text style={styles.HamIconText}>
                🍔 3
            </Text>
            <Text style={styles.HamIconText}>
                x3
            </Text>
        </View>
        <View style={styles.ImageView}>
            <Image style={styles.image} source={{uri: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg'}}/>
        </View>
        <View style={styles.titleText}>
            <Text style={styles.title}>
                15% OFF
            </Text>
        </View>
        <View style={styles.bodyText}>
            <Text style={styles.day}>
                até dia 21/06
            </Text>
        </View>
    </View>
  );
}