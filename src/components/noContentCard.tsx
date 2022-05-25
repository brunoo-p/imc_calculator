import { memo } from 'react'
import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const Container = styled(Box)`
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 700;

    h3 {
        margin: 30px 0px 10px 0; 
    }
    h5 {
        margin: 10px 0px 40px 0; 
    }
    h3, h5 {
        color: #FFFF;
    }
    img {
        width: 400px;
        height: 300px;
        object-fit: contain;
    }
    button {
        width: 100px;
        display: inline-block;
        justify-content: center;
        text-transform: capitalize;
        border: 2px solid transparent;
        background: ${({ theme }) => theme.colors.tertiary};
        transition: .2s ease-in;
        
        span {
            position: absolute;
            left: -10px;
            transition: 0.5s;
            opacity: 0;
        }
        :hover {
            padding-left: 25px;
            background: ${({ theme }) => theme.colors.secondary};
            border: 2px solid ${({ theme }) => theme.colors.primary};
            box-shadow: 0 0 .7em ${({ theme }) => theme.colors.tertiary};
        }
        :hover span{
            opacity: 1;
            left: 10px; 
        }
    }

    
`;

type Props = {
    setShowPortal: (value: boolean) => void;
}
const NoContentCard: React.FC<Props> = ({ setShowPortal }) => {
    return (
        
        <Container>
            <img src="/static/images/fit.png" alt="no content" />
            <Typography variant="h3"> Parece vazio... </Typography>
            <Typography variant="h5"> Não tem nada pra mostrar aqui ainda! Click no botão e cadastre a primeira pessoa. </Typography>
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => setShowPortal(true)}> Inserir </Button>
        </Container>
    )
}

export default memo(NoContentCard);