import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import { styles } from './styles';

interface SetterNumberProps extends TouchableOpacityProps{
    title: string;
    numberOld?:number;
}

export default function NumberSetter({title,numberOld,...rest} : SetterNumberProps){

    const [number, setNumber] = useState(0);

    useEffect(() => {
        if(numberOld)
            setNumber(numberOld);
    },[])

    function handleIncrease(){
        setNumber(() => number + 1)
    }

    function handleDecrease(){

        if(number > 0){
            setNumber(() => number - 1)
        }

    }


    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text>
                    {title}
                </Text>
            </View>
            <View style={styles.setterContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleDecrease}
                    activeOpacity={0.6}
                >
                    <Text 
                        style={styles.buttonText}
                    >-</Text>
                </TouchableOpacity>
                <View style={styles.displayNumber}>
                    <Text style={styles.displayNumberText}>{number}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={handleIncrease}
                    {...rest}
                >
                    <Text 
                        style={styles.buttonText}
                    >+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}