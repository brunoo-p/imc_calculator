import { useState } from 'react';
import { useCard } from '../contexts/hooks/useCard';

import { Box } from '@mui/material';
import styled from 'styled-components';

import ListCards from '../components/app/listCards';
import Navbar from '../components/app/navbar';
import { Forms, Person } from '../components/app/screenMessage/view';

import NoContentCard from '../components/noContentCard';
import Portal from '../components/portal';
import ScreenMessage from '../components/app/screenMessage';

const Flexbox = styled(Box)`
    display: flex;
    justify-content: center;
`;
const Container = styled(Flexbox)`
    width: 100%;
    height: 100vh;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Roboto', 'Montserrat', sans-serif;
`;
const Content = styled(Flexbox)`
    width: 100%;
    max-width: ${({ theme }) => theme.width};
    height: 90%;

    padding: 20px;
    justify-content: start;
    flex-direction: column;
    
    background: #FFFF;
    border-radius: 10px;
    /* background: ${({ theme }) => theme.colors.background}; */
    background: transparent;
`;


const Home = () => {

    const { persons } = useCard();
    const [showPortal, setShowPortal] = useState(false);
    const [filterePersons, setFilteredPersons] = useState<Person[]>(persons);
    
    return (
        <Container>
            <Content>
                <Navbar />
                {showPortal && (

                    <Portal>
                        <ScreenMessage setShowPortal={setShowPortal} screen={Forms.Add} /> 
                    </Portal>)
                }
                {
                    persons.length
                    ? (

                        <ListCards persons={persons} />
                    )
                    : (
                        <NoContentCard setShowPortal={setShowPortal} />
                    )
                }
            </Content>
        </Container>
    )
}

export default Home;