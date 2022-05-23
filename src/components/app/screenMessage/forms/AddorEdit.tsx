import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled(Card)`
    display: flex;
    width: 60%;
    max-width: ${({ theme }) => theme.maxWidth};
    height: 450px;

    align-items: center;
    justify-content: start;
    flex-direction: column;
`;
const Content = styled(Box)`
    display: flex;
    width: 70%;
    height: auto;

    align-items: start;
    justify-content: start;
    flex-direction: column;
   
    input {
        display: flex;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #CCca;
        outline: none;
    }
`;
const Name = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px 0;
`;
const Date = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px 0;
    input {
        cursor: pointer;
    }
`;
const Weight = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
    div {
        display: flex;
        flex-direction: column;
        :first-child{
            margin-right: 10px;
        }
    }
    
`;
const Buttons = styled(Box)`
    display: flex;
    width: 100%;
    margin: 10px 30px 10px 0;
    justify-content: end;

    button:first-child {
        margin-right: 20px;
    }
`;

type Props = {
    setShowPortal: (value: boolean) => void;
    title: string;
    user?: {} 
};
const AddorEdit: React.FC<Props> = ({ setShowPortal, title, user }) => {
    return (
        <Container>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
                <IconButton onClick={() => setShowPortal(false)}> <CloseIcon color="error" /> </IconButton>
            </Box>
            <Content>
                <Typography variant="h5"> { title } </Typography>
                <Name>
                    <Box>
                        <Typography variant="body2"> Name </Typography>
                        <input type="text" />
                    </Box>
                    <Box>
                        <Typography variant="body2"> Sobrenome </Typography>
                        <input type="text" />
                    </Box>
                </Name>
                <Date>
                    <Typography variant="body2"> Data de nascimento </Typography>
                    <input type="date" />
                </Date>
                <Weight>
                    <Box>
                        <Typography variant="body2"> Altura </Typography>
                        <input type="text" />
                    </Box>
                    <Box>
                        <Typography variant="body2"> Peso </Typography>
                        <input type="text" />
                    </Box>
                </Weight>
                
            </Content>
                <Buttons>
                    <Button variant="text" color="error" onClick={() => setShowPortal(false)}> Cancelar </Button>
                    <Button variant="contained"> Salvar </Button>
                </Buttons>
        </Container>
    )
}

export default AddorEdit