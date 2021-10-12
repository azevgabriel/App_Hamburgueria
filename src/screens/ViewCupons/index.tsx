import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import BotaoTab  from '../../components/BotãoTab';
import { Load } from '../../components/Load';
import { CupomProps, UserCupomProps, UserProps } from '../../global/props';
import api from '../../services/api';
import userImg from '../../assets/hamburger.png';

interface Props {
    user:UserProps
}
interface Cupom_UserCupomProps{
    user_cupom:UserCupomProps;
    cupom: CupomProps;
}
export function ViewCupons({ user }:Props) {
    var user_cupons:UserCupomProps[] = [];
    var [cupons] = useState<CupomProps[]>([]);
    var [Allcupons, setAllCupons] = useState<CupomProps[]>([]);
    var [cupons_and_user_cupons] = useState<Cupom_UserCupomProps[]>([]);

    const [loadData, setLoadData] = useState(false);
    const [tipoUser, setTipoUser] = useState(1);

    useEffect(() => {
        fetchUser() // descobre que tipo o usuário é (adm ou comum)
    },[])

    async function fetchUserCupons() {
        const { data } = await api.get('user_cupom?user_id='+user.id);
        user_cupons = data;
        fetchCupons();
    }

    async function fetchCupons() {
        for (let index = 0; index < user_cupons.length; index++) {
            const id_cupom = user_cupons[index].coupon_id;
            const { data } = await api.get('cupom?id='+id_cupom);
            const cupom:CupomProps = data[0];
            cupons[index] = cupom;
            cupons_and_user_cupons[index] = {
                user_cupom : user_cupons[index],
                cupom: cupons[index]
            }
        }
        setLoadData(true);
    }

    async function fetchUser() {
        if(user.type === 0) { // admin
            setTipoUser(0);
            fetchAllCupons();
        }else{
            fetchUserCupons();
        }
    }

    async function fetchAllCupons() {
        const { data } = await api.get('cupom');
        const AllCuponsLoad:CupomProps[] = data;
        var NumCupons = 0;
        for (let i = 0; i < AllCuponsLoad.length; i++) {
            if(AllCuponsLoad[i].fidelity !== true){
                Allcupons[NumCupons] = AllCuponsLoad[i];
                NumCupons++;
            }
        }
        setLoadData(true);
    }


    function handleCupomSelect(item: CupomProps){
        // Recebendo os dados do cupom, encaminhar para outra tela do user padrao
        // Tela 7 passando como parametro o cupom e o tipo de usuario
    }
    function handleCupomSelectAdmin(item: CupomProps){
        // Recebendo os dados do cupom, encaminhar para outra tela do admin
        // Tela 7 passando como parametro o cupom e o tipo de usuario
    }
    return (
        <View style={styles.container}>
            <View style={styles.rowheader}>
                <View style={styles.viewheader}>
                    <Header id={user.id} name={user.name} type={user.type}/>
                </View>
                <View style={styles.viewimage}>
                    {
                        user.image
                        ?
                        <Image style={styles.image} source={{ uri: user.image }} />
                        :
                        <Image style={styles.image} source={require('../../assets/logo.png')} />
                    }
                </View>
            </View>
            {
                tipoUser
                ?
                <View style={styles.cuponsContainer}>
                {
                    loadData
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
                    <Load/>
                }
                </View>
                :
                <View style={styles.cuponsContainer}>
                {
                    loadData
                    ?
                    <FlatList
                    data={Allcupons}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => 
                        <Cupom
                        
                            cupom={item}
                            onPress={() => handleCupomSelectAdmin(item)}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={styles.flatlist}
                    onEndReachedThreshold={0.1}
                    /> 
                    :
                    <Load/>
                }
                </View>
            }
            
            <View style={styles.tab}>
                <BotaoTab 
                    title={"🏆 Fidelidade"}
                    style={styles.spaceTab}
                />
                <View style={styles.divisor} />
                {
                    tipoUser
                    
                    ?
                    
                    <BotaoTab 
                    title={"😎 Perfil"}
                    style={styles.spaceTab}
                    />

                    :

                    <BotaoTab 
                    title={"➕ Adicionar"}
                    style={styles.spaceTab}
                    />

                }
                
            </View>

        </View>
    );
}