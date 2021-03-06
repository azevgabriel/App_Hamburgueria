import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StatusBar, Modal, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { Fidelidade } from '../../components/Fidelidade';
import BotaoTab from '../../components/BotãoTab';
import { Feather } from '@expo/vector-icons';
import { CupomProps, NivelProps, RootStackParamList } from '../../global/props';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/useAuth';
import { Load } from '../../components/Load';
import colors from '../../styles/colors';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function PassouNivel({ navigation }: Props) {
  const { listAllLevel, listCupons } = useAuth();
  const [loading, setLoading] = React.useState(false)
  const [levels, setLevels] = React.useState<NivelProps[]>([] as NivelProps[]);
  const [cupomLevels, setCupomLevels] = React.useState<CupomProps[]>([] as CupomProps[]);
  const [level, setLevel] = useState(1);
  const levelArray = [1, 2, 3, 4, 5];
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchLevel()
    const unsubscribe = navigation.addListener('focus', () => {
      fetchLevel()
    });
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
      setModalVisible(true);
    }
  }
  async function fetchBurguerLevel() {
    const response = await listCupons();
    var just_cupons: CupomProps[] = []
    response.forEach(element => {
      if (element.fidelity) {
        just_cupons.push(element)
      }
    });
    just_cupons.sort(function (a: CupomProps, b: CupomProps) {
      if (a.fidelity_level != undefined && b.fidelity_level != undefined) {
        if (a.fidelity_level > b.fidelity_level) {
          return 1;
        }
        if (a.fidelity_level < b.fidelity_level) {
          return -1;
        }
      }
      return 0;
    });
    setCupomLevels(just_cupons);
    setLoading(false)
  }
  function handleEdit() {

    for (let i = 0; i < cupomLevels.length; i++) {
      if (i + 1 == level) {
        navigation.navigate('LevelRegistration', {
          cupom: cupomLevels[i],
          level: levels[i]
        })
      }
    }
  }
  function handleRefresh() {
    fetchLevel();
  }
  function handleLevel(level: number) {
    setLevel(level)
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden = {false} translucent barStyle={'dark-content'} backgroundColor= "#f2f2f2"/>

      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(false);
        }}
      >
        <View style={styles.modalBackground2}>
            <View style={styles.modalLogout2}>
                <Text style={styles.textModal2}>Houve algum erro. Tente novamente!</Text>
                <TouchableOpacity
                    onPress={() => { setModalVisible(false) }}
                    style={styles.buttonModalCancelar2}
                >
                    <Text style={styles.textCancelar2}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

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
                  nivel={levelI.level ? levelI.level : 0}
                  hamburguinhos={levelI.burgers_needed ? levelI.burgers_needed : 0}
                  texto={levelI.level ? (cupomLevels[levelI.level - 1] ? cupomLevels[levelI.level - 1].description : '') : ''}
                  image={levelI.level ? (cupomLevels[levelI.level - 1] ? cupomLevels[levelI.level - 1].image : '') : ''}
                  checked={levelI.level === level}
                  onPress={() => handleLevel(levelI.level ? levelI.level : 0)}
                />
              ))
              :
              <Load />
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