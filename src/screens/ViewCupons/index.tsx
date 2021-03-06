import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    ToastAndroid,
    Text,
    Clipboard,
    StatusBar
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import BotaoTab from '../../components/BotãoTab';
import { Load } from '../../components/Load';
import QRScanner from '../../components/QRScanner';
import avatarIcon from "../../assets/icon.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import { CupomProps, Cupom_UserCupomProps, UserCupomProps, UserProps } from '../../global/props';
import { AntDesign, Feather } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';

type Props = NativeStackScreenProps<RootStackParamList>;

export function ViewCupons({ navigation }: Props) {
    var user_cupons: UserCupomProps[] = [];
    var [Allcupons, setAllCupons] = useState<CupomProps[]>([]);
    var [cupons_and_user_cupons, setCupons_and_user_cupons] = useState<Cupom_UserCupomProps[]>([]);
    const [loadData, setLoadData] = useState(false);
    const { user, loading, deleteOneCupom, listCupons, deleteCupons, fetchUser_Cupons, fetch_Cupons, edit_all_values, logOut } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);
    const [modalVisible7, setModalVisible7] = useState(false);
    const [modalVisible8, setModalVisible8] = useState(false);
    const [modalVisible9, setModalVisible9] = useState(false);
    const [id_cupom_delete, setId_cupom_delete] = useState(0)
    const [dadoQR, setDadoQR] = useState('');

    const onCodeScanned = (type: string, data: string) => {

        //passaValor(data)
        ToastAndroid.showWithGravityAndOffset(
            "QRCode lido com sucesso!",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        setModalVisible(false);
        setDadoQR(data);
        setModalVisible5(true);
    }

    useEffect(() => {
        deleteCupons();
        user.type
            ?
            fetchUserCupons(user.id)
            :
            fetchAllCupons()

        navigation.addListener('focus', () => {
            deleteCupons();
            user.type
            user.type
                ?
                fetchUserCupons(user.id)
                :
                fetchAllCupons()
        });

    }, [])

    async function passaValor(id: string) {
        if (id) {
            const ids_split = id.split('-', 2)
            try {
                await edit_all_values(ids_split[0], ids_split[1])
                ToastAndroid.showWithGravityAndOffset(
                    "Código lido!",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                );
            } catch (error) {
                setModalVisible6(true);
                //Alert.alert('Erro ao dar baixa no cupom' + error)
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
            setModalVisible7(true)
            //Alert.alert('Erro ao Listar cupons do usuario' + error)
        }
    }

    async function fetchCupons() {
        try {
            const response = await fetch_Cupons(user_cupons);
            setCupons_and_user_cupons(response)
            setLoadData(true);
        } catch (error) {
            setModalVisible8(true)
            //Alert.alert('Erro ao Listar cupons' + error)
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
            setModalVisible8(true)
            //Alert.alert('Erro ao Listar Cupons' + error)
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
    function getImage() {
        if (user.image == 'Avatar1') {
            return avatar1;
        } else if (user.image == 'Avatar2') {
            return avatar2;
        } else if (user.image == 'Avatar3') {
            return avatar3;
        } else if (user.image == 'Avatar4') {
            return avatar4;
        }
        return avatarIcon;

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
            passaValor(text);
        } catch (error) {
            setModalVisible3(true)
        }
    }

    function handleDelete(cupom_id: number) {
        setId_cupom_delete(cupom_id)
        setModalVisible9(true)

    }
    async function handleDelete_cupom() {
        if (id_cupom_delete > 0) {
            try {
                await deleteOneCupom(id_cupom_delete);
                fetchAllCupons();
                setModalVisible9(false)
            } catch {
                setModalVisible9(false)
            }
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden={false} translucent barStyle={'dark-content'} backgroundColor="#f2f2f2" />
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
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => { setModalVisible2(false) }}
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
                    visible={modalVisible9}
                    onRequestClose={() => {
                        setModalVisible9(false);
                    }}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalLogout}>
                            <Text style={styles.textModal}>Tem certeza que deseja deletar o cupom?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => { setModalVisible9(false) }}
                                    style={styles.buttonModalCancelar}
                                >
                                    <Text style={styles.textCancelar}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleDelete_cupom}
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
                                onPress={() => { setModalVisible3(false) }}
                                style={styles.buttonModalCancelar2}
                            >
                                <Text style={styles.textCancelar2}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={modalVisible6}
                    onRequestClose={() => {
                        setModalVisible6(false);
                    }}
                >
                    <View style={styles.modalBackground2}>
                        <View style={styles.modalLogout2}>
                            <Text style={styles.textModal2}>Erro ao dar baixa no cupom. Tente novamente!</Text>
                            <TouchableOpacity
                                onPress={() => { setModalVisible6(false) }}
                                style={styles.buttonModalCancelar2}
                            >
                                <Text style={styles.textCancelar2}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={modalVisible7}
                    onRequestClose={() => {
                        setModalVisible7(false);
                    }}
                >
                    <View style={styles.modalBackground2}>
                        <View style={styles.modalLogout2}>
                            <Text style={styles.textModal2}>Erro ao listar cupons do usuário. Tente novamente!</Text>
                            <TouchableOpacity
                                onPress={() => { setModalVisible7(false) }}
                                style={styles.buttonModalCancelar2}
                            >
                                <Text style={styles.textCancelar2}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={modalVisible8}
                    onRequestClose={() => {
                        setModalVisible8(false);
                    }}
                >
                    <View style={styles.modalBackground2}>
                        <View style={styles.modalLogout2}>
                            <Text style={styles.textModal2}>Erro ao listar cupons. Tente novamente!</Text>
                            <TouchableOpacity
                                onPress={() => { setModalVisible8(false) }}
                                style={styles.buttonModalCancelar2}
                            >
                                <Text style={styles.textCancelar2}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={user.type ? styles.viewimageUser : styles.viewimageADM}>
                    {
                        user.image && user.image != ""
                            ?
                            <Image style={styles.image} source={getImage()} />
                            :
                            <Image style={styles.image} source={require('../../assets/logo.png')} />
                    }
                    <TouchableOpacity
                        onPress={() => { setModalVisible2(true) }}
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
                                        <View>
                                            {
                                                !user.type
                                                    ?
                                                    <TouchableOpacity
                                                        onPress={() => (handleDelete(item.id))}
                                                        style={{
                                                            position: 'absolute',
                                                            padding: 18,
                                                            zIndex: 9999,
                                                            top: -1,
                                                            left: -3,
                                                        }}>
                                                        <Feather
                                                            name='trash-2'
                                                            style={
                                                                {
                                                                    paddingLeft: 4,
                                                                    position: 'absolute',
                                                                    paddingTop: 4,
                                                                    backgroundColor: 'black',
                                                                    marginRight: 40,
                                                                    padding: 1,
                                                                    color: 'red',
                                                                    fontSize: 12,
                                                                    borderWidth: 2,
                                                                    borderRadius: 50,
                                                                    borderColor: 'red'
                                                                }} />
                                                    </TouchableOpacity>
                                                    :
                                                    <Text></Text>
                                            }
                                            <Cupom

                                                cupom={item}
                                                onPress={() => handleCupomSelect(item)}
                                            />
                                        </View>
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

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={modalVisible4}
                    onRequestClose={() => {
                        setModalVisible4(false);
                    }}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalLogout}>
                            <Text style={styles.textModal}>Tem certeza que quer pesquisar um código?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => { setModalVisible4(false) }}
                                    style={styles.buttonModalCancelar}
                                >
                                    <Text style={styles.textCancelar}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        fetchCopiedText();
                                        setModalVisible4(false)
                                    }
                                    }
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
                    visible={modalVisible5}
                    onRequestClose={() => {
                        setModalVisible5(false);
                    }}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalLogout}>
                            <Text style={styles.textModal}>Tem certeza que quer ler este QR Code?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => { setModalVisible5(false) }}
                                    style={styles.buttonModalCancelar}
                                >
                                    <Text style={styles.textCancelar}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible5(false);
                                        passaValor(dadoQR)
                                    }
                                    }
                                    style={styles.buttonModalSair}
                                >
                                    <Text style={styles.textSim}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
                            onPress={() => { setModalVisible4(true) }}
                            style={styles.icons}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textTab}>Pesquisar</Text>
                                <AntDesign name="search1" size={23} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.icons}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textTab}>Escanear</Text>
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