import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { CustomPerson, Person } from '../view';
import { createOrUpdate } from './addOrEdit.service';
import CardFacade from '../../cardFacade';
import { StatusCode } from '../../../../utils/httpStatus';
import { useCard } from '../../../../contexts/hooks/useCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Container = styled(Card)`
    display: flex;
    width: 100%;
    max-width: 500px;
    max-height: 450px;
    padding: 10px 20px 10px 20px;
    margin: 10px;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    h5 {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.secondary};
    }
    @media screen and (min-width: 800px) {
        width: 60%;
        margin: 0;
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
        
        border-radius: 10px;
        padding: 15px;
        border: 1px solid #CCca;
        outline: none;
        font-weight: 700;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.secondary};
        
        ::placeholder {
            opacity: .6;
        }
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
const DateWrap = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px 0;
    input {
        cursor: pointer;
    }
    div {
        display: flex;
        align-items: center;
        button {
            background: transparent;
            border: none;
            font-weight: 700;
            margin-left: 20px;
            color: ${({ theme }) => theme.colors.primary};
            cursor: pointer;
        }
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

    const { refreshPersons } = useCard();
    const initialValue = {
        name: '',
        surname: '',
        age: '',
        height: '',
        weigth: '',
    }
    const initial = person? person : initialValue;

    const [p, setP] = useState<CustomPerson | any>(initial);
    const [formattedDate, setFormattedDate] = useState<any>('');
    const [changeInputDate, setChangeInputDate] = useState(!person);
    const [done, setDone] = useState(false);
    
    useEffect(() => {
        if(p.id) {
            
            (async () => {
                
                const response = await CardFacade.instance().getById(p.id);
                handleInputs({ age: response.data.DateOfBirth });
            })();
        }
    }, []);

    const formatDate = () => {

        const date = person ? new Date(p.age) : new Date('');
        setFormattedDate(date.toLocaleDateString('pt-br', { month: 'short', day: 'numeric', year: 'numeric' }));

    };
    useEffect(() => formatDate(), [p.age]);

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

    const handleSave = async () => {
        const response = await createOrUpdate(p, p.id);
        if ( response.status === StatusCode.OK) {
            setDone(true);
            refreshPersons();
            setShowPortal(false);

        }
    }

    return (
        <Container style={{ height: done ? '300px' : 'auto'}}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Typography variant="h5"> { title } </Typography>
                <IconButton onClick={() => setShowPortal(false)}> <CloseIcon color="error" /> </IconButton>
            </Box>
            { !done ? (
            <>
                <Content>
                    <Name>
                        
                        <Typography variant="body2"> Nome </Typography>
                        <input
                            type="text"
                            onChange={(event: EventOnchange) => handleInputs({ name: event.target.value })}
                            value={p.name}
                            placeholder="Nome"
                        />
                    </Name>
                    <Name>
                        <Typography variant="body2"> Sobrenome </Typography>
                        <input
                            type="text"
                            onChange={(event: EventOnchange) => handleInputs({ surname: event.target.value })}
                            value={p.surname}
                            placeholder="Sobrenome"
                        />
                    </Name>

                    <DateWrap>
                        <Box>

                            <Typography variant="body2"> Data de nascimento </Typography>
                            { !changeInputDate && <button onClick={() => setChangeInputDate(true)}> Edit </button>}
                        </Box>
                        {changeInputDate ? (
                            <input
                                type="date"
                                onChange={(event: EventOnchange) => handleInputs({ age: event.target.value })}
                            />)
                            : (
                                <>
                                    <input
                                        type="text"
                                        value={formattedDate}
                                        disabled
                                    />
                                </>
                            )
                        }
                    </DateWrap>

                    <Weight>

                        <Box>
                            <Typography variant="body2"> Altura (cm) </Typography>
                            <input
                                type="text"
                                onChange={(event: EventOnchange) => handleInputs({ height: event.target.value })}
                                value={p.height}
                                placeholder="171"
                            />
                        </Box>

                        <Box>
                            <Typography variant="body2"> Peso </Typography>
                            <input
                                type="text"
                                onChange={(event: EventOnchange) => handleInputs({ weigth: event.target.value })}
                                value={p.weigth}
                                placeholder="80"
                            />
                        </Box>
                    </Weight>
                    
                </Content>
                    <Buttons>
                        <Button variant="text" color="error" onClick={() => setShowPortal(false)}> Cancelar </Button>
                        <Button variant="contained" onClick={handleSave}> Salvar </Button>
                    </Buttons>
            </>
            )
            : (
                <>
                    <IconButton sx={{ background: '#75ffaf45'}} className="iconButton"> <CheckCircleIcon color="success" /> </IconButton>
                    <Buttons>
                        <Button variant="outlined" color="success" onClick={() => setShowPortal(false)}> OK </Button>
                    </Buttons>
                </>
                
            )
            }
        </Container>
    )
}

export default AddOrEdit