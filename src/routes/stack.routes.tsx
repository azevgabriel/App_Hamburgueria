import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "../screens/Welcome";
import Cadastro from '../screens/Cadastro';
import Confirmacao from '../screens/Confirmacao';
import CupomDescription from '../screens/CupomDescription';
import FidelidadeTela from '../screens/FidelidadeTela';
import {LevelRegistration} from '../screens/LevelRegistration';
import NovoCupom from '../screens/NovoCupom';
import PassouNivel from '../screens/PassouNivel';
import QrCode from "../screens/QrCode";
import SeuPerfil from "../screens/SeuPerfil";
import VisualizarFidelidade from '../screens/VisualizarFidelidade';
import { ViewCupons } from '../screens/ViewCupons';
import WelcomeAgain from "../screens/WelcomeAgain";

const Stack = createNativeStackNavigator();

const AppRoutes: React.FC = () =>(

    <Stack.Navigator>

        <Stack.Screen
            name="Welcome"
            component={Welcome}
        />

        <Stack.Screen
            name="Cadastro"
            component={Cadastro}
        />

        <Stack.Screen
            name="Confirmacao"
            component={Confirmacao}
        />

        <Stack.Screen
            name="CupomDescription"
            component={CupomDescription}
        />

        <Stack.Screen
            name="FidelidadeTela"
            component={FidelidadeTela}
        />

        <Stack.Screen
            name="LevelRegistration"
            component={LevelRegistration}
        />

        <Stack.Screen
            name="NovoCupom"
            component={NovoCupom}
        />

        <Stack.Screen
            name="PassouNivel"
            component={PassouNivel}
        />

        <Stack.Screen
            name="QrCode"
            component={QrCode}
        />

        <Stack.Screen
            name="SeuPerfil"
            component={SeuPerfil}
        />

        <Stack.Screen
            name="VisualizarFidelidade"
            component={VisualizarFidelidade}
        />

        <Stack.Screen
            name="WelcomeAgain"
            component={WelcomeAgain}
        />

        <Stack.Screen
            name="ViewCupons"
            component={ViewCupons}
        />



    </Stack.Navigator>
)
export default AppRoutes;

