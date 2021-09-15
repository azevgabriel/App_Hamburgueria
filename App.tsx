import React from 'react';

import Welcome from './src/screens/Welcome';    //importação da página
import Header from './src/components/Header';    //importação da página
import CupomDescription from './src/screens/CupomDescription';    //importação da página
import AppLoading from 'expo-app-loading';
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'
import CadastroFoto from './src/components/CadastroFoto';

import NumberSetter from './src/co\mponents/NumberSetter';
import Cadastro from './src/screens/Cadastro';

import Confirmacao from './src/screens/Confirmacao';
import SeuPerfil from './src/screens/SeuPerfil';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return <CupomDescription id={''} usosPermitidos={0} usosRestantes={0} UrlImageCupom={''} title={''} validade={''} />
  }
  return (
    <CupomDescription id={''} usosPermitidos={0} usosRestantes={0} UrlImageCupom={''} title={''} validade={''} />
  );
}