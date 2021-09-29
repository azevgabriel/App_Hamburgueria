import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import {Fidelidade} from '../../components/Fidelidade';
import BotaoTab  from '../../components/BotãoTab';

export default function PassouNivel(){
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Clique para editar!</Text>
        </View>
        <ScrollView style={styles.cupomContainer}>
          <Fidelidade 
            nivel={1}
            hamburguinhos={5}
            texto={''}
          />
          <Fidelidade 
            nivel={2}
            hamburguinhos={10}
            texto={''}
          />
          <Fidelidade 
            nivel={3}
            hamburguinhos={15}
            texto={''}
          />
          <Fidelidade 
            nivel={4}
            hamburguinhos={20}
            texto={''}
          />
          <Fidelidade 
            nivel={5}
            hamburguinhos={25}
            texto={''}
          />
        </ScrollView>
      </View>

      <View style={styles.tab}>
        <BotaoTab 
            title={"✅ Editar"}
            style={styles.spaceTab}
        />
      </View>

    </View> 
  );
}