import React, { useEffect, useReducer, useState } from "react";

import Welcome from "./src/screens/Welcome"; //importação da página
import Header from "./src/components/Header"; //importação da página
import CupomDescription from "./src/screens/CupomDescription"; //importação da página
import AppLoading from "expo-app-loading";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";
import CadastroFoto from "./src/components/CadastroFoto";

import NumberSetter from "./src/components/NumberSetter";
import Cadastro from "./src/screens/Cadastro";

import Confirmacao from "./src/screens/Confirmacao";
import SeuPerfil from "./src/screens/SeuPerfil";
import QrCode from "./src/screens/QrCode";
import { ViewCupons } from "./src/screens/ViewCupons";
import FidelidadeTela from "./src/screens/FidelidadeTela";
import VisualizarFidelidade from "./src/screens/VisualizarFidelidade";
import api from "./src/services/api";
import { UserProps } from "./src/global/props";

export default function App() {
  const id_user = "55bbcf7c-1af9-11ec-9621-0242ac130002"; //id de exemplo
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("user?id_user=" + id_user);
      setUser(response.data[0]);
    }
    fetchUser(); // busca o user de maneira assincrona
  }, []);
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <VisualizarFidelidade id_cupom={""} />;
  }
  if (!user) {
    //colocar mensagem de erro
    return <VisualizarFidelidade id_cupom={""} />;
  }
  return <VisualizarFidelidade id_cupom={""} />;
}