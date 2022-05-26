import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

const Container = styled(Box)`

    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    display: none;
    padding: 0 20px;
    img {
        display: none;
        width: auto;
        height: 500px;
        transform: translateY(-100px);
        object-fit: contain;
    }
    
    @media screen and (min-width: 800px) {
        display: flex;
        img {
            width: 600px;
            display: flex;
        }
    }
    @media screen and (min-width: 1200px) { img { width: auto }}
`;
const Title = styled(Box)`
    width: 100%;
    text-align: center;
    transform: translateX(100px);
    padding: 10px 0;
    
    h3 {
        font-weight: 700;
        color: #FFFF;
        font-size: 2.2rem;
    }
    button {
        text-transform: none;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 20px;
        margin-top: 20px;
        color: #FFFF;
        padding: 10px 20px;
        :hover {
            border: 2px solid ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media screen and (min-width: 800px) {
        transform: none;
        text-align: center;
        h3 {
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 1200px) {
        h3 {
            font-size: 2.5rem;
        }
    }
`;

const ImageSignIn = () => {
  
        return (
        <Container>
            <Title>
                <Typography variant="h3"> Ainda não tem um cadastro? </Typography>
                <Button variant="outlined"> Comece por aqui </Button>
            </Title>
            <img src="/static/images/undraw_doctors_hwty.svg" alt="doctors" />
            </Container>
    )
}

export default ImageSignIn