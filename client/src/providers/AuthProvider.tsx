import React, {
    useContext,
    createContext,
    useState,
} from 'react';

import { AuthContextType } from '../types/providers/AuthContextType';
import { AuthProviderType } from '../types/providers/AuthProviderType';

const AuthContext = createContext<AuthContextType>({ user: null, setUser: () => { } });

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {

    const [user, setUser] = useState(null);

    return (

        <AuthContext.Provider value={{ user, setUser }}>

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);
