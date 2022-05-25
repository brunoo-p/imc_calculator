import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import ListCards from '../components/app/listCards';
import Navbar from '../components/app/navbar';
import CardFacade from '../components/app/cardFacade';
import { Forms, Person } from '../components/app/screenMessage/view';
import NoContentCard from '../components/noContentCard';
import Portal from '../components/portal';
import ScreenMessage from '../components/app/screenMessage';
import { mapName } from '../utils/mapName';

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
    max-width: 1000px;
    height: 90%;
    
    justify-content: start;
    flex-direction: column;
    
    background: #FFFF;
    border-radius: 10px;
    /* background: ${({ theme }) => theme.colors.background}; */
    background: transparent;
`;


const Home = () => {

    const [showPortal, setShowPortal] = useState(false);
    const [persons, setPersons] = useState<Person[]>([])
    useEffect(() => {

        (async () => {

            const list = await CardFacade.instance().getAll();
            setPersons(list);
        
        })()
    }, []);
    
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

export default Home