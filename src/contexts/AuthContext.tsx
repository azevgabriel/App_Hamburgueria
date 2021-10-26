import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

import { CupomProps, CupomPropsPost, Cupom_UserCupomProps, NivelProps, RootStackParamList, UserCupomProps, UserProps, UserPropsPost } from '../global/props';
import { api } from "../services/api";

import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { UseProps } from "react-native-svg";

type Props = NativeStackScreenProps<RootStackParamList>;

type loginType = {
    cpf: string;
    senha: string;
}
interface AuthContextData {
    user: UserProps;
    login: (data: loginType, isAdmin: boolean) => Promise<void>;
    signUp: (data: UserPropsPost) => Promise<void>;
    update: (data: UserProps, oldPassword: string) => Promise<void>;
    newCupom: (data: CupomPropsPost) => Promise<void>;
    updateCupom: (data: CupomProps) => Promise<void>;
    listAllLevel: () => Promise<NivelProps[]>;
    listCupons: () => Promise<CupomProps[]>;
    updateLevel: (data: NivelProps) => Promise<void>;
    create_user_cupom: (cupom_id: number, user: UserProps) => Promise<void>;
    fetchUser_Cupons: (user_id: number) => Promise<UserCupomProps[]>;
    fetch_Cupons: (user_cupons: UserCupomProps[]) => Promise<Cupom_UserCupomProps[]>;
    edit_all_values: (id_user_cupom: number) => Promise<void>;
    set_User: (user: UserProps) => void;
    loading: boolean;
    logOut: () => Promise<void>
}
interface AuthProviderProps {
    children: ReactNode;
}
interface signInResponse {
    token: {
        token: string;
    };
    user: UserProps;
}
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

    var [user, setUser] = useState<UserProps>({} as UserProps)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadStorageData();
    }, [])

    function set_User(user: UserProps) {
        setUser(user);
    }
    async function loadStorageData() {
        const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN');
        const user = await AsyncStorage.getItem('@Hamburgueria:USER');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            setUser(JSON.parse(user));
        }
    }

    const login = useCallback(async (data: loginType, isAdmin: boolean) => {
        var response;
        if (isAdmin) {
            response = await api.post<signInResponse>('/login/admin', {
                cpf: data.cpf,
                password: data.senha
            })
        } else {
            response = await api.post<signInResponse>('/login', {
                cpf: data.cpf,
                password: data.senha
            })
        }
        setLoading(true);
        const { token, user } = response.data;
        const userString = JSON.stringify(user);
        await AsyncStorage.setItem('@Hamburgueria:TOKEN', token.token);
        await AsyncStorage.setItem('@Hamburgueria:USER', userString);

        api.defaults.headers.authorization = `Bearer ${token}`;
        setUser(user);
        setLoading(false)
    }, []);
    async function signUp(data: UserPropsPost) {
        //Teste:
        //
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
        // Chamar a Rota
        //
    }
    async function update(data: UserProps, oldPassword: string) {
        // Teste
        //
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
        console.log(data, oldPassword)
    }
    async function listAllLevel() {
        // Teste
        //
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
        // Fazer Rota
        //

        return allLevels
    }
    async function listCupons() {
        // Teste
        //
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
        // Fazer Rota
        //
        return cupons
    }
    async function newCupom(data: CupomPropsPost) {
        // Teste
        //
        console.log(data)
        // Fazer Rota
        //
    }
    async function updateCupom(data: CupomProps) {
        // Teste
        //
        console.log(data)
        // Fazer Rota
        //
    }
    async function updateLevel(data: NivelProps) {
        // Teste
        //
        console.log(data)
        // Fazer Rota
        //
    }
    async function create_user_cupom(cupom_id: number, user: UserProps) {

        // Teste
        //
        console.log(cupom_id, user)
        // Fazer Rota
        //
    }
    async function fetchUser_Cupons(user_id: number) {
        // Teste
        //
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
        // Fazer Rota
        //
        return user_cupons
    }
    async function fetch_Cupons(user_cupons: UserCupomProps[]) {

        var cupons_and_user_cupons: Cupom_UserCupomProps[] = []
        // Teste
        //
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
        // Teste
        //
        console.log(id_user_cupom)
        // Fazer Rota
        //
    }
    async function logOut() {
        await AsyncStorage.clear()
        setUser({} as UserProps);
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
            edit_all_values,
            set_User,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}