import { createContext, useState } from "react";
import { LoginRequest } from "../services/core/auth/authRequestTypes";
import AuthComponentFacade from "./authComponentFacade";
import { AuthContextProp } from "./view";

export const AuthContext = createContext<AuthContextProp>({} as AuthContextProp);

type Props = {
    children: React.ReactNode;
}
const AuthProvider: React.FC<Props> = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);

    const signIn = async (data: LoginRequest) => {
        
        return AuthComponentFacade
            .instance()
            .signIn(data, setAuthenticated);
    }
      
      
    const value = {
        authenticated,
        setAuthenticated,
        signIn
    }
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;