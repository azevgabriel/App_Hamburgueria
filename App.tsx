import React, { useEffect, useReducer, useState } from "react";

import AppLoading from "expo-app-loading";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";

import api from "./src/services/api";
import { UserProps } from "./src/global/props";

import Routes from './src/routes';

import NovoCumpom from './src/screens/NovoCupom';
import {ViewCupons} from './src/screens/ViewCupons';

export default function App() {
  const id_user = 12345678910; //id de exemplo
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("user?id=" + id_user);
      setUser(response.data[0]);
    }
    fetchUser(); // busca o user de maneira assincrona
  }, []);
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Routes />;
  }
  if (!user) {
    //colocar mensagem de erro
    return <Routes />;
  }
  return <Routes />;
}