import { Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Portal from '../portal';
import ScreenMessage from './screenMessage';
import { useState } from 'react';
import { Forms } from './screenMessage/view';

const Container = styled(Box)`
    width: 250px;
    height: auto;
    
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    filter: drop-shadow(1px 5px 8px ${({ theme }) => theme.colors.primary});
    background: #FFFF;
    border-radius: 10px;
    
    transform: scale(.9);
    margin-right: 0px;
    transition: .3s ease-out;
    animation: .5s ease-out show;

    @keyframes show {
        from {transform: translateX(-150px); opacity: 0}
        to {transform: translateX(0px);  opacity: 1}
    }
    :hover {
        transform: scale(1);
    }
`;
const Content = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;

    span {
        font-weight: 900;
        margin-right: 3px;
        color: ${({ theme }) => theme.colors.secondary};
    }
    p {
        color: #FFFF;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.tertiary};

    }
`;
const Attributes = styled(Box)`
    display: flex;
    width: 100%;
    
    justify-content: space-between;
    margin: 20px 0;
`;
const Weight = styled(Box)`
    display: flex;
    width: 250px;
    flex-direction: row;
    
    margin: 20px 0;
    padding-bottom: 10px;
    justify-content: space-around;

    /* overflow: hidden;
    text-overflow: ellipsis;
    mask-image: linear-gradient(black, transparent); */
`;
const Buttons = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    button {
        text-transform: capitalize;
    }
`;

const Card = () => {

    const [showPortal, setShowPortal] = useState<boolean>(false);
    const [screen, setScreen] = useState<keyof typeof Forms>(Forms.Edit);

    const handleEdit = (): void => {
        setScreen(Forms.Edit);
        setShowPortal(true);
    };

    const handleExclude = (): void => {
        setScreen(Forms.Exclude);
        setShowPortal(true);
    }
    return (
        <Container>
            {showPortal && (

                <Portal>
                    <ScreenMessage setShowPortal={setShowPortal} screen={screen} /> 
                </Portal>)
            }
            <Content>
                <Box>
                    
                    <Typography sx={{ display: 'flex', width: '100%', justifyContent: 'center' }} variant="body1">
                        Bruno Paulino
                    </Typography>
                    
                    <Attributes sx={{ marginTop: '30px' }}>
                        <Typography variant="body2"> <span> Idade: </span> 25 anos  </Typography>
                    </Attributes>
                    <Attributes>
                        <Typography variant="body2"> <span> Altura: </span> 1,71 cm </Typography>
                    </Attributes>
                    
                    <Weight>
                        <Typography variant="body2"> <span> Peso: </span> 80 kg </Typography>
                        <Typography variant="body2"> <span> IMC: </span> 45 </Typography>
                    </Weight>
                    <Buttons>
                        <Button 
                            variant="text"
                            startIcon={ <ModeEditOutlinedIcon color="info" /> }
                            onClick={handleEdit}
                        >
                            Alterar
                        </Button>
                        <Button
                            variant="text"
                            color="error"
                            startIcon={ <DeleteOutlineIcon color="error" /> }
                            onClick={handleExclude}
                        > 
                            Excluir
                        </Button>
                    </Buttons>
                </Box>
            </Content>
        </Container>
    )
}

export default Card