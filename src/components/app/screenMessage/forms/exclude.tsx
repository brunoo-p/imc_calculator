import { Box, Card, Button, IconButton, Typography } from '@mui/material'
import styled from 'styled-components';

import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

import { ContentMessage, Person } from '../view';
import CardFacade from '../../cardFacade';
import { useState } from 'react';
import { StatusCode } from '../../../../utils/httpStatus';
import { useCard } from '../../../../contexts/hooks/useCard';

const Container = styled(Card)`
    display: flex;
    width: auto;
    max-width: ${({ theme }) => theme.maxWidth};
    height: auto;
    max-height: 150px;
    padding: 20px;
    font-family: "Roboto";

    align-items: center;
    justify-content: start;
`;

const Content = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;

    span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
    }

    .iconButton {
        width: 50px;
        height: 50px;
    }
`;
const Buttons = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;
`;

type Props = {
    setShowPortal: (value: boolean) => void;
    person?: Person
}
const Exclude: React.FC<Props> = ({ setShowPortal, person }) => {
    
    const { refreshPersons } = useCard();
    const [content, setContent] = useState<keyof typeof ContentMessage>('Confirm');


    const handleExclude = async () => {
        if (person !== (null || undefined)) {

            const response = await CardFacade.instance().exclude(person!.id);

            if(response.status === StatusCode.NO_CONTENT) {

                refreshPersons();
                setContent('Done');

            }else {

                setContent('Error');
            }
        
        }
    }

    const Confirm = () => (
        <>
            <IconButton sx={{ background: '#2c95f845'}}> <InfoIcon color="info" /> </IconButton>
            <Typography>
                Tem certeza que deseja excluir os dados de
                <span> {person?.fullName}</span> ?
            </Typography>

            <Buttons>
                <Button variant="text" color="error" onClick={() => setShowPortal(false)}> Cancel </Button>
                <Button variant="contained" onClick={handleExclude}> Continue </Button>
            </Buttons>
        </>
    );
    const Done = () => (
        <>
            <IconButton sx={{ background: '#75ffaf45'}} className="iconButton"> <CheckCircleIcon color="success" /> </IconButton>
            <Typography> Pessoa exclu??da com sucesso </Typography>
            <Buttons>
                <Button variant="outlined" color="success" onClick={() => setShowPortal(false)}> OK </Button>
            </Buttons>
        </>
    )
    const Error = () => (
        <>
            <IconButton sx={{ background: '#ff757545'}}> <ErrorIcon color="error" /> </IconButton>
            <Typography> N??o podemos continuar essa a????o agora, tente novamente mais tarde </Typography>
            <Buttons>
                <Button variant="outlined" color="success" onClick={() => setShowPortal(false)}> OK </Button>
            </Buttons>
        </>
    )

    const Show = {
        Confirm: <Confirm />,
        Done: <Done />,
        Error: <Error />
    }

    return (
        <Container>
            <Content>
                {
                    Show[content]
                }
            </Content>
        </Container>
    )
}

export default Exclude