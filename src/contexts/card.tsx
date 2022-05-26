import { createContext, useEffect, useState } from 'react';
import CardFacade from '../components/app/cardFacade';
import { CardContextProp } from "./view";


export const CardContext = createContext<CardContextProp>({} as CardContextProp);

type Props = {
    children: React.ReactNode;
}
const CardProvider: React.FC<Props> = ({ children }) => {

    const [persons, setPersons] = useState({} as CardContextProp);

    useEffect(() => {

        (async () => {

            refreshPersons();
        
        })()

    }, []);

    const refreshPersons = async () => {
        const list = await CardFacade.instance().getAll();
        setPersons(list);
    };

    const value = {
        persons,
        setPersons,
        refreshPersons
    }
    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider;