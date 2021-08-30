import React from 'react';

import Welcome from './src/screens/Welcome';    //importação da página
import Header from './src/components/Header';    //importação da página
import AppLoading from 'expo-app-loading';
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'
import CadastroFoto from './src/components/CadastroFoto';

import NumberSetter from './src/components/NumberSetter';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NumberSetter
      title={'Hamburguinhos'}
    />
  );
}