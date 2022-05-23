import axios, { AxiosInstance } from "axios";
import AuthService, { IAuthService } from "./auth/authService";

const api = () => axios.create({
    withCredentials: false,
    baseURL: "http://peopletest.leadsoft.inf.br/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

const authService = (axiosInstance: AxiosInstance) => AuthService.instance(axiosInstance);

interface ILoginApi {
    authService: () => IAuthService
}
const instance = (axiosInstance: AxiosInstance): ILoginApi => ({
    authService: () => authService(axiosInstance)
})

const LoginApi = {
    instance: (axiosInstance?: AxiosInstance) => {
        
        if (api() === undefined) {
            
            throw Error('api is undefined');

        }else if ( axiosInstance === null || axiosInstance === undefined ) {

            return instance(api() as NonNullable<AxiosInstance>);
        }

        return instance(axiosInstance as NonNullable<AxiosInstance>);
        
    }
}

export default LoginApi;