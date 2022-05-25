import { Box } from "@mui/material"
import { useState } from "react";
import styled from 'styled-components';
import LeadSoftBadge from "../components/leadSoftBadge";
import SignIn from "../components/signIn";
import { useAuth } from "../contexts/hooks/useAuth";
import { serviceLogin } from "./form.service";
import { LoginProps } from "./formView";

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
    /* max-width: ${({ theme }) => theme.maxWidth}; */
    max-width: 1600px;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Image = styled(Box)`

    width: 50%;
    height: 100%;
    
`;

const Form = () => {

    const { signIn } = useAuth();

    const [messageSubmit, setMessageSubmit] = useState('');
    const [classMessage, setClassMessage] = useState('');
    
    const onLogin = async (values: LoginProps) => {

        setMessageSubmit('Signing ...');
        setClassMessage('signing');
        
        try {
            
            const response = await serviceLogin(
                values,
                signIn
            );
            console.log(response);
            setMessageSubmit(response.message);
            setClassMessage(response.classMessage);
        
        } catch (error) {
            
            console.log(error);
        }
    };

  return (
        <Container>

                <LeadSoftBadge />

            <Content>
                {/* <Image /> */}
                <SignIn
                    onLogin={onLogin}
                    messageSubmit={messageSubmit}
                    classMessage={classMessage}
                />

            </Content>
        </Container>
  )
}

export default Form