import { Box } from '@mui/material';
import styled from 'styled-components';
import ListCards from '../components/app/listCards';
import Navbar from '../components/app/navbar';

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
    background: ${({ theme }) => theme.colors.background};
`;


const Home = () => {
    
    return (
        <Container>
            <Content>
                <Navbar />
                <ListCards />
            </Content>
        </Container>
    )
}

export default Home