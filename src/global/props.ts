import {
    TouchableOpacityProps
} from 'react-native';

export interface CupomProps extends TouchableOpacityProps {
    id: number;
    permitted_uses?: number;
    image?: string;
    title?: string;
    expiration_date?: string;
    description?:string;
    fidelity?: boolean;
    level_id?:number;
    burgers_added?:number;
}
export interface CupomPropsPost extends TouchableOpacityProps {
    permitted_uses?: number;
    image?: string;
    title?: string;
    expiration_date?: string;
    description?:string;
    fidelity?: boolean;
    level_id?:number;
    burgers_added?:number;
}
export interface UserProps {
    id: number;
    type?: number;
    name?: string;
    cpf?: string;
    phone?: string;
    password?: string;
    image?: string;
    level?: number;
    burgers?:number;
}
export interface UserPropsPost{
    name?: string;
    cpf?: string;
    phone?: string;
    password?: string;
    image?: string;
}
export interface UserCupomProps {
    id: number;
    user_id: number;
    coupon_id: number;
    remaining_uses?:number;
}

export interface NivelProps {
    id: number;
    level?:number;
    burgers_needed?:number;
}

export type RootStackParamList = {
    Cadastro: undefined;
    Welcome: undefined;
    CadastroFoto: undefined;
    Confirmacao: undefined;
    CupomDescription: ObjectCupons;
    FidelidadeTela: undefined;
    LevelRegistration: CuposAndLevels;
    NovoCupom: ObjectCuponsUndefined;
    PassouNivel: undefined;
    QrCode: ObjectCupons;
    SeuPerfil: undefined;
    VisualizarFidelidade: undefined;
    ViewCupons: undefined;
    WelcomeAgain: undefined;
};

export interface ObjectCupons{
    cupom: CupomProps;
}
export interface ObjectCuponsUndefined{
    cupom?: CupomProps;
}

export interface CuposAndLevels{
    cupom: CupomProps;
    level: NivelProps;
}