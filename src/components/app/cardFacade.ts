import { CardCreateRequest } from './../../services/core/card/cardCreateRequest';
import { AxiosInstance } from 'axios';
import AppApi from '../../services/api/appApi';
import { ICardService } from '../../services/api/card/cardService';

export interface ICardFacade {
    cardFacade: () => Promise<any>
}

interface ICardFacadeInstance {
    cardService: ICardService
}
const cardFacade = (cardFacadeInstance: ICardFacadeInstance) => {

    const { cardService } = cardFacadeInstance;

    const createOrUpdate = async (person: CardCreateRequest, personId?: string) => {

        const token = sessionStorage.getItem("@Auth:token")!;
        return cardService.createOrUpdate(person, token, personId);
    }
    
    const getAll = () => {
        
        const token = sessionStorage.getItem("@Auth:token")!;
        return cardService.getAll(token);
    }

    const getById = (personId: string) => {

        const token = sessionStorage.getItem("@Auth:token")!;
        return cardService.getById(token, personId);
    }

    const exclude = (personId: string) => {

        const token = sessionStorage.getItem("@Auth:token")!;
        return cardService.exclude(personId, token);
    }

    return {
        createOrUpdate,
        getAll,
        getById,
        exclude
    }

}

const instance = (api?: AxiosInstance) => {
    
    const appApi = AppApi.instance(api);
    
    const facadeInstance = {
        cardService: appApi.cardService()
    }

    return cardFacade(facadeInstance);
}
const CardFacade = {
    instance
}

export default CardFacade;