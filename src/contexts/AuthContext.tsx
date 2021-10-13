import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";

import { UserProps } from '../global/props';

type loginType = {
    cpf: string;
    senha: string;
}

const user: UserProps = {
    id: 5,
    burgers: 5,
    cpf: '123456789',
    level: 1,
    name: "Maria Teste",
    password: "123456",
    phone: '35123456789',
    type: 0,
}


type AuthContextType = {
    user: UserProps;
    login: (data: loginType) => Promise<void>;
    signUp: (data: UserProps) => Promise<void>;
    logOut: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const login = useCallback(async(data: loginType) => {  // fazer login

        //fazer funcao responsavel pela autenticao

    },[]);

    const signUp = useCallback(async(data: UserProps) => {  //fazer cadastro

        //fazer funcao responsavel pela autenticao

    },[]);

    const logOut = useCallback(async() => {  // fazer login

        //fazer funcao responsavel pela autenticao

    },[]);

    return (
        <AuthContext.Provider value={{
            user,
            login,
            signUp,
            logOut
          }}>
          {props.children}
        </AuthContext.Provider>
      );
    }
