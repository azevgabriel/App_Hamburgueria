import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

import { CupomProps, CupomPropsPost, Cupom_UserCupomProps, NivelProps, UserCupomProps, UserProps, UserPropsPost } from '../global/props';
import api from "../services/api";

type loginType = {
    cpf: string;
    senha: string;
}
interface AuthContextData {
    user: UserProps;
    login: (data: loginType) => Promise<void>;
    signUp: (data: UserPropsPost) => Promise<void>;
    update: (data: UserProps) => Promise<void>;
    newCupom: (data: CupomPropsPost) => Promise<void>;
    updateCupom: (data: CupomProps) => Promise<void>;
    listAllLevel: () => Promise<NivelProps[]>;
    listCupons: () => Promise<CupomProps[]>;
    updateLevel: (data: NivelProps) => Promise<void>;
    create_user_cupom: (cupom_id: number, user: UserProps) => Promise<void>;
    fetchUser_Cupons: (user_id: number) => Promise<UserCupomProps[]>;
    fetch_Cupons: (user_cupons: UserCupomProps[]) => Promise<Cupom_UserCupomProps[]>;
    edit_all_values: (id_user_cupom: number) => Promise<void>;
    loading: boolean;
}
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    var [user, setUser] = useState<UserProps>({} as UserProps)
    const [loading, setLoading] = useState(false);

    async function login(data: loginType) {
        try {
            setLoading(true);
            /**
             * ===========================================
             * VALORES DE TESTES POIS O BACK NAO FUNCIONOU
             * ===========================================
             */
            //User normal (1)
            const userReturn1 = {
                id: 841618566,
                type: 1,
                name: "Gabriel Azevedo",
                cpf: "085.747.566-96",
                phone: "(35)999999999",
                password: "698dc19d489c4e4db73e28a713eab07b",
                image: "https://avatars.githubusercontent.com/u/73303855?v=4",
                level: 1,
                burgers: 17,
            }
            // User Admin (0)
            const userReturn2 = {
                id: 12345678910,
                type: 0,
                name: "Maximo Characteres a",
                cpf: "555.757.566-55",
                phone: "(35)777777777",
                password: "698dc19d489c4e4db73e28a713eab07b",
                image: "https://github.com/thevinex.png",
            }
            /**
             * ===========================================
             *                      FIM 
             * ===========================================
             */

            setUser(userReturn1)

            // Rota post para buscar o usuario (testar entre as duas rotas depois)
            //
            // const response = await api.post('login',{
            //     cpf : data.cpf,
            //     password : data.senha
            // })

        } catch {
            Alert.alert('Erro ao Fazer Login')
        }
        finally {
            setLoading(false)
        }
    }
    async function signUp(data: UserPropsPost) {
        // fazer post
        //
        //teste:
        setUser({
            id: 5206566505,
            image: data.image,
            cpf: data.cpf,
            phone: data.phone,
            password: data.password,
            name: data.name,
            burgers: 0,
            level: 0,
            type: 1,
        })
    }
    async function update(data: UserProps) {
        setUser({
            id: data.id,
            image: data.image,
            name: data.name,
            password: data.password,
            phone: data.phone,
            burgers: user.burgers,
            cpf: user.cpf,
            level: user.level,
            type: user.type
        })
    }
    async function listAllLevel() {
        const allLevels: NivelProps[] = [
            {
                id: 1111111111111,
                level: 1,
                burgers_needed: 15
            },
            {
                id: 2084804890480404,
                level: 2,
                burgers_needed: 30
            },
            {
                id: 7070707087287189611,
                level: 3,
                burgers_needed: 70
            },
            {
                id: 15515515515158058485,
                level: 4,
                burgers_needed: 155
            },
            {
                id: 2002000202020220202020,
                level: 5,
                burgers_needed: 200
            }
        ]
        return allLevels
    }
    async function listCupons() {
        // exemplo de fetch
        // const { data } = await api.get('cupom');

        /**
         * ===========================================
         * VALORES DE TESTES POIS O BACK NAO FUNCIONOU
         * ===========================================
         */

        const cupons: CupomProps[] = [
            {
                id: 4894854684846,
                permitted_uses: 1,
                image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
                title: "Atingiu Nivel 1",
                description: "Voce Atingiu o Nivel 1, agora voce tem 50% off na proxima compra",
                fidelity: true,
                level_id: 1111111111111,
                burgers_added: 5
            },
            {
                id: 1878764575,
                permitted_uses: 1,
                image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
                title: "Atingiu Nivel 2",
                description: "Voce Atingiu o Nivel 2, agora voce tem 30% off na proxima compra",
                fidelity: true,
                level_id: 2084804890480404,
                burgers_added: 5
            },
            {
                id: 164786761786687,
                permitted_uses: 1,
                image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
                title: "Atingiu Nivel 3",
                description: "Voce Atingiu o Nivel 3, agora voce tem 30% off na proxima compra",
                fidelity: true,
                level_id: 7070707087287189611,
                burgers_added: 5
            },
            {
                id: 1745878671616,
                permitted_uses: 1,
                image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
                title: "Atingiu Nivel 4",
                description: "Voce Atingiu o Nivel 4, agora voce uma coca cola gratis",
                fidelity: true,
                level_id: 15515515515158058485,
                burgers_added: 5
            },
            {
                id: 1783475384751454567,
                permitted_uses: 100000,
                image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
                title: "Atingiu Nivel 5",
                description: "Voce Atingiu o Nivel 5, agora voce Tem 5% gratis em qualquer compra",
                fidelity: true,
                level_id: 2002000202020220202020,
                burgers_added: 5
            }, {
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
        ]
        return cupons
    }
    async function newCupom(data: CupomPropsPost) {
        // Fazer post cadastro de cupons
        //
        // Teste
        console.log(data)
    }
    async function updateCupom(data: CupomProps) {
        // Fazer post update de cupons
        //
        // Teste
        console.log(data)
    }
    async function updateLevel(data: NivelProps) {
        // Fazer post update de level
        //
        // Teste
        console.log(data)
    }
    async function create_user_cupom(cupom_id: number, user: UserProps) {
        console.log(cupom_id, user)
    }
    async function fetchUser_Cupons(user_id: number) {
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
        const user_cupons: UserCupomProps[] = [
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
        return user_cupons
    }
    async function fetch_Cupons(user_cupons: UserCupomProps[]) {
        /**
         * ===========================================
         * VALORES DE TESTES POIS O BACK NAO FUNCIONOU
         * ===========================================
         */
        const cupons = [
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
        var cupons_and_user_cupons: Cupom_UserCupomProps[] = []
        for (let index = 0; index < user_cupons.length; index++) {
            const id_cupom = user_cupons[index].coupon_id;
            // Antigo Fetch
            //
            // const { data } = await api.get('cupom?id='+id_cupom);
            // const cupom:CupomProps = data[0];
            // cupons[index] = cupom;
            cupons_and_user_cupons[index] = {
                user_cupom: user_cupons[index],
                cupom: cupons[index]
            }
        }
        return cupons_and_user_cupons
    }
    async function edit_all_values(id_user_cupom: number) {
        console.log(id_user_cupom)
    }
    return (
        <AuthContext.Provider value={{
            user,
            login,
            signUp,
            update,
            loading,
            listAllLevel,
            listCupons,
            newCupom,
            updateCupom,
            updateLevel,
            create_user_cupom,
            fetchUser_Cupons,
            fetch_Cupons,
            edit_all_values
        }}>
            {children}
        </AuthContext.Provider>
    );
}