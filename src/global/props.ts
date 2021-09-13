import {
    TouchableOpacityProps
} from 'react-native';

export interface CupomProps extends TouchableOpacityProps {
    id: string;
    usosPermitidos: number;
    usosRestantes: number;
    UrlImageCupom: string;
    title: string;
    validade: string;
}