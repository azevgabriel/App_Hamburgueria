import React from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';

import icon from '../../assets/nivel.png';
import Button from '../../components/Button';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CupomProps, ObjectCupons, RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function PassouNivel({ navigation, route, ...rest }: Props) {
  const { create_user_cupom, user } = useAuth();
  const cupom = route.params as CupomProps;
  async function handleNext() {
    try {
      await create_user_cupom(cupom.id, user);
      navigation.navigate('FidelidadeTela')
    } catch (error) {
      Alert.alert('Erro ao Criar Cupom de Fidelidade' + error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textoNivel}>
          Parabéns! {`\n`}
          Você passou de {`\n`}
          nível!
        </Text>
      </View>
      <View style={styles.recompensaContainer} >
        <Image
          source={icon}
          resizeMode='contain'
          style={styles.icon}
        />
        <Text style={styles.descricao}>
          Veja sua recompensa em {`\n`}
          fidelidades.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.darkGray}
          title="Avançar"
          onPress={handleNext}
        />
      </View>
    </View>
  );
}