import React from 'react';

import Welcome from './src/screens/Welcome';    //importação da página
import AppLoading from 'expo-app-loading';
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost'

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Welcome />
  );
}