import {
    TouchableOpacityProps
} from 'react-native';

export interface CupomProps extends TouchableOpacityProps {
    id_cupom: string;
    usos_permitidos?: number;
    url_image_cupom?: string;
    title?: string;
    data_validade?: string;
    descricao?:string;
    cupom_fidelidade?:number;
    nivel_relacionado?:number;
    hamburguinhos_fornecidos?:number;
}

export interface UserProps {
    id_user: string;
    tipo_user?: number;
    name?: string;
    cpf?: string;
    telefone?: string;
    senha?: string;
    url_image_user?: string;
    nivel?: number;
    hamburguinhos_coletados?:number;
}
export interface UserCupomProps {
    id_user_cupom: string;
    id_user: string;
    id_cupom: string;
    usos_restantes?:number;
}