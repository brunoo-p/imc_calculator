import { AxiosResponse } from "axios";

const caller = async <T>(
    callApi: () => Promise<AxiosResponse>,
    mapper?: (payload: any, header?: any) => T
) => {

    try {

        console.log(callApi);
        const response: AxiosResponse = await callApi();
        console.debug('response', response);
        return response;
    
    } catch (exception) {
        
        console.log(exception);
        throw Error(`${exception}`);
    }

};

const ApiCaller = {
    caller,
}

export default ApiCaller;