import React, { useEffect } from "react";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";

import { Load } from "./src/components/Load";
import Routes from "./src/routes";
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {

  useEffect(() => {
  }, []);

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Load />;
  }

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}