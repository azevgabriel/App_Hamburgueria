import * as React from "react";
import { View, Image, Text, Dimensions, ProgressBarAndroid } from "react-native";
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

export default function VisualizarFidelidade({
  usos_permitidos,
  usos_restantes,
  ...rest
}: CupomProps) {
  const [progresso, setProgresso] = React.useState(0.0);
  return (
    <View style={styles.container}>
        <View style={styles.textViewP}>
            <Text style={styles.textP}>Clique para editar!</Text>
        </View>
        <View style={styles.cupom}>
            <Fidelidade nivel={1} hamburguinhos={1} texto={""} />
            <Fidelidade nivel={2} hamburguinhos={10} texto={""} />
            <Fidelidade nivel={3} hamburguinhos={35} texto={""} />
            <Fidelidade nivel={4} hamburguinhos={45} texto={""} />
        </View>
        <View style={styles.botao}>
            <Button title='Adicionar' color={"orange"}></Button>
        </View>
    </View>
  );
}
