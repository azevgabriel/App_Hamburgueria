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
import { CupomProps, UserCupomProps, UserProps } from '../../global/props';
import api from '../../services/api';

interface Props {
    user:UserProps
}
export function ViewCupons({ user }:Props) {
    var user_cupons:UserCupomProps[] = [];
    var [cupons,setCupons] = useState<CupomProps[]>([]);
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
            cupons[index] = cupom
        }
    }


    function handleCupomSelect(item: CupomProps){
        // Recebendo os dados do cupom, encaminhar para outra tela
    }
    return (
        <View style={styles.container}>
            <View style={styles.rowheader}>
                <View style={styles.viewheader}>
                    <Header />
                </View>
                <View style={styles.viewimage}>
                    <Image style={styles.image} source={{ uri: user.url_image_user }} />
                </View>
            </View>
             <FlatList
                data={cupons}
                keyExtractor={(item) => String(item.id_cupom)}
                renderItem={({ item }) => 
                    <Cupom

                        id_cupom={item.id_cupom}
                        usos_permitidos={item.usos_permitidos}
                        url_image_cupom={item.url_image_cupom}
                        title={item.title}
                        data_validade={item.data_validade}
                        onPress={() => handleCupomSelect(item)}
                    />
                }
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={styles.flatlist}
                onEndReachedThreshold={0.1}
            /> 
        </View>
    );
}