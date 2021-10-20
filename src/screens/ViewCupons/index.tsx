import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    ToastAndroid,
    Text,
    Alert
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import BotaoTab from '../../components/BotãoTab';
import { Load } from '../../components/Load';
import QRScanner from '../../components/QRScanner';
import { CupomProps, Cupom_UserCupomProps, UserCupomProps, UserProps } from '../../global/props';
import api from '../../services/api';
import userImg from '../../assets/hamburger.png';
import { AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList>;

export function ViewCupons({ navigation }: Props) {
    var user_cupons: UserCupomProps[] = [];
    var [cupons] = useState<CupomProps[]>([]);
    var [valorCode, setValorCode] = useState('');

    var [Allcupons, setAllCupons] = useState<CupomProps[]>([]);
    var [cupons_and_user_cupons, setCupons_and_user_cupons] = useState<Cupom_UserCupomProps[]>([]);
    const [loadData, setLoadData] = useState(false);
    const { user, loading, listCupons, fetchUser_Cupons, fetch_Cupons, edit_all_values } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);

    const onCodeScanned = (type: string, data: string) => {
        // Essa é a função que será chamada quando um QR Code for lido com sucesso!
        console.log(type); // type é o tipo de código que o scanner leu. Geralmente é o número 256, mas acho que esse dado não importa muito pra gente
        console.log(data); // data é o valor que foi usado na criação do QR Code. No nosso caso, data será o id do user_coupon
        passaValor(parseInt(data))
        ToastAndroid.showWithGravityAndOffset(
            "QRCode lido com sucesso!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        setModalVisible(false);
    }

    useEffect(() => {
        user.type
            ?
            fetchUserCupons(user.id)
            :
            fetchAllCupons()
    }, [])

    async function passaValor(id: number) {
        if (id) {
            await edit_all_values(id)
        } else {
            Alert.alert('Digite um numero')
        }
    }
    
    async function fetchUserCupons(user_id: number) {
        const response = await fetchUser_Cupons(user_id);
        user_cupons = response
        fetchCupons();
    }

    async function fetchCupons() {
        const response = await fetch_Cupons(user_cupons);
        setCupons_and_user_cupons(response)
        setLoadData(true);
    }

    async function fetchAllCupons() {
        const response = await listCupons();
        var just_cupons: CupomProps[] = []
        response.forEach(element => {
            if (!element.fidelity) {
                just_cupons.push(element)
            }
        });
        setAllCupons(just_cupons)
        setLoadData(true);
    }

    function handleCupomSelect(item: CupomProps) {

        navigation.navigate('CupomDescription', {
            cupom: item
        });
    }

    function handleProfile() {
        navigation.navigate('SeuPerfil');
    }

    function handleAdd() {
        navigation.navigate('NovoCupom', {})
    }

    function handleFidelity() {
        user.type
            ?
            navigation.navigate('FidelidadeTela')
            :
            navigation.navigate('VisualizarFidelidade')
    }

    function handleQrCodeColeted(id_user_cupom: number) {
        // post da rota
    }
    return (
        <View style={styles.container}>
            <View style={styles.rowheader}>
                <View style={styles.viewheader}>
                    <Header id={user.id} name={user.name} type={user.type} />
                </View>
                <View style={styles.viewimage}>
                    {
                        user.image && user.image != ""
                            ?
                            <Image style={styles.image} source={{ uri: user.image }} />
                            :
                            <Image style={styles.image} source={require('../../assets/logo.png')} />
                    }
                </View>
            </View>
            {
                user.type
                    ?
                    <View style={styles.cuponsContainer}>
                        {
                            !loading && loadData
                                ?
                                <FlatList
                                    data={cupons_and_user_cupons}
                                    keyExtractor={(item) => String(item.cupom.id)}
                                    renderItem={({ item }) =>
                                        <Cupom

                                            cupom={item.cupom}
                                            user_cupom={item.user_cupom}
                                            onPress={() => handleCupomSelect(item.cupom)}
                                        />
                                    }
                                    showsVerticalScrollIndicator={false}
                                    numColumns={2}
                                    contentContainerStyle={styles.flatlist}
                                    onEndReachedThreshold={0.1}
                                />
                                :
                                <Load />
                        }
                    </View>
                    :
                    <View style={styles.cuponsContainer}>
                        {
                            !loading && loadData
                                ?
                                <FlatList
                                    data={Allcupons}
                                    keyExtractor={(item) => String(item.id)}
                                    renderItem={({ item }) =>
                                        <Cupom

                                            cupom={item}
                                            onPress={() => handleCupomSelect(item)}
                                        />
                                    }
                                    showsVerticalScrollIndicator={false}
                                    numColumns={2}
                                    contentContainerStyle={styles.flatlist}
                                    onEndReachedThreshold={0.1}
                                />
                                :
                                <Load />
                        }
                    </View>
            }

            <View>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.QRModal}>
                        <QRScanner onCodeScanned={onCodeScanned} />
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={styles.cancelButton}
                        >
                            <AntDesign name="closecircleo" size={50} color="white" />
                        </TouchableOpacity>

                    </View>
                </Modal>
            </View>

            {
                user.type

                    ?

                    null

                    :

                    <View style={styles.QRCode}>
                        <TextInput
                            placeholder="Cole o código aqui"
                            style={styles.inputQRCode}
                            onChangeText={setValorCode}
                        />
                        <TouchableOpacity onPress={() => passaValor(parseInt(valorCode))} style={styles.icons}>
                            <AntDesign name="search1" size={25} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icons}
                            onPress={() => setModalVisible(true)}
                        >
                            <AntDesign name="qrcode" size={25} color="white" />
                        </TouchableOpacity>
                    </View>
            }

            <View style={user.type ? styles.tabUser : styles.tabAdm}>
                <BotaoTab
                    title={"🏆 Fidelidade"}
                    style={styles.spaceTab}
                    onPress={handleFidelity}
                />
                <View style={styles.divisor} />
                {
                    user.type

                        ?

                        <BotaoTab
                            title={"😎 Perfil"}
                            style={styles.spaceTab}
                            onPress={handleProfile}
                        />

                        :

                        <BotaoTab
                            title={"➕ Adicionar"}
                            style={styles.spaceTab}
                            onPress={handleAdd}
                        />

                }

            </View>

        </View>
    );
}