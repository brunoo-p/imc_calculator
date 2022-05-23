import styled from 'styled-components';
import Card from './card';

import { Box } from '@mui/material';

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

const ListCards = () => (
    <Container>
        <Card />
    </Container>
)


export default ListCards