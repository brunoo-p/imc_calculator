import { AxiosInstance } from "axios";
import { LoginRequest } from "../../core/auth/authRequestTypes";
import ApiCaller from "../apiCaller";
import { BAuthRequest } from "./entities/authTypes";

const signInRequest = async (api: AxiosInstance, login: LoginRequest) => {

    const request: BAuthRequest = {
        username: login.username.value,
        password: login.password.value
    };

    const callApi = () => api.post("/v1/Auth/LogIn", JSON.stringify(request));
    return ApiCaller.caller(callApi);
};

export interface IAuthService {
    signInRequest: (login: LoginRequest) => (Promise<any>),
}
const instance = (api: AxiosInstance): IAuthService => ({
    signInRequest: (login: LoginRequest) => signInRequest(api, login),
});

const AuthService = {
    instance
}

export default AuthService;