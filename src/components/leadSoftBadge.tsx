import { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    display: none;
    height: 100%;
    padding: 10px 0;
    justify-content: space-evenly;
    position: relative;
    flex-direction: column;
    
    span {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 900;
        height: auto;
        padding: 10px 5px;
        writing-mode: vertical-lr;
        cursor: pointer;
    }
    .show {
        animation: .5s ease-in show forwards;
    }
    .hidden {
        animation: .4s ease-in hidden forwards;
        cursor: default;
        pointer-events: none;
    }
    @keyframes show {
        0% { height: 90px; };
        100% { height: 0px; };
    }
    @keyframes hidden {
        0% {
            height: 0px;
            opacity: 1
        };
        100% {
            height: 90px;
            opacity: 0
        };
    }

    @media screen and (min-width: 800px) {
        display: flex;
    }

`;
const Wrap = styled(Box)`
    height: 90px;
    transition: .2s linear;
`;
const Hidden = styled(Box)`
    background: #1d1d21;
    transform: translateY(-90px);
`;

const LeadSoftBadge = () => {

    const [transform, setTransform] = useState(0);
    const [className, setClassName] = useState('show');
    
    const array = [-60, 125, 80, 210, -29];
    const time = () => {

        const randomElement = array[Math.floor(Math.random() * array.length)];
        setClassName(className === 'show' ? 'hidden' : 'show');
        
        setTimeout(() => setTransform(randomElement), 1000);
    }

    useEffect(() => {
        
        const timer = setInterval(time, 1300);
        
        return(() => clearInterval(timer));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transform]);

  return (
    <Container>
        <Wrap style={{ transform: `translateY(${transform}px)`}}>
            <a href="https://www.leadsoft.inf.br" target="_blank" rel="noreferrer" className={className}>
                <span> LeadSoft </span>
            </a>
            <Hidden className={className} />
        </Wrap>
    </Container>
  )
}

export default LeadSoftBadge