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
    create_user_cupom: (cupom_id: number, user_id: number) => Promise<void>;
    fetchUser_Cupons: (user_id: number) => Promise<UserCupomProps[]>;
    fetch_Cupons: (user_cupons: UserCupomProps[]) => Promise<Cupom_UserCupomProps[]>;
    edit_all_values: (id_user: string, id_cupom: string) => Promise<void>;
    set_User: (user: UserProps) => void;
    deleteCupons: () => Promise<void>;
    list_One_User: () => Promise<UserProps>;
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
    var [cupons, setCupons] = useState<CupomProps[]>([] as CupomProps[])
    const [loading, setLoading] = useState(false);

    async function list_One_User() {
        const { data } = await api.get<UserProps>(`/users/${user.id}`)
        return data;
    }
    async function deleteCupons() {
        console.log('deletando cupons vencidos...')
        await api.delete('/coupons');
    }
    // Finish
    function set_User(user: UserProps) {
        setUser(user);
    }
    // Finish
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
    // Finish
    async function signUp(data: UserPropsPost) {
        const response = await api.post<UserProps>(`/register`, data)
    }
    // Finish
    async function update(data: UserProps, oldPassword: string) {
        const OldUser = user;
        const response = await api.put<UserProps>(`/users/${data.id}`, data)
        if (response) {
            const response = await api.put(`/users/${data.id}/password`, {
                password: data.password,
                oldPassword: oldPassword
            })
            if (response.data.message == "Senha antiga incorreta") {
                await api.put<UserProps>(`/users/${data.id}`, OldUser)
                throw new Error("Senha antiga está incorreta");
            } else {
                const userString = JSON.stringify(data);
                await AsyncStorage.setItem('@Hamburgueria:USER', userString);
                setUser(data);
            }
        }
    }
    // Finish
    const listAllLevel = useCallback(async () => {
        const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN')
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get<NivelProps[]>('/levels')
        return data
    }, []);
    // Finish
    async function listCupons() {

        const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN')
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get<CupomProps[]>('/coupons')
        setCupons(data)
        return data
    }
    // Finish
    async function newCupom(data: CupomPropsPost) {
        const response = await api.post<CupomProps>(`/coupons`, data)
    }
    // Finish
    async function updateCupom(data: CupomProps) {
        const response = await api.put<CupomPropsPost>(`/coupons/${data.id}`, data)
        if (response) {
            listCupons();
        }
    }
    // Finish
    const updateLevel = useCallback(async (data: NivelProps) => {
        const response = await api.put<NivelProps>(`/levels/${data.id}`, {
            burgers_needed: data.burgers_needed,
        })
    }, []);
    async function create_user_cupom(cupom_id: number, user_id: number) {
        const { data } = await api.post(`/userCoupon`, {
            user_id,
            coupon_id: cupom_id
        })
    }
    // Finish
    async function fetchUser_Cupons(user_id: number) {

        const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN')
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get<UserCupomProps[]>(`/userCoupon/${user_id}`)
        return data
    }
    // Finish
    async function fetch_Cupons(user_cupons: UserCupomProps[]) {

        var cupons_and_user_cupons: Cupom_UserCupomProps[] = []

        for (let index = 0; index < user_cupons.length; index++) {
            const id_cupom = user_cupons[index].coupon_id;
            const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN')
            api.defaults.headers.authorization = `Bearer ${token}`;
            const { data } = await api.get<CupomProps>(`/coupons/${id_cupom}`)
            const cupom: CupomProps = data;
            cupons[index] = cupom;
            cupons_and_user_cupons[index] = {
                user_cupom: user_cupons[index],
                cupom: cupons[index]
            }
        }
        return cupons_and_user_cupons
    }
    // Finish
    async function edit_all_values(id_user: string, id_cupom: string) {
        const { data } = await api.put(`/userCoupon/${id_user}/coupon/${id_cupom}`)
    }
    // Finish
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
            list_One_User,
            updateCupom,
            updateLevel,
            create_user_cupom,
            fetchUser_Cupons,
            fetch_Cupons,
            edit_all_values,
            set_User,
            deleteCupons,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}