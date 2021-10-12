import React, { useEffect, useReducer, useState } from "react";

import AppLoading from "expo-app-loading";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";

import api from "./src/services/api";
import { CupomProps, UserProps } from "./src/global/props";

import NovoCumpom from './src/screens/NovoCupom';
import {ViewCupons} from './src/screens/ViewCupons';
import { Load } from "./src/components/Load";
import Cadastro from "./src/screens/Cadastro";
import Confirmacao from "./src/screens/Confirmacao";
import SeuPerfil from "./src/screens/SeuPerfil";
import CupomDescription from "./src/screens/CupomDescription";

export default function App() {
  const id_user = 12345678910; //id de exemplo
  const [user, setUser] = useState<UserProps>();
  const [cupom, setCupom] = useState<CupomProps>();


  async function fetchUser() {
    const response = await api.get("user?id=" + id_user);
    setUser(response.data[0]);
  }
  
  async function fetchCupom() {
    const response = await api.get("cupom?id=4894854684846");
    setCupom(response.data[0]);
  }
  useEffect(() => {
    fetchUser(); // busca o user de maneira assincrona
    fetchCupom();
  }, []);
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Load />;
  }
  if (!user) {
    //colocar mensagem de erro
    return <Load />;
  }
  if (!cupom) {
    //colocar mensagem de erro
    return <Load />;
  }
  return <CupomDescription cupom={cupom}/>;
}