import React, { useEffect} from "react";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";

import { Load } from "./src/components/Load";
import Routes from "./src/routes";

export default function App() {
  // const id_user = 12345678910; //id de exemplo
  // const id_cupom = 9871891786628718962 //id de exemplo
  // const [user, setUser] = useState<UserProps>();
  // const [cupom, setCupom] = useState<CupomProps>();


  // async function fetchUser() {
  //   const response = await api.get("user?id=" + id_user);
  //   setUser(response.data[0]);
  // }
  
  // async function fetchCupom() {
  //   const response = await api.get("cupom?id=" + id_cupom);
  //   setCupom(response.data[0]);
  // }

  useEffect(() => {
    // fetchUser(); // busca o user de maneira assincrona
    // fetchCupom();
  }, []);

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Load />;
  }
  // if (!user) {
  //   //colocar mensagem de erro
  //   return <Load />;
  // }
  // if (!cupom) {
  //   //colocar mensagem de erro
  //   return <Load />;
  // }

  return <Routes/>;
}