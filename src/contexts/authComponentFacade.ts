import { IAuthService } from './../services/api/auth/authService';
import LoginApi from "../services/api/loginApi";
import { AxiosInstance } from 'axios';
import { LoginRequest } from '../services/core/auth/authRequestTypes';
import { messageResponse } from '../utils/constant/statusResponse';
import { LoginToken } from '../services/core/auth/loginToken';
import { IUser } from './view';
import { StatusCode } from '../utils/httpStatus';
import { Email } from '../services/core/credentials/email';


export const INITIAL_USER = {
    email: '',
    password: ''
}

interface IAuthComponentInstance {
    authService: IAuthService
}


const storageContent = (
    login: LoginRequest,
    token: LoginToken,
    setUser: React.Dispatch<React.SetStateAction<IUser>>
) => {

    try {
    
        sessionStorage.setItem("@Auth:token", JSON.stringify(token));
        sessionStorage.setItem("@Auth:user", JSON.stringify(login));
        setUser({
            email: login.username.value,
            password: login.password.value
        });
        
        return { classMessage: 'success', message: messageResponse.successAuth };
    
    }catch (exception) {

        return { classMessage: 'success', message: messageResponse.badRequest };
    }
}

const signIn = async (
    login: LoginRequest,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    authComponentInstance: IAuthComponentInstance,
) => {

    try {
        
        const response = await authComponentInstance
        .authService
        .signInRequest(login);
        
        if(response.status === StatusCode.OK) {
            
           return storageContent(login, response.data, setUser);
        
        }if(response.status === StatusCode.BAD_REQUEST) {
             
            return { classMessage: 'error', message: messageResponse.badRequest};
        
        }else {

            return { classMessage: 'error', message: messageResponse.serverError};
        }

    }catch (exception) {
        
        console.log(exception);
        return { classMessage: 'error', message: messageResponse.badRequest};
    
    }
}

const refreshToken = async (
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
    authComponentInstance: IAuthComponentInstance,
) => {
    
    const tokenStorage: string | null = sessionStorage.getItem("@Auth:token");
    
    if(tokenStorage !== null) {
        
        const loginToken = await JSON.parse(tokenStorage);
        const token = new LoginToken(loginToken.Authorization, new Date(loginToken.When));

        if(token.shouldRefresh()) {

            const login = await JSON.parse(sessionStorage.getItem("@Auth:user")!);
            
            return signIn(login, setUser, authComponentInstance);

        }else {
            return;
        }
    }


};

export interface IAuthComponentFacade {
    signIn: (data: LoginRequest, setUser: React.Dispatch<React.SetStateAction<IUser>>) => any,
    refreshToken: (setUser: React.Dispatch<React.SetStateAction<IUser>>) => any
}

const instance = (api?: AxiosInstance): IAuthComponentFacade => {

    const loginApi = LoginApi.instance(api);

    const authComponentInstance: IAuthComponentInstance = {
        authService: loginApi.authService()
    }

    return {
        signIn: (data: LoginRequest, setUser: React.Dispatch<React.SetStateAction<IUser>>) => signIn(data, setUser, authComponentInstance),
        refreshToken: (setUser: React.Dispatch<React.SetStateAction<IUser>>) => refreshToken(setUser, authComponentInstance),
    }
}

const AuthComponentFacade = {
    instance
}

export default AuthComponentFacade;