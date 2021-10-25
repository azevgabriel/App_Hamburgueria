import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './stack.routes'

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Welcome: string;
            Cadastro: string;
            Confirmacao: string;
            CupomDescription: string;
            FidelidadeTela: string;
            LevelRegistration: string;
            NovoCupom: string;
            PassouNivel: string;
            QrCode: string;
            SeuPerfil: string;
            VisualizarFidelidade: string;
            ViewCupons: string;
            WelcomeAgain: string;
        }
    }
}

const Routes = () => (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
);

export default Routes;