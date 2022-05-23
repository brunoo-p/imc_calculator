import { Box, Button } from '@mui/material'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import Portal from '../portal';
import ScreenMessage from './screenMessage';
import { Forms } from './screenMessage/view';

const Container = styled(Box)`
    display: flex;
    width: 100%;
    max-width: 1000px;
    height: 80px;
    background-image: url("https://www.pbs.up.pt/media/1737/pg_servicos_saude.gif") !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    border-radius: 10px 10px 0 0;
`;
const Content = styled(Box)`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;

    padding: 20px 30px;
    background: #26262629;

    button {
        font-weight: 700;
        max-width: 200px;
        color: #FFFF;
        border: 1px solid #FFFF;
        text-transform: capitalize;
        --c: no-repeat linear-gradient(${({ theme }) => theme.colors.tertiary} 0 0);
        background: 
            var(--c)  calc(-101% + var(--p,0%)) 100% / 51% var(--p,.08em),
            var(--c)  calc( 201% - var(--p,0%)) 0    / 51% var(--p,.08em);
        transition: .2s var(--t,0s), background-position .2s calc(.2s - var(--t,0s));
    
        :hover {
            --p: 99%;
            --t: 0.2s;
            color: ${({ theme }) => theme.colors.secondary};
            span {
                transition: 1s;
                transform: rotate(360deg) scale(1.2);
            }
        }
    }
    
`;
const Logo = styled(NavLink)`
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: space-between;
    
    img {
        width: 120px;
        height: 40px;
    }
`;

const Navbar = () => {

    const [showPortal, setShowPortal] = useState<boolean>(false);

    return (
        <Container>
            <Content>

            {showPortal && (

                <Portal>
                    <ScreenMessage setShowPortal={setShowPortal} screen={Forms.Add} /> 
                </Portal>)
            }

                <Logo to="#">
                    <img src="/static/images/leadsoft_logotipo.png" alt="logotipo" />
                </Logo>
                <Button
                    variant="outlined"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={() => setShowPortal(true)}
                >
                    Inserir
                </Button>

            </Content>
        </Container>
    )
}

export default Navbar