import { createContext, useState } from 'react';
import { CardContextProp } from "./view";

const DEFAULT_VALUE = {
    contentPortal: '',
    setContentPortal(): void {}
};

const CardContext = createContext<CardContextProp>(DEFAULT_VALUE);

type Props = {
    children: React.ReactNode;
}
const CardProvider: React.FC<Props> = ({ children }) => {

    const [contentPortal, setContentPortal] = useState('');

    const value = {
        contentPortal,
        setContentPortal
    }
    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider;