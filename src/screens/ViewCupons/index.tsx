import React from 'react';

import {
    View,
    FlatList,
    Image,
    Text
} from 'react-native';

import { styles } from './styles';
import Header from '../../components/Header';
import { Cupom } from '../../components/Cupom';
import { CupomProps } from '../../global/props';

interface Props {
    UrlImage: string;
}

export function ViewCupons({ UrlImage }: Props) {

    function handleCupomSelect(item: CupomProps){
        console.log(item)
        // Recebendo os dados do cupom, encaminhar para outra tela
    }

    //Array Fake de Cupons, usar o useState ao receber os dados (depois deletar cupons com o usoRestante 0)
    const ArrayCupons = [
        {
            id: '1',
            usosPermitidos: 3,
            usosRestantes: 2,
            UrlImageCupom: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg',
            title: '15% Off',
            validade: '21/06/2021'
        },
        {
            id: '2',
            usosPermitidos: 5,
            usosRestantes: 0,
            UrlImageCupom: 'https://www.receitasetemperos.com.br/wp-content/uploads/2019/02/Imagem-1copy.jpg',
            title: 'Lanche da Tarde',
            validade: '22/08/2019'
        },
        {
            id: '3',
            usosPermitidos: 3,
            usosRestantes: 2,
            UrlImageCupom: 'https://img.elo7.com.br/product/zoom/1AE2D67/adesivo-hamburguer-hamburgueria-lanche-pao-sanduiche-s10-adesivo-lanchonete.jpg',
            title: '15% Off',
            validade: '21/06/2021'
        },
        {
            id: '4',
            usosPermitidos: 5,
            usosRestantes: 0,
            UrlImageCupom: 'https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg',
            title: 'Lanche da Tarde',
            validade: '22/08/2019'
        },
        {
            id: '5',
            usosPermitidos: 3,
            usosRestantes: 2,
            UrlImageCupom: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg',
            title: '15% Off',
            validade: '21/06/2021'
        },
        {
            id: '6',
            usosPermitidos: 5,
            usosRestantes: 0,
            UrlImageCupom: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2019/03/hamburguergourmet654.jpg',
            title: 'Lanche da Tarde',
            validade: '22/08/2019'
        },
    ]
    
    return (

        <View style={styles.container}>
            <View style={styles.rowheader}>
                <View style={styles.viewheader}>
                    <Header />
                </View>
                <View style={styles.viewimage}>
                    <Image style={styles.image} source={{ uri: UrlImage }} />
                </View>
            </View>
            <FlatList
                data={ArrayCupons}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => 
                    <Cupom
                        id={item.id}
                        usosPermitidos={item.usosPermitidos}
                        usosRestantes={item.usosRestantes}
                        UrlImageCupom={item.UrlImageCupom}
                        title={item.title}
                        validade={item.validade}
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