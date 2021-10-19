import * as React from "react";
import { View, Image, Text, Dimensions, ScrollView } from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';
import { Feather } from "@expo/vector-icons";
import img from "../../../assets/image-solid.png";
import { styles } from "./styles";
import Button from "../../components/Button";
import { Fidelidade } from "../../components/Fidelidade";
import { CupomProps, NivelProps } from "../../global/props";
import Voltar from "../../components/Voltar";
import { Cupom } from "../../components/Cupom";
import colors from "../../styles/colors";
import { useAuth } from "../../hooks/useAuth";
import { Load } from "../../components/Load";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';

type Props = NativeStackScreenProps<RootStackParamList>;
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function FidelidadeTela({ navigation }: Props) {
  const { user, listAllLevel, listBurguerLevel } = useAuth();
  const [progresso, setProgresso] = React.useState(0.0);
  const [loading, setLoading] = React.useState(false)
  const [levels, setLevels] = React.useState<NivelProps[]>([] as NivelProps[]);
  const [cupomLevels, setCupomLevels] = React.useState<CupomProps[]>([] as CupomProps[]);

  React.useEffect(() => {
    fetchLevel()
  }, [])
  async function fetchLevel() {
    setLoading(true)
    const response = await listAllLevel();
    setLevels(response)
    if (user.level && user.level > 1 && user.level < 5) {
      const valueMax = response[user.level].burgers_needed;
      let valueMin;
      valueMin = response[user.level - 1].burgers_needed;
      if (valueMax && valueMin && user.burgers) {
        const value = valueMax - valueMin;
        const burguers = user.burgers - valueMin;
        setProgresso(burguers / value)
      }
    } else {
      setProgresso(1)
    }
    fetchBurguerLevel()
  }
  async function fetchBurguerLevel() {
    const response = await listBurguerLevel();
    setCupomLevels(response);
    setLoading(false)
  }
  // function setBar(){
  //   let valueMax;
  //   let valueMin;
  //   if(user.level && !loading && cupomLevels.length > 0 && levels.length > 0 && user.level){
  //     valueMax =  levels[user.level].burgers_needed;
  //     if(user.level > 1){
  //       valueMin = levels[user.level - 1].burgers_needed;
  //     }else{
  //       valueMin = 0
  //     }
  //     if(valueMax && valueMin && user.burgers){
  //       const value = valueMax - valueMin;
  //       const burguers = user.burgers - valueMin;
  //       return value/ burguers
  //     }
  //   }
  // }
  function handleBack() {
    navigation.navigate('ViewCupons')
  }
  function handleNivel(nivel: Number) {
    nivel === user.level
      ?
      navigation.navigate('PassouNivel')
      :
      nivel = nivel
  }
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Voltar color="orange" onPress={handleBack} />
      </View>
      <View style={styles.viewHeader}>
        <View style={styles.textViewS}>
          <Text style={[styles.textS, { color: "orange" }]}>
            🍔 Hamburguinhos! 🍔
          </Text>
          <Text style={[styles.textS, { textAlign: "right" }]}>
            Seu Nível: {user.level}
          </Text>
          <View style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
            <Text>
              {
                user && !loading && cupomLevels.length > 0 && levels.length > 0 && user.level
                  ?
                  user.level < 5
                    ?
                    levels[user.level - 1].burgers_needed
                    :
                    ''
                  :
                  '--'
              }🍔
            </Text>
            <Text>
              🍔{
                user && !loading && cupomLevels.length > 0 && levels.length > 0 && user.level
                  ?
                  user.level < 5
                    ?
                    levels[user.level].burgers_needed
                    :
                    ''
                  :
                  '--'
              }
            </Text>
          </View>
          <ProgressBar progress={progresso} color={Colors.orange400} style={styles.progressBar} />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>
              {
                user.level && user.level < 5
                  ?
                  user.burgers
                  :
                  ''
              }🍔
            </Text>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.cupom}>
        {
          user && !loading && cupomLevels.length > 0 && levels.length > 0
            ?
            <View>
              <Fidelidade onPress={() => handleNivel(1)} nivel={1} image={cupomLevels[0].image} hamburguinhos={levels[0].burgers_needed ? levels[0].burgers_needed : 0} texto={cupomLevels[0].description ? cupomLevels[0].description : ""} checked={user.level == 1} />
              <Fidelidade onPress={() => handleNivel(2)} nivel={2} image={cupomLevels[1].image} hamburguinhos={levels[1].burgers_needed ? levels[1].burgers_needed : 0} texto={cupomLevels[1].description ? cupomLevels[1].description : ""} checked={user.level == 2} />
              <Fidelidade onPress={() => handleNivel(3)} nivel={3} image={cupomLevels[2].image} hamburguinhos={levels[2].burgers_needed ? levels[2].burgers_needed : 0} texto={cupomLevels[2].description ? cupomLevels[2].description : ""} checked={user.level == 3} />
              <Fidelidade onPress={() => handleNivel(4)} nivel={4} image={cupomLevels[3].image} hamburguinhos={levels[3].burgers_needed ? levels[3].burgers_needed : 0} texto={cupomLevels[3].description ? cupomLevels[3].description : ""} checked={user.level == 4} />
              <Fidelidade onPress={() => handleNivel(5)} nivel={5} image={cupomLevels[4].image} hamburguinhos={levels[4].burgers_needed ? levels[4].burgers_needed : 0} texto={cupomLevels[4].description ? cupomLevels[4].description : ""} checked={user.level == 5} />
            </View>
            :
            <Load />
        }
      </ScrollView>
    </View>
  );
}
