import axios, { AxiosInstance } from 'axios';
import CardService, { ICardService } from './card/cardService';

const api = axios.create({
    // withCredentials: true,
    baseURL: "http://peopletest.leadsoft.inf.br/api",
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });

  
const cardService = (axiosInstance: AxiosInstance) => CardService.instance(axiosInstance);
  
  
  
  
interface IAppApi {
    cardService: () => ICardService
}
const instance = (axiosInstance: AxiosInstance): IAppApi => ({
    cardService: () => cardService(axiosInstance)
})

const AppApi = {
    instance: (axiosInstance?: AxiosInstance) => {
        
        if (api === undefined) {
            
            throw Error('api is undefined');

        }else if ( axiosInstance === null || axiosInstance === undefined ) {

            return instance(api as NonNullable<AxiosInstance>);
        }

        return instance(axiosInstance as NonNullable<AxiosInstance>);
        
    }
}

export default AppApi;