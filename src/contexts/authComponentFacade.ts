import { IAuthService } from './../services/api/auth/authService';
import LoginApi from "../services/api/loginApi";
import { AxiosInstance } from 'axios';
import { LoginRequest } from '../services/core/auth/authRequestTypes';
import { messageResponse } from '../utils/constant/statusResponse';
import { LoginToken } from '../services/core/auth/loginToken';

interface IAuthComponentInstance {
    authService: IAuthService
}


const doToken = (
    token: LoginToken,
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
) => {

    try {
    
        sessionStorage.setItem("@Auth:token", JSON.stringify(token));
        setAuthenticated(true);
        return { classMessage: 'success', message: messageResponse.successAuth };
    
    }catch (exception) {

        return { classMessage: 'success', message: messageResponse.badRequest };
    }
}
const signIn = async (
    data: LoginRequest,
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
    authComponentInstance: IAuthComponentInstance,
) => {

    try {
        
        const response = await authComponentInstance
        .authService
        .signInRequest(data);
        
        if(response.status === 200) {

           return doToken(response.data, setAuthenticated);
        
        }if(response.status === 400) {
             
            return { classMessage: 'error', message: messageResponse.badRequest};
        
        }else {

            return { classMessage: 'error', message: messageResponse.serverError};
        }

    }catch (exception) {
        
        console.log(exception);
    
    }
}


export interface IAuthComponentFacade {
    signIn: (data: LoginRequest, setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>) => any
}

const instance = (api?: AxiosInstance): IAuthComponentFacade => {

    const loginApi = LoginApi.instance(api);

    const authComponentInstance: IAuthComponentInstance = {
        authService: loginApi.authService()
    }

    return {
        signIn: (data: LoginRequest, setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>) => signIn(data, setAuthenticated, authComponentInstance)
    }
}

const AuthComponentFacade = {
    instance
}

export default AuthComponentFacade;