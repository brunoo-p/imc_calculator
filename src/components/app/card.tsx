import { Box, Button, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Portal from '../portal';
import ScreenMessage from './screenMessage';
import { useState } from 'react';
import { Forms, Person } from './screenMessage/view';

const Container = styled(Box)`
    width: 300px;
    height: 300px;
    
    filter: drop-shadow(1px 3px 3px #FFFF);
    background: #FFFF;
    border-radius: 10px;
    
    transform: scale(.9);
    margin-right: 0px;
    transition: .3s ease-out;
    animation: .5s ease-out moveIn;
    overflow: hidden;

    @keyframes moveIn {
        from {transform: translateX(-150px); opacity: 0}
        to {transform: translateX(0px);  opacity: 1}
    }
    :hover {
        transform: scale(1);
        filter: drop-shadow(1px 3px 8px #ffffff9e);
    }

    .iconButton {
        z-index:2;
        background: #FFFF;
        :hover {
            background: ${({ theme }) => theme.badgeMessage.error.background};
            color: #FFFF;
        }
    }
`;
const Content = styled(Box)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    cursor: pointer;

    span {
        font-weight: 900;
        margin-right: 3px;
        color: ${({ theme }) => theme.colors.secondary};
    }
    p {
        color: #FFFF;
        font-weight: 700;
    }

    :hover {
        .back {
            height: 85%;
            button { z-index: 0}
        }
        .front {
            height: 25%;
        }
    }
`;

const FrontCard = styled(Box)`
    width: 100%;
    height: 100%;

    background: #ffffff5a;
    transition: .3s ease-out;
    opacity: 1;
    backdrop-filter: blur(8px);
    span {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
const BackCard = styled(Box)`
    width: 100%;
    height: 12%;

    border-radius: 0px 0px 8px 8px;
    padding: 10px 0;
    background: linear-gradient(${({ theme }) => theme.colors.tertiary}, ${({ theme }) => theme.colors.primary});
    transition: .3s ease-out;
    h6 {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
`;
const Attributes = styled(Box)`
    display: flex;
    width: 100%;
    
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 20px;
`;
const Weight = styled(Box)`
    display: flex;
    width: 250px;
    flex-direction: row;
    
    margin: 20px 0;
    padding: 0 20px;
    padding-bottom: 10px;
    justify-content: space-around;
`;
const Buttons = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    border-radius: 50px;
    background: #FFFF;
    
    button {
        text-transform: capitalize;
        z-index: -1;
    }
`;

type Props = {
    person: Person;
}
const Card: React.FC<Props> = ({ person }) => {

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
    const { fullName, age, weigth: weight, height, imc } = person;
    return (
        <Container>
            {showPortal && (

                <Portal>
                    <ScreenMessage setShowPortal={setShowPortal} screen={screen} person={person} /> 
                </Portal>)
            }

            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', position: 'fixed', transform: 'translateY(20px)' }}>
                <IconButton
                    className="iconButton"
                    onClick={handleExclude}
                > 
                    <DeleteOutlineIcon color="error" />
                </IconButton>
            </Box>

            <Content>
                <BackCard className="back">
                    <Typography variant="h6"> Detalhes </Typography>
                    <Attributes sx={{ marginTop: '30px' }}>
                        <Typography variant="body2"> <span> Idade: </span> {age} anos  </Typography>
                    </Attributes>
                    <Attributes>
                        <Typography variant="body2"> <span> Altura: </span> {height} cm </Typography>
                    </Attributes>
                    
                    <Weight>
                        <Typography variant="body2"> <span> Peso: </span> {weight} kg </Typography>
                        <Typography variant="body2"> <span> IMC: </span> {imc.toFixed(3)} </Typography>
                    </Weight>
                    <Buttons>
                        <Button 
                            variant="text"
                            startIcon={ <ModeEditOutlinedIcon color="action" /> }
                            onClick={handleEdit}
                        >
                            Alterar
                        </Button>
                    </Buttons>
                </BackCard>
                <FrontCard className="front">

                    <span> { fullName }</span>
                
                </FrontCard>
            </Content>
        </Container>
    )
}

export default Card