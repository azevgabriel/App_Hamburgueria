import React, { createContext, useCallback, useState, useContext, useEffect} from 'react';
import {api} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  user: iUser | null;
  signInUser: (data: signInUserProps) => Promise<void>;
}

interface signInUserProps {
  cpf: string;
  password: string;
}

interface iUser {
  id: number;
  type: number;
  name: string;
  cpf: string;
  phone: string;
  image: string;
  level: number;
  burgers: number;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN');
      const user = await AsyncStorage.getItem('@Hamburgueria:USER');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setUser(JSON.parse(user));
      }
    }

    loadStorageData();
  }, [])

  const signInUser = useCallback(async ({cpf, password}: signInUserProps) => {

    const response = await api.post('/login', {
      cpf, 
      password
    }).catch((err) => {
      throw err;
    });

    const { token, user } = response.data;

    const userString = JSON.stringify(user);

    await AsyncStorage.setItem('@Hamburgueria:TOKEN', token)
    await AsyncStorage.setItem('@Hamburgueria:USER', userString)
    
    api.defaults.headers.authorization = `Bearer ${token}`

    setUser(user);

  }, []);

  return (
    <AuthContext.Provider value={{ 
      user,
      signInUser 
    }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
