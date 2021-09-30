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

const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function FidelidadeTela({
  usos_permitidos,
  usos_restantes,
  ...rest
}: CupomProps) {
  const [progresso, setProgresso] = React.useState(0.0);
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Voltar color="orange" />
      </View>
      <View style={styles.viewHeader}>
        <View style={styles.textViewS}>
          <Text style={[styles.textS, { color: "orange" }]}>
            🍔 Hamburguinhos! 🍔{" "}
          </Text>
          <Text style={[styles.textS, { textAlign: "right" }]}>Seu Nível:</Text>
          <Text style={{ textAlign: "justify" }}>🍔                                                             🍔</Text>
          <ProgressBarAndroid styleAttr="Horizontal" color= 'orange' />
          <Text style={{ textAlign: "justify" }}>                                 🍔                              </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.cupom}>
        <Fidelidade nivel={0} hamburguinhos={0} texto={""} />
        <Fidelidade nivel={0} hamburguinhos={0} texto={""} />
        <Fidelidade nivel={0} hamburguinhos={0} texto={""} />
        <Fidelidade nivel={0} hamburguinhos={0} texto={""} />
        <Fidelidade nivel={0} hamburguinhos={0} texto={""} />
      </ScrollView>
    </View>
  );
}
