import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { CustomPerson, Person } from '../view';
import { createOrUpdate } from './addOrEdit.service';
import CardFacade from '../../cardFacade';

const Container = styled(Card)`
    display: flex;
    width: 60%;
    max-width: 500px;
    max-height: 450px;
    padding: 10px 20px 10px 20px;

    align-items: center;
    justify-content: center;
    flex-direction: column;

    h5 {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

const Content = styled(Box)`
    display: flex;
    width: 100%;
    height: auto;

    align-items: start;
    justify-content: start;
    flex-direction: column;
   
    input {
        display: flex;
        flex: 1;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #CCca;
        outline: none;
        font-weight: 700;
        font-size: 14px;
    }
    p {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.text};
        :after {
            content: ' *';
            color: ${({ theme }) => theme.colors.tertiary};
        }
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
    margin-top: 20px;
    justify-content: end;

    button:first-child {
        margin-right: 20px;
    }
`;

type EventOnchange = React.ChangeEvent<HTMLInputElement>;
type Props = {
    setShowPortal: (value: boolean) => void;
    title: string;
    person?: CustomPerson
};
const AddOrEdit: React.FC<Props> = ({ setShowPortal, title, person }) => {

    const initialValue = {
        name: '',
        surname: '',
        age: '',
        height: '',
        weigth: '',
    }
    const initial = person? person : initialValue;

    const [p, setP] = useState<CustomPerson | any>(initial);

    useEffect(() => {
        if(p.id) {

            (async () => {
              
                const response = await CardFacade.instance().getById(p.id);
                handleInputs({ age: response.data.DateOfBirth });
            })();
        }
    }, [])

    const updatePerson = (
        previous: Person,
        update: Partial<CustomPerson>
    ): CustomPerson => ({
        ...previous,
        ...update
    })

    const handleInputs = (update: Partial<CustomPerson>) => {

        const updated = updatePerson(p, update);
        setP(updated)

    }

    const handleSave = () => {
        console.log(p, p.id);
        createOrUpdate(p, p.id);
    }
    return (
        <Container>
            <Box></Box>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Typography variant="h5"> { title } </Typography>
                <IconButton onClick={() => setShowPortal(false)}> <CloseIcon color="error" /> </IconButton>
            </Box>
            <Content>
                <Name>
                    
                    <Typography variant="body2"> Name </Typography>
                    <input
                        type="text"
                        onChange={(event: EventOnchange) => handleInputs({ name: event.target.value })}
                        value={p.name}
                    />
                </Name>
                <Name>
                    <Typography variant="body2"> Sobrenome </Typography>
                    <input
                        type="text"
                        onChange={(event: EventOnchange) => handleInputs({ surname: event.target.value })}
                        value={p.surname}
                    />
                </Name>

                <Date>
                    <Typography variant="body2"> Data de nascimento </Typography>
                    <input
                        type="date"
                        onChange={(event: EventOnchange) => handleInputs({ age: event.target.value })}
                        asp-for="MyDate"
                        asp-format="{0:yyyy-MM-dd}"
                        value={p.age}
                    />
                </Date>

                <Weight>

                    <Box>
                        <Typography variant="body2"> Altura </Typography>
                        <input
                            type="text"
                            onChange={(event: EventOnchange) => handleInputs({ height: event.target.value })}
                            value={p.height}
                        />
                    </Box>

                    <Box>
                        <Typography variant="body2"> Peso </Typography>
                        <input
                            type="text"
                            onChange={(event: EventOnchange) => handleInputs({ weigth: event.target.value })}
                            value={p.weigth}
                        />
                    </Box>
                </Weight>
                
            </Content>
                <Buttons>
                    <Button variant="text" color="error" onClick={() => setShowPortal(false)}> Cancelar </Button>
                    <Button variant="contained" onClick={handleSave}> Salvar </Button>
                </Buttons>
        </Container>
    )
}

export default AddOrEdit