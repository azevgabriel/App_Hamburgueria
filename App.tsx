import React, { useEffect, useReducer, useState } from "react";

import AppLoading from "expo-app-loading";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";

import { AuthContextProvider } from './src/contexts/AuthContext';

import api from "./src/services/api";
import { CupomProps, UserProps } from "./src/global/props";

import Routes from './src/routes';

import NovoCumpom from './src/screens/NovoCupom';
import {ViewCupons} from './src/screens/ViewCupons';
import { Load } from "./src/components/Load";
import Cadastro from "./src/screens/Cadastro";
import Confirmacao from "./src/screens/Confirmacao";
import SeuPerfil from "./src/screens/SeuPerfil";
import CupomDescription from "./src/screens/CupomDescription";
import Welcome from "./src/screens/Welcome";
import WelcomeAgain from "./src/screens/WelcomeAgain";
import QrCode from "./src/screens/QrCode";
import FidelidadeTela from "./src/screens/FidelidadeTela";
import { LevelRegistration } from "./src/screens/LevelRegistration";

export default function App() {
  const id_user = 12345678910; //id de exemplo
  const id_cupom = 9871891786628718962 //id de exemplo
  const [user, setUser] = useState<UserProps>();
  const [cupom, setCupom] = useState<CupomProps>();


  // async function fetchUser() {
  //   const response = await api.get("user?id=" + id_user);
  //   setUser(response.data[0]);
  // }
  
  // async function fetchCupom() {
  //   const response = await api.get("cupom?id=" + id_cupom);
  //   setCupom(response.data[0]);
  // }

  // useEffect(() => {
  //   fetchUser(); // busca o user de maneira assincrona
  //   fetchCupom();
  // }, []);

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    });

  if (!fontsLoaded) {
    return <AuthContextProvider>
    <Routes />;
  </AuthContextProvider>
  }
  if (!user) {
    //colocar mensagem de erro
    return <AuthContextProvider>
    <Routes />;
  </AuthContextProvider>
  }
  if (!cupom) {
    //colocar mensagem de erro
    return<AuthContextProvider>
    <Routes />;
  </AuthContextProvider>
  }


  return 
  
  <AuthContextProvider>
    <Routes />;
  </AuthContextProvider>
  
}