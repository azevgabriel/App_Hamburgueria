import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import Button from '../../components/Button';

export default function Welcome(){
    return(
        <View style={styles.container}>
            <Button 
                title="Próximo"
                color="#000000"
            />
        </View>
    )
}