import { Box, Card, Button, IconButton, Typography } from '@mui/material'
import styled from 'styled-components';
import ErrorIcon from '@mui/icons-material/Error';

const Container = styled(Card)`
    display: flex;
    width: auto;
    max-width: ${({ theme }) => theme.maxWidth};
    height: auto;
    max-height: 150px;
    padding: 20px;

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
`;
const Buttons = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

type Props = {
    setShowPortal: (value: boolean) => void;
}
const Exclude: React.FC<Props> = ({ setShowPortal }) => {
    return (
        <Container>
            <Content>
                <IconButton sx={{ background: '#ff757545'}}> <ErrorIcon color="error" /> </IconButton>
                <Typography> Tem certeza que deseja excluir os dados de Bruno Paulino? </Typography>
                <Buttons>
                    <Button variant="text" color="error"> Cancel </Button>
                    <Button variant="contained" onClick={() => setShowPortal(false)}> Continue </Button>
                </Buttons>
            </Content>
        </Container>
    )
}

export default Exclude