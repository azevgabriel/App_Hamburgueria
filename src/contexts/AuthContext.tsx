import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

import { CupomProps, UserProps } from '../global/props';
import api from "../services/api";

type loginType = {
    cpf: string;
    senha: string;
}
interface AuthContextData {
    user: UserProps;
    login: (data: loginType) => Promise<void>;
    signUp: (data: UserProps) => Promise<void>;
    logOut: () => Promise<void>;
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
            //parte teste pois o post nao funcionaou
                //
                // User normal (1)
                    // const userReturn = {
                    //     id: 841618566,
                    //     type: 1,
                    //     name: "Gabriel Azevedo",
                    //     cpf: "085.747.566-96",
                    //     phone: "(35)999999999",
                    //     password: "698dc19d489c4e4db73e28a713eab07b",
                    //     image: "https://avatars.githubusercontent.com/u/73303855?v=4",
                    //     level: 1,
                    //     burgers: 5,
                    // }
                //
                // User Admin (0)
                    const userReturn = {
                        id: 12345678910,
                        type: 0,
                        name: "Maximo Characteres a",
                        cpf: "555.757.566-55",
                        phone: "(35)777777777",
                        password: "698dc19d489c4e4db73e28a713eab07b",
                        image: "https://github.com/thevinex.png",
                    }
            setUser(userReturn)

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
    async function signUp(data: UserProps) {
        //fazer funcao responsavel pela autenticao
    }
    async function logOut() {
        //fazer funcao responsavel pela autenticao
    }
    return (
        <AuthContext.Provider value={{
            user,
            login,
            signUp,
            logOut,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
}