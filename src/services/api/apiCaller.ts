import { AxiosRequestConfig, AxiosResponse } from "axios";
import { LoginToken } from "../core/auth/loginToken";

const caller = async <T>(
    callApi: () => Promise<AxiosResponse>,
    mapper?: (payload: any, header?: any) => T
) => {

    try {

        const response: AxiosResponse = await callApi();
        console.debug('response', response);
        
        if (mapper) {
            return mapper(response.data);
        }
        return response;
    
    } catch (exception) {
        
        console.log(exception);
        throw Error(`${exception}`);
    }

};

const headerBuilder = (token: string): AxiosRequestConfig => {
    
    const access = JSON.parse(token);
    const accessToken = new LoginToken(access.Authorization, access.When);

    return {
        headers: {
            Authorization: `${accessToken.authorization}`
        }
    }
}

const ApiCaller = {
    caller,
    headerBuilder
}

export default ApiCaller;