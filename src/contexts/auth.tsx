import { createContext, useEffect, useState } from "react";
import { LoginRequest } from "../services/core/auth/authRequestTypes";
import AuthComponentFacade, { INITIAL_USER } from "./authComponentFacade";
import { AuthContextProp, IUser } from "./view";

export const AuthContext = createContext<AuthContextProp>({} as AuthContextProp);

type Props = {
    children: React.ReactNode;
}
const AuthProvider: React.FC<Props> = ({ children }) => {

    const [user, setUser] = useState<IUser>(INITIAL_USER);
 
    useEffect(() => {
    
        refreshToken();
    
    }, [user.email]);

    const signIn = async (data: LoginRequest) => {
        
        return AuthComponentFacade
            .instance()
            .signIn(data, setUser);
    }

    const refreshToken = () => {

        return AuthComponentFacade
        .instance()
        .refreshToken(setUser);
    }
      
      
    const value = {
        authenticated: (!!user.email.length),
        user,
        setUser,
        signIn
    }
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;