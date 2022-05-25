import { useContext } from 'react';
import { AuthContext } from '../auth';

export const useAuth = () => {

    const context = useContext(AuthContext);
    const { authenticated, user, setUser, signIn } = context;

    return {
        authenticated, user, setUser, signIn
    }
}