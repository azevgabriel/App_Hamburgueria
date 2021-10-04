import React, { useCallback } from 'react';
import { View, 
        Text, 
        Image 
} from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';
import iconImg from '../../assets/logo.png';
import Button from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Confirmacao({navigation}: Props){

    const handleViewCupons = useCallback(() => {
        navigation.navigate('ViewCupons');
    },[])

    return(
        <View style={styles.container}>
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
                    onPress={handleViewCupons}
                />
            </View>
            
        </View> 

    );
}