import { useState, useEffect } from "react";
import { Box } from "@mui/material"
import styled from 'styled-components';
import LeadSoftBadge from "../components/leadSoftBadge";
import SignIn from "../components/signIn";
import { useAuth } from "../contexts/hooks/useAuth";
import { serviceLogin } from "./form.service";
import { LoginProps } from "./formView";
import ImageSignIn from "../components/imageSignIn";

const Container = styled(Box)`
    display: flex;
    width: 100%;
    height: 100vh;
    font-weight: 700;
    justify-content: center;
    font-family: 'Roboto', 'Montserrat', sans-serif;
    background: #F8F8F8F8;
    overflow: hidden;
`;
const Content = styled(Box)`
    display: flex;
    width: 100%;
    max-width: ${({ theme }) => theme.width};
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Wave = styled(Box)`
    position: fixed;
    width: 1600px;
    height: 1500px;

    border-radius: 50%;
    background: ${({ theme }) => theme.colors.tertiary};
    z-index: 0;
    transition: .5s;
    transform: translate(0%, 0%);
    animation: 1s show ease-in-out forwards;

    @keyframes show {
        from { transform: scale(1.5) translate(0%, 0%)}
        to { transform: scale(1) translate(0%, -85%)}
    }

    @media screen and (min-width: 800px) {
        transform: translate(-50%, -50%);
        animation: 1s slideIn ease-in-out forwards;
        
        @keyframes slideIn {
            from { transform: scale(1.5) translate(0%, 0%)}
            to { transform: scale(1) translate(-50%, -50%)}
        }
    }
`;

const Forms = styled(Box)`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 100%;
    height: 100%;
    justify-content: start;

    @media screen and (min-width: 800px) {
        display: grid;
        grid-template-columns: 50% 50%;
    }
`;

const Images = styled(Box)`
    width: auto;
    height: 100%;
    position: relative;
    z-index: 2;
    flex-direction: column;
    margin-top: 50px;
    display: none;
    transition: .3s;

    img {
        width: 60px;
        height: 60px;
        background: #304ca848;
        backdrop-filter: blur(10px);
        border-radius: 100%;
        object-fit: contain;
    }

    @media screen and (min-width: 800px) {
        display: flex;
        flex-direction: row;
        img:first-child {
            transform: translate(-300px, 25px);
        }
        img:nth-child(2) {
            transform: translate(-250px, 25px);

        }
        img:last-child {
            transform: translate(-200px, 25px);
        }
    }
    @media screen and (min-width: 1200px) {
        flex-direction: column;
        width: 0px;
        img:first-child {
            transform: translate(-200px, 25px);
        }
        img:nth-child(2) {
            transform: translate(-100px, -5px);

        }
        img:last-child {
            transform: translate(-70px, 25px);
        }
        
    }
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
                <Wave />
            <Content>
                <Forms>
                    <ImageSignIn />
                    <SignIn
                        onLogin={onLogin}
                        messageSubmit={messageSubmit}
                        classMessage={classMessage}
                        />
                </Forms>

            <Images>
                <img src="/static/images/undraw_stability_ball_b-4-ia.svg" alt="ball" />
                <img src="/static/images/undraw_biking_kc-4-f.svg" alt="biking" />
                <img src="/static/images/undraw_healthy_habit_bh-5-w.svg" alt="ball" />
            </Images>
            </Content>
                <LeadSoftBadge />
        </Container>
  )
}

export default Form