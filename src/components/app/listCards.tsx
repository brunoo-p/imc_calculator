import styled from 'styled-components';
import Card from './card';

import { Box } from '@mui/material';
import React from 'react';
import { Person } from './screenMessage/view';

const Container = styled(Box)`
    display: flex;
    width: 100%;
    min-height: 400px; 
    padding: 30px 0;

    flex-direction: row;
    
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 1rem;

    ::-webkit-scrollbar {
        width: 5px;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.primary};
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.secondary};
        border-radius: 10px;
    }
`;

type Props = {
    persons: Person[]
}
const ListCards: React.FC<Props> = ({ persons }) => (
    <Container>
        {persons.map((person: Person) => (
            <React.Fragment key={person.id}>
                <Card person={person} />
            </React.Fragment>
        ))}
    </Container>
)


export default ListCards