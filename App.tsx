import React, { useEffect, useReducer, useState } from "react";

import AppLoading from "expo-app-loading";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";

import api from "./src/services/api";
import { UserProps } from "./src/global/props";
import { LevelRegistration } from "./src/screens/LevelRegistration";

import NovoCumpom from './src/screens/NovoCupom';

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
    return <NovoCumpom />;
  }
  if (!user) {
    //colocar mensagem de erro
    return <NovoCumpom />;
  }
  return <NovoCumpom />;
}