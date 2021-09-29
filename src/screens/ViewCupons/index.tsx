/**
 * 
 * Alert
 * 
 * Verificar o tipo de usuario e fazer as alterações necessarias na pagina
 * 
 * Exemplo : tipo_user: 0 || 1
 */

import React, { useEffect, useState } from 'react';

import {
    View,
    FlatList,
    Image,
    Text
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
    var [cupons_and_user_cupons] = useState<Cupom_UserCupomProps[]>([]);

    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        fetchUserCupons() // busca os cupons de maneira assincrona
    },[])

    async function fetchUserCupons() {
        const { data } = await api.get('user_cupom?id_user='+user.id_user);
        user_cupons = data;
        fetchCupons();
    }

    async function fetchCupons() {
        for (let index = 0; index < user_cupons.length; index++) {
            const id_cupom = user_cupons[index].id_cupom;
            const { data } = await api.get('cupom?id_cupom='+id_cupom);
            const cupom:CupomProps = data[0];
            cupons[index] = cupom;
            cupons_and_user_cupons[index] = {
                user_cupom : user_cupons[index],
                cupom: cupons[index]
            }
        }
        setLoadData(true);
    }


    function handleCupomSelect(item: CupomProps){
        // Recebendo os dados do cupom, encaminhar para outra tela
    }
    return (
        <View style={styles.container}>
            <View style={styles.rowheader}>
                <View style={styles.viewheader}>
                    <Header id_user={user.id_user} name={user.name}/>
                </View>
                <View style={styles.viewimage}>
                    {
                        user.url_image_user
                        ?
                        <Image style={styles.image} source={{ uri: user.url_image_user }} />
                        :
                        <Image style={styles.image} source={require('../../assets/logo.png')} />
                    }
                </View>
            </View>
            {
                loadData

                ?

                <FlatList
                data={cupons_and_user_cupons}
                keyExtractor={(item) => String(item.cupom.id_cupom)}
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
            
            <View style={styles.tab}>
                <BotaoTab 
                    title={"🏆 Fidelidade"}
                    style={styles.spaceTab}
                />
                <View style={styles.divisor} />
                <BotaoTab 
                    title={"😎 Perfil"}
                    style={styles.spaceTab}
                />
            </View>

        </View>
    );
}