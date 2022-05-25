import { CardCreateRequest } from "../../../../services/core/card/cardCreateRequest"
import CardFacade from "../../cardFacade";

export const createOrUpdate = (person: any, personId?: string) => {

    const data = new CardCreateRequest(
        person.name,
        person.surname,
        new Date(person.age),
        Number(person.weigth),
        parseFloat(person.height)
    );
    return CardFacade.instance().createOrUpdate(data, personId);
}