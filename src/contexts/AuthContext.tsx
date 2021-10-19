import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

import { CupomProps, CupomPropsPost, NivelProps, UserProps, UserPropsPost } from '../global/props';
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
    listBurguerLevel: () => Promise<CupomProps[]>;
    logOut: () => Promise<void>;
    updateLevel: (data: NivelProps) => Promise<void>;
    
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
            image:data.image,
            cpf:data.cpf,
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
            id:data.id,
            image:data.image,
            name:data.name,
            password:data.password,
            phone:data.phone,
            burgers:user.burgers,
            cpf:user.cpf,
            level:user.level,
            type:user.type
        })
    }
    async function logOut() {
        //fazer funcao responsavel pela autenticao
    }
    async function listAllLevel() {
        const allLevels:NivelProps[] = [
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
    async function listBurguerLevel() {
        const cupomLevels:CupomProps[] = [
            {
              id: 4894854684846,
              permitted_uses: 1,
              image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
              title: "Atingiu Nivel 1",
              description: "Voce Atingiu o Nivel 1, agora voce tem 50% off na proxima compra",
              fidelity: true,
              level_id: 1,
              burgers_added: 5
            },
            {
              id: 1878764575,
              permitted_uses: 1,
              image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
              title: "Atingiu Nivel 2",
              description: "Voce Atingiu o Nivel 2, agora voce tem 30% off na proxima compra",
              fidelity: true,
              level_id: 2,
              burgers_added: 5
            },
            {
              id: 164786761786687,
              permitted_uses: 1,
              image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
              title: "Atingiu Nivel 3",
              description: "Voce Atingiu o Nivel 3, agora voce tem 30% off na proxima compra",
              fidelity: true,
              level_id: 3,
              burgers_added: 5
            },
            {
              id: 1745878671616,
              permitted_uses: 1,
              image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
              title: "Atingiu Nivel 4",
              description: "Voce Atingiu o Nivel 4, agora voce uma coca cola gratis",
              fidelity: true,
              level_id: 4,
              burgers_added: 5
            },
            {
              id: 1783475384751454567,
              permitted_uses: 100000,
              image: "https://www.adot.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adot-luminaria-infantil-estrela-01.jpg",
              title: "Atingiu Nivel 5",
              description: "Voce Atingiu o Nivel 5, agora voce Tem 5% gratis em qualquer compra",
              fidelity: true,
              level_id: 5,
              burgers_added: 5
            }
        ]
        return cupomLevels
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
    return (
        <AuthContext.Provider value={{
            user,
            login,
            signUp,
            update,
            logOut,
            loading,
            listAllLevel,
            listBurguerLevel,
            newCupom,
            updateCupom,
            updateLevel
        }}>
            {children}
        </AuthContext.Provider>
    );
}