import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import { Fidelidade } from '../../components/Fidelidade';
import BotaoTab from '../../components/BotãoTab';

import { CupomProps, RootStackParamList } from '../../global/props';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function PassouNivel({ navigation }: Props) {

  const [level, setLevel] = useState(1);
  const levelArray = [1,2,3,4,5];

  function handleEdit (){
    //procurar cupom com o level seelecionado

    // Teste
    const cupomLevels:CupomProps[] = [
    {
      id: 4894854684846,
      permitted_uses: 1,
      image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
      title: "Atingiu Nivel 1",
      description: "Voce Atingiu o Nivel 1, agora voce tem 50% off na proxima compra",
      fidelity: true,
      level_id: 1,
      burgers_added: 5
    },
    {
      id: 1878764575,
      permitted_uses: 1,
      image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
      title: "Atingiu Nivel 2",
      description: "Voce Atingiu o Nivel 2, agora voce tem 30% off na proxima compra",
      fidelity: true,
      level_id: 2,
      burgers_added: 5
    },
    {
      id: 164786761786687,
      permitted_uses: 1,
      image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
      title: "Atingiu Nivel 3",
      description: "Voce Atingiu o Nivel 3, agora voce tem 30% off na proxima compra",
      fidelity: true,
      level_id: 3,
      burgers_added: 5
    },
    {
      id: 1745878671616,
      permitted_uses: 1,
      image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
      title: "Atingiu Nivel 4",
      description: "Voce Atingiu o Nivel 4, agora voce uma coca cola gratis",
      fidelity: true,
      level_id: 4,
      burgers_added: 5
    },
    {
      id: 1783475384751454567,
      permitted_uses: 100000,
      image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
      title: "Atingiu Nivel 5",
      description: "Voce Atingiu o Nivel 5, agora voce Tem 5% gratis em qualquer compra",
      fidelity: true,
      level_id: 5,
      burgers_added: 5
    }
    ]
    for (let i = 0; i < cupomLevels.length; i++) {
      if(i+1 == level){
        navigation.navigate('LevelRegistration',{
          cupom: cupomLevels[i]
        })
      }
    }
  }
  function handleLevel(level: number) {
    setLevel(level)
  }
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Clique para editar!</Text>
        </View>
        <ScrollView style={styles.cupomContainer} showsVerticalScrollIndicator={false}>
          {
            levelArray.map(levelI => (
              <Fidelidade
                key={levelI}
                nivel={levelI}
                hamburguinhos={5}
                texto={''}
                checked={levelI === level}
                onPress={() => handleLevel(levelI)}
              />
            ))
          }
        </ScrollView>
      </View>

      <View style={styles.tab}>
        <BotaoTab
          title={"✅ Editar"}
          style={styles.spaceTab}
          onPress={handleEdit}
        />
      </View>

    </View>
  );
}