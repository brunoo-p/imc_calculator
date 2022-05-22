import { createContext, useState } from "react";
import { AuthContextProp } from "./view";

const DEFAULT_VALUE = {
    authenticated: false,
    setAuthenticated(): void {}
}
export const AuthContext = createContext<AuthContextProp>(DEFAULT_VALUE);

type Props = {
    children: React.ReactNode;
}
const AuthProvider: React.FC<Props> = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);

    const value = {
        authenticated,
        setAuthenticated
    }
    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;