import styled from 'styled-components';
import Card from './card';

import { Box } from '@mui/material';
import Portal from '../portal';
import ScreenMessage from './screenMessage';
import { useState } from 'react';

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

const ListCards = () => {

    const [showPortal, setShowPortal] = useState<boolean>(false);
    return (
        <Container>
            {/* {showPortal && (

                <Portal>
                    <ScreenMessage setShowPortal={setShowPortal} /> 
                </Portal>)
            } */}
            <Card />
        </Container>
    )
}

export default ListCards