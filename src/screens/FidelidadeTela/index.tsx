import * as React from "react";
import { View, Image, Text, Dimensions, ProgressBarAndroid, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import img from "../../../assets/image-solid.png";
import { styles } from "./styles";
import Button from "../../components/Button";
import { Fidelidade } from "../../components/Fidelidade";
import { CupomProps } from "../../global/props";
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
  const { user } = useAuth();
  const [progresso, setProgresso] = React.useState(0.0);
  function handleBack() {

    navigation.navigate('ViewCupons')
  }
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Voltar color="orange" onPress={handleBack} />
      </View>
      <View style={styles.viewHeader}>
        <View style={styles.textViewS}>
          <Text style={[styles.textS, { color: "orange" }]}>
            🍔 Hamburguinhos! 🍔{" "}
          </Text>
          <Text style={[styles.textS, { textAlign: "right" }]}>Seu Nível:</Text>
          <Text style={{ textAlign: "justify" }}>🍔                                                             🍔</Text>
          <ProgressBarAndroid styleAttr="Horizontal" color='orange' />
          <Text style={{ textAlign: "justify" }}>                                 🍔                              </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.cupom}>{
        user
          ?
          <View>
            <Fidelidade nivel={1} hamburguinhos={0} texto={""} checked={user.level == 1} />
            <Fidelidade nivel={2} hamburguinhos={0} texto={""} checked={user.level == 2} />
            <Fidelidade nivel={3} hamburguinhos={0} texto={""} checked={user.level == 3} />
            <Fidelidade nivel={4} hamburguinhos={0} texto={""} checked={user.level == 4} />
            <Fidelidade nivel={5} hamburguinhos={0} texto={""} checked={user.level == 5} />
          </View>
          :
          <Load />
      }
      </ScrollView>
    </View>
  );
}
