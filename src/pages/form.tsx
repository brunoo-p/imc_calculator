import { Box } from "@mui/material"
import { useState } from "react";
import styled from 'styled-components';
import LeadSoftBadge from "../components/leadSoftBadge";
import SignIn from "../components/signIn";

const Container = styled(Box)`
    display: flex;
    width: 100%;
    height: 100vh;
    font-weight: 700;
    justify-content: center;
    font-family: 'Roboto', 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.colors.secondary};
    overflow: hidden;
`;
const Content = styled(Box)`
    display: flex;
    width: 100%;
    max-width: ${({ theme }) => theme.maxWidth};
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Form = () => {

    const [messageSubmit, setMessageSubmit] = useState('ok');
    const [classMessage, setClassMessage] = useState('success');

  return (
        <Container>

                <LeadSoftBadge />

            <Content>

                <SignIn messageSubmit={messageSubmit} classMessage={classMessage} />

            </Content>
        </Container>
  )
}

export default Form