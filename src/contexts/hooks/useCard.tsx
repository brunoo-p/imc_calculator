import { useContext } from 'react';
import { CardContext } from '../card';

export const useCard = () => {
    
    const context = useContext(CardContext);
    const { persons, setPersons, refreshPersons } = context;

    return {
        persons, setPersons, refreshPersons
    }
}