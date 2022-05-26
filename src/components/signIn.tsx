import styled from 'styled-components';
import { Avatar, Box, Typography } from "@mui/material"
import { Formik, Form } from 'formik';
import { Link as RouterLink } from 'react-router-dom';

import InputFormik from './InputFormik';
import Badge from './badgeMessage';
import { validateLogin } from '../utils/validateForm';
import { LoginProps } from '../pages/formView';

const Container = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled(Box)`
    position: relative;
    background-color: #f8f8f8a4;
    backdrop-filter: blur(10px);
    border-radius: 1.5em;
    
    max-width: ${({ theme }) => theme.maxWidth};
    justify-content: center;
    flex-direction: column;
    padding: 20px 40px;
    
    transform-style: preserve-3d;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 
    0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1), 
    0 32px 32px rgba(0, 0, 0, 0.15),
    0 64px 64px rgba(0, 0, 0, 0.15);

    :before{
		content: '';
        display: block;
        width: 4em;
        height: 0.6em;
        background: ${({ theme }) => theme.colors.secondary};
        opacity: .4;
        margin: 5px auto;
        z-index: 5;
        border-radius: 10em;
        mix-blend-mode: overlay;
    }
    @media screen and (min-width: 800px) {
        min-width: 400px;
        height: auto;
        padding: 20px 40px;
        backdrop-filter: blur(10px);
    }
`;

const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 1.2rem 0;

    :first-child {
        margin-top: 15%;
    }

    label{
        font-size: 19px;
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 5px;
        
        :after{
            content: " *";
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    input{
        padding: 15px;
        border: 2px solid #cccccc;
        border-radius: 8px;
        color: #A7A7A7;
        background: #f8f8f8;
        font-size: 1.2rem;
        font-weight: 700;
        transition: .3s ease-out;
        
        ::placeholder{
            color: #d4d4d4;
        }   
        :focus{
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.tertiary};
        box-shadow: rgb(55 131 253 / 49%) 0px 8px 25px -4px;
        }
    }
    a{
        text-decoration: underline;
        margin: 30px 0 39px 0;
        font-size: 19px;
        color: #0984e3;
    }
    .submit{
        color: #fff;
        background: #243761;
        padding: 18px;
        cursor: pointer;
        border: none;
        text-transform: 'none';
        :hover {
            background: #2c457cda;
        }
    }
`;

type Props = {
    onLogin: (login: LoginProps) => void;
    messageSubmit: string;
    classMessage: string;
}
const SignIn: React.FC<Props> = ({ onLogin, messageSubmit, classMessage }) => {
    
    const LoginForm = () => (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validateLogin}
            onSubmit={(values) => onLogin(values)}
        >
                <Form data-testid="form">
                    
                    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, opacity: .5 }}> Sign in </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar
                            src="https://cdn-icons-png.flaticon.com/512/1246/1246314.png?w=740"
                            sx={{ width: 100, height: 100, border: '3px solid #3659F0' }}
                            />
                    </Box>

                    {messageSubmit && <Badge className={classMessage} message={messageSubmit} />}
                    
                    <FormStyle>

                        <label htmlFor="username">
                            username
                        </label>

                        <InputFormik name="username" type="email" testid="input-email" />
                    
                    </FormStyle>

                    <FormStyle>

                        <label htmlFor="password">
                           password
                        </label>
                        
                        <InputFormik name="password" type="password" testid="input-password" />

                        <RouterLink to="#" style={{ textDecoration: 'none' }}>
                            Esqueceu a senha?
                        </RouterLink>

                        <input
                            className="submit"
                            type="submit"
                            value="Login"
                            data-testid="input-submit"
                        />
                        
                    </FormStyle>
                </Form>
        </Formik>
    )
    return (
        <Container>
            <Content>
                <LoginForm />
            </Content>
        </Container>
    )
}

export default SignIn;
