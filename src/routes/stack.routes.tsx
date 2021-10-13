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

    <Stack.Navigator >
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false }}

        />

        <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="Confirmacao"
            component={Confirmacao}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="CupomDescription"
            component={CupomDescription}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="FidelidadeTela"
            component={FidelidadeTela}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="LevelRegistration"
            component={LevelRegistration}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="NovoCupom"
            component={NovoCupom}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="PassouNivel"
            component={PassouNivel}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="QrCode"
            component={QrCode}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="SeuPerfil"
            component={SeuPerfil}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="VisualizarFidelidade"
            component={VisualizarFidelidade}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="WelcomeAgain"
            component={WelcomeAgain}
            options={{headerShown: false }}
        />

        <Stack.Screen
            name="ViewCupons"
            component={ViewCupons}
            options={{headerShown: false }}
        />



    </Stack.Navigator>
)
export default AppRoutes;
