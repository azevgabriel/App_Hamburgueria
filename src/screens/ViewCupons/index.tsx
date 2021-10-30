import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    ToastAndroid,
    Alert,
    Text,
    Clipboard
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import BotaoTab from '../../components/BotãoTab';
import { Load } from '../../components/Load';
import QRScanner from '../../components/QRScanner';
import { CupomProps, Cupom_UserCupomProps, UserCupomProps, UserProps } from '../../global/props';
import userImg from '../../assets/hamburger.png';
import { AntDesign, Feather } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';
import colors from '../../styles/colors';

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
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

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

        const unsubscribe = navigation.addListener('focus', () => {

            user.type
                ?
                fetchUserCupons(user.id)
                :
                fetchAllCupons()
        });

    }, [])

    async function passaValor(id: number) {
        if (id) {
            try {
                await edit_all_values(id)
            } catch (error) {
                Alert.alert('Erro ao dar baixa no cupom' + error)
            }
        } else {
            setModalVisible3(true)
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
        try {
            await logOut();
            navigation.navigate('Welcome')
        } catch {
            setModalVisible3(true)
        }
    }

    const fetchCopiedText = async () => {
        try {
            const text = await Clipboard.getString();
            ToastAndroid.showWithGravityAndOffset(
                "Código lido!",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                50
            );
            passaValor(parseInt(text));
        } catch (error) {
            setModalVisible3(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.rowHeader}>
                <View style={styles.viewheader}>
                    <Header id={user.id} name={user.name} type={user.type} />
                </View>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                        setModalVisible2(false);
                    }}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalLogout}>
                            <Text style={styles.textModal}>Tem certeza que deseja sair?</Text>
                            <View style={{flexDirection: 'row'}}> 
                                <TouchableOpacity
                                    onPress={() => {setModalVisible2(false)}}
                                    style={styles.buttonModalCancelar}
                                >
                                    <Text style={styles.textCancelar}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleLogOut}
                                    style={styles.buttonModalSair}
                                >
                                    <Text style={styles.textSim}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => {
                    setModalVisible3(false);
                }}
                >
                    <View style={styles.modalBackground2}>
                        <View style={styles.modalLogout2}>
                            <Text style={styles.textModal2}>Houve algum erro. Tente novamente!</Text>
                                <TouchableOpacity
                                    onPress={() => {setModalVisible3(false)}}
                                    style={styles.buttonModalCancelar2}
                                >
                                    <Text style={styles.textCancelar2}>Ok</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={user.type? styles.viewimageUser : styles.viewimageADM }>
                    {
                        user.image && user.image != ""
                            ?
                            <Image style={styles.image} source={{ uri: user.image }} />
                            :
                            <Image style={styles.image} source={require('../../assets/logo.png')} />
                    }
                    <TouchableOpacity
                        onPress={() => {setModalVisible2(true)}}
                        style={styles.logout}
                    >
                        <Feather 
                            name='log-out'
                            size={23}
                            color='black'
                        />
                    </TouchableOpacity>
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
                        <TouchableOpacity 
                            onPress={() => fetchCopiedText()} 
                            style={styles.icons}
                        >
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.textTab}>Pesquisar</Text>
                                <AntDesign name="search1" size={23} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icons}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.textTab}>Scannear</Text>
                                <AntDesign name="qrcode" size={23} color="white" />
                            </View>
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