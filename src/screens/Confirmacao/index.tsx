import React from 'react';
import { View, 
        Text, 
        Image,
        StatusBar 
} from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';
import iconImg from '../../assets/logo.png';
import Button from '../../components/Button';

export default function Confirmacao(){
    return(
        <View style={styles.container}>
            <StatusBar hidden = {false} translucent barStyle={'dark-content'} backgroundColor= "#90BCB3"/>
            <View style={styles.imageContainer}>
                <Image
                    source={iconImg}
                    resizeMode='contain'
                    style={styles.image}
                />
                <Text style={styles.welcomeText}>
                    Seja bem vinda
                </Text>

                <Text style={styles.nameText}>
                    Marina! 🥰
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text style={styles.ofertaText} >Aproveite nossas ofertas</Text>
                <Button 
                    title="Bora!"
                    color={colors.blue} 
                />
            </View>
            
        </View> 

    );
}