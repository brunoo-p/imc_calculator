import styled from 'styled-components';
import Card from './card';

import { Box } from '@mui/material';
import React from 'react';
import { Person } from './screenMessage/view';

const Container = styled(Box)`
    display: flex;
    width: 100%;
    height: auto;
    padding: 30px 0;

    flex-direction: row;
    
    overflow: hidden;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 1rem;
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