import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    ToastAndroid,
    Alert,
    ScrollView,
    Text,
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import BotaoTab from '../../components/BotãoTab';
import { Load } from '../../components/Load';
import QRScanner from '../../components/QRScanner';
import { CupomProps, Cupom_UserCupomProps, UserCupomProps, UserProps } from '../../global/props';
import userImg from '../../assets/hamburger.png';
import { AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export function ViewCupons({ navigation }: Props) {
    var user_cupons: UserCupomProps[] = [];
    var [cupons] = useState<CupomProps[]>([]);
    var [valorCode, setValorCode] = useState('');

    var [Allcupons, setAllCupons] = useState<CupomProps[]>([]);
    var [cupons_and_user_cupons, setCupons_and_user_cupons] = useState<Cupom_UserCupomProps[]>([]);
    const [loadData, setLoadData] = useState(false);
    const { user, loading, listCupons, fetchUser_Cupons, fetch_Cupons, edit_all_values, logOut } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);

    const onCodeScanned = (type: string, data: string) => {
      
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
            try {
                await edit_all_values(id)
            } catch (error) {
                Alert.alert('Erro ao dar baixa no cupom' + error)
            }
        } else {
            Alert.alert('Digite um numero')
        }
    }

    async function fetchUserCupons(user_id: number) {
        try {
            const response = await fetchUser_Cupons(user_id);
            user_cupons = response
            fetchCupons();
        } catch (error) {
            Alert.alert('Erro ao Listar cupons do usuario' + error)
        }
    }

    async function fetchCupons() {
        try {
            const response = await fetch_Cupons(user_cupons);
            setCupons_and_user_cupons(response)
            setLoadData(true);
        } catch (error) {
            Alert.alert('Erro ao Listar cupons' + error)
        }
    }

    async function fetchAllCupons() {
        try {
            const response = await listCupons();
            var just_cupons: CupomProps[] = []
            response.forEach(element => {
                if (!element.fidelity) {
                    just_cupons.push(element)
                }
            });
            setAllCupons(just_cupons)
            setLoadData(true);
        } catch (error) {
            Alert.alert('Erro ao Listar Cupons' + error)
        }
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

    async function handleLogOut() {
        await logOut();
        navigation.navigate('Welcome')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
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
                <TouchableOpacity
                    onPress={handleLogOut}
                    style={{borderWidth:2}}
                >
                    <Text>
                        LogOut
                    </Text>
                </TouchableOpacity>
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
        </ScrollView>
    );
}