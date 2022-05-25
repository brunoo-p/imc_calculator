import { AxiosInstance } from "axios"
import { CardCreateRequest } from "../../core/card/cardCreateRequest";
import PersonMapper from "../../core/mapPerson";
import ApiCaller from "../apiCaller";

const createOrUpdate = async (
    api: AxiosInstance,
    person: CardCreateRequest,
    token: string,
    personId?: string, 
) => {
    const header = ApiCaller.headerBuilder(token);
    const baseUrl = "/v1/People";
    const body = JSON.stringify(person);
    const url = personId ? `${baseUrl}/${personId}` : `${baseUrl}`;

    const callApi = () => personId === undefined
    ? api.post(url, body, header)
    : api.put(url, body, header)
    
    return ApiCaller.caller(callApi);
}

const getAll = (token: string, api: AxiosInstance) => {

    const header = ApiCaller.headerBuilder(token);
    const baseUrl = "/v1/People/IMC";

    const callApi = () => api.get(baseUrl, header);
    return ApiCaller.caller(callApi, PersonMapper.fromArray);
}

const getById = (api: AxiosInstance, id: string, token: string) => {

    const header = ApiCaller.headerBuilder(token);
    const baseUrl = `/v1/People/${id}`;

    const callApi = () => api.get(baseUrl, header);
    return ApiCaller.caller(callApi);
}

const exclude = (api: AxiosInstance, personId: string, token: string) => {

    const header = ApiCaller.headerBuilder(token);

    const callApi = () => api.delete(`/v1/People/${personId}`, header);
    return ApiCaller.caller(callApi);

}


export interface ICardService {
    createOrUpdate: (person: CardCreateRequest, token: string,  personId?: string) => (Promise<any>),
    getAll: (token: string) => Promise<any>,
    getById: (id: string, token: string) => Promise<any>,
    exclude: (personId: string, token: string) => Promise<any>
};

const instance = (api: AxiosInstance): ICardService => ({
    createOrUpdate: (person: CardCreateRequest, token: string, personId?: string) => createOrUpdate(api, person, token, personId),
    getAll: (token: string) => getAll(token, api),
    getById: (token: string, id: string) => getById(api, id, token),
    exclude: (personId: string, token: string) => exclude(api, personId, token),

});
const CardService = {
    instance
};

export default CardService;