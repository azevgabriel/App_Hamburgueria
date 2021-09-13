import React from 'react';

import Welcome from './src/screens/Welcome';    //importação da página
import Header from './src/components/Header';    //importação da página
import CupomDescription from './src/screens/CupomDescription';    //importação da página
import AppLoading from 'expo-app-loading';
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'
import CadastroFoto from './src/components/CadastroFoto';

import NumberSetter from './src/co\mponents/NumberSetter';
import Cadastro from './src/screens/Cadastro';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <CupomDescription id={''} usosPermitidos={0} usosRestantes={0} UrlImageCupom={''} title={''} validade={''}/>
  );
}