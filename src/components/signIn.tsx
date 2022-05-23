import styled from 'styled-components';
import { Box, Typography } from "@mui/material"
import { Formik, Form } from 'formik';
import { Link as RouterLink } from 'react-router-dom';

import InputFormik from './InputFormik';
import Badge from './badgeMessage';
import { validateLogin } from '../utils/validateForm';
import { LoginProps } from '../pages/formView';

const Container = styled(Box)`
    display: flex;
    width: 100%;
    max-width: 700px;
    height: 100%;
    width: 100%;
    
    justify-content: center;
    flex-direction: column;
    padding: 20px 15px;
    
    border-radius: 10px;
    background: #FFFF;
    
    @media screen and (min-width: 800px) {
        max-width: 700px;
        height: auto;
        padding: 20px 40px;
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
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h4"> Sign in </Typography>
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
            <LoginForm />
        </Container>
    )
}

export default SignIn;
