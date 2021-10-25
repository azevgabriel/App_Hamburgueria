import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './stack.routes'
import { AuthProvider } from '../hooks/useAuth';

declare global{
    namespace ReactNavigation{
        interface RootParamList{
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
    <AuthProvider>
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    </AuthProvider>
);

export default Routes;