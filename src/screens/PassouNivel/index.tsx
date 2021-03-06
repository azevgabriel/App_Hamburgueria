import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, ToastAndroid, StatusBar } from 'react-native';

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
  const [loadingAsync, setLoadingAsync] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function handleNext() {
    setLoadingAsync(true)
    try {
      await create_user_cupom(cupom.id, user.id);
      ToastAndroid.show(
        "Cupom de fidelidade Adquirido!",
        ToastAndroid.SHORT
      );
      navigation.navigate('FidelidadeTela')
    } catch (error) {
      setModalVisible(true);
      //Alert.alert('Erro ao Criar Cupom de Fidelidade' + error)
    }
    setLoadingAsync(false)
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
                <Text style={styles.textModal2}>Erro ao criar cupom de fidelidade. Tente novamente!</Text>
                <TouchableOpacity
                    onPress={() => { setModalVisible(false) }}
                    style={styles.buttonModalCancelar2}
                >
                    <Text style={styles.textCancelar2}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>

      <View style={styles.titleContainer}>
        <Text style={styles.textoNivel}>
          Parab??ns! {`\n`}
          Voc?? passou de {`\n`}
          n??vel!
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
        {
          !loadingAsync
            ?
            <Button
              color={colors.darkGray}
              title="Avan??ar"
              onPress={handleNext}
            />
            :
            <Button color={colors.shapeGray} title="Carregando!" />
        }
      </View>
    </View>
  );
}