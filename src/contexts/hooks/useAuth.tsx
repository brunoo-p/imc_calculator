import { useContext } from 'react';
import { AuthContext } from '../auth';

export const useAuth = () => {

    const context = useContext(AuthContext);
    const { authenticated, setAuthenticated } = context;

    return {
        authenticated, setAuthenticated
    }
}