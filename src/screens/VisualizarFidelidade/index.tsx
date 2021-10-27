import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import { Fidelidade } from '../../components/Fidelidade';
import BotaoTab from '../../components/BotãoTab';

import { CupomProps, NivelProps, RootStackParamList } from '../../global/props';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function PassouNivel({ navigation }: Props) {
  const { listAllLevel,listCupons } = useAuth();
  const [loading,setLoading] = React.useState(false)
  const [levels, setLevels] = React.useState<NivelProps[]>([] as NivelProps[]);
  const [cupomLevels, setCupomLevels] = React.useState<CupomProps[]>([] as CupomProps[]);
  const [level, setLevel] = useState(1);
  const levelArray = [1,2,3,4,5];

  useEffect(() => {
    fetchLevel()
  }, [])
  async function fetchLevel() {
    setLoading(true)
    try {
      const response = await listAllLevel();

      response.sort(function (a: NivelProps, b: NivelProps) {
        if (a.level != undefined && b.level != undefined) {
          if (a.level > b.level) {
            return 1;
          }
          if (a.level < b.level) {
            return -1;
          }
        }
        return 0;
      });
      setLevels(response)
      fetchBurguerLevel()
    } catch {
      
    }
  }
  async function fetchBurguerLevel() {
    const response = await listCupons();
    var just_cupons:CupomProps[] = []
    response.forEach(element => {
        if(element.fidelity){
            just_cupons.push(element)
        }
    });
    setCupomLevels(just_cupons);
    setLoading(false)
  }
  function handleEdit (){

    for (let i = 0; i < cupomLevels.length; i++) {
      if(i+1 == level){
        navigation.navigate('LevelRegistration',{
          cupom: cupomLevels[i],
          level: levels[i]
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
            !loading
            ?
            levels.map(levelI => (
              <Fidelidade
                key={levelI.id}
                nivel={levelI.level?levelI.level:0}
                hamburguinhos={levelI.burgers_needed?levelI.burgers_needed:0}
                texto={levelI.level?(cupomLevels[levelI.level-1]?cupomLevels[levelI.level-1].description:''):''}
                image={levelI.level?(cupomLevels[levelI.level-1]?cupomLevels[levelI.level-1].image:''):''}
                checked={levelI.level === level}
                onPress={() => handleLevel(levelI.level?levelI.level:0)}
              />
            ))
            :
            <Text></Text>
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