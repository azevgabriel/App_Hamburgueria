import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    ToastAndroid,
    Text
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import BotaoTab from '../../components/BotãoTab';
import { Load } from '../../components/Load';
import  QRScanner  from '../../components/QRScanner';
import { CupomProps, UserCupomProps, UserProps } from '../../global/props';
import api from '../../services/api';
import userImg from '../../assets/hamburger.png';
import { AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList>;
interface Cupom_UserCupomProps {
    user_cupom: UserCupomProps;
    cupom: CupomProps;
}
export function ViewCupons({ navigation }: Props) {
    var user_cupons: UserCupomProps[] = [];
    var [cupons] = useState<CupomProps[]>([]);
    var [Allcupons, setAllCupons] = useState<CupomProps[]>([]);
    var [cupons_and_user_cupons, setCupons_and_user_cupons] = useState<Cupom_UserCupomProps[]>([]);
    const [loadData, setLoadData] = useState(false);
    const { user, loading } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);

    const onCodeScanned = (type: string, data: string) => {
        console.log(data);
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
            fetchUserCupons()
            :
            fetchAllCupons()
    }, [])

    async function fetchUserCupons() {

        // Antigo Fetch
        //
        // const { data } = await api.get('user_cupom?user_id='+user.id);
        // user_cupons = data;
        //

        /**
         * ===========================================
         * VALORES DE TESTES POIS O BACK NAO FUNCIONOU
         * ===========================================
         */
        user_cupons = [
            {
                id: 17861789178278718,
                user_id: 841618566,
                coupon_id: 46187827871827871,
                remaining_uses: 1
            },
            {
                id: 4448148217871198781,
                user_id: 841618566,
                coupon_id: 4894854684846,
                remaining_uses: 1
            }
        ]
        fetchCupons();
    }

    async function fetchCupons() {

        /**
         * ===========================================
         * VALORES DE TESTES POIS O BACK NAO FUNCIONOU
         * ===========================================
         */
        cupons = [
            {
                id: 46187827871827871,
                permitted_uses: 2,
                image: "https://www.receitasetemperos.com.br/wp-content/uploads/2019/02/Imagem-1copy.jpg",
                title: "Na compra de hamburguer teste maximo de charactere",
                expiration_date: "25/12/2021",
                description: "Na compra de um hamburguer o proximo lanche sai de graça, Alem disso estou testando tamanho dde char",
                fidelity: false,
                level_id: 0,
                burgers_added: 4
            },
            {
                id: 4894854684846,
                permitted_uses: 1,
                image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
                title: "Atingiu Nivel 1",
                description: "Voce Atingiu o Nivel 1, agora voce tem 50% off na proxima compra",
                fidelity: true,
                level_id: 1,
                burgers_added: 0
            }
        ]
        for (let index = 0; index < user_cupons.length; index++) {
            const id_cupom = user_cupons[index].coupon_id;
            // Antigo Fetch
            //
            // const { data } = await api.get('cupom?id='+id_cupom);
            // const cupom:CupomProps = data[0];
            // cupons[index] = cupom;
            cupons_and_user_cupons[index] = {
                user_cupom : user_cupons[index],
                cupom: cupons[index]
            }
        }
        setLoadData(true);
    }

    async function fetchAllCupons() {
        // Antigo Fetch
        //
        // const { data } = await api.get('cupom');
        // const AllCuponsLoad:CupomProps[] = data;
        // var NumCupons = 0;
        // for (let i = 0; i < AllCuponsLoad.length; i++) {
        //     if(AllCuponsLoad[i].fidelity !== true){
        //         Allcupons[NumCupons] = AllCuponsLoad[i];
        //         NumCupons++;
        //     }
        // }

        /**
         * ===========================================
         * VALORES DE TESTES POIS O BACK NAO FUNCIONOU
         * ===========================================
         */
        setAllCupons([
            {
                id: 9871891786628718962,
                permitted_uses: 3,
                image: "https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg",
                title: "15% Off",
                expiration_date: "25/12/2021",
                description: "Ganhe 5% Off na sua proxima compra",
                fidelity: false,
                level_id: 0,
                burgers_added: 3
            },
            {
                id: 46187827871827871,
                permitted_uses: 2,
                image: "https://www.receitasetemperos.com.br/wp-content/uploads/2019/02/Imagem-1copy.jpg",
                title: "Na compra de hamburguer teste maximo de charactere",
                expiration_date: "25/12/2021",
                description: "Na compra de um hamburguer o proximo lanche sai de graça, Alem disso estou testando tamanho dde char",
                fidelity: false,
                level_id: 0,
                burgers_added: 4
            }
        ])
        setLoadData(true);
    }

    function handleCupomSelect(item: CupomProps) {
        
        navigation.navigate('CupomDescription',{
            cupom: item
        });
    }

    function handleProfile(){
        navigation.navigate('SeuPerfil');
    }

    function handleAdd(){
        navigation.navigate('NovoCupom',{})
    }
    
    function handleFidelity(){
        user.type
        ?
        navigation.navigate('FidelidadeTela')
        :
        navigation.navigate('VisualizarFidelidade')
    }
    function handleQrCodeColeted(id_user_cupom: number){
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
                        <QRScanner onCodeScanned = {onCodeScanned} />
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

                'NA'

                :

                <View style={styles.QRCode}>
                    <TextInput
                        placeholder="Cole o código aqui"
                        style={styles.inputQRCode}
                    />
                    <TouchableOpacity style={styles.icons}>
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

            <View style={styles.tab}>
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