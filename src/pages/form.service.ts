import { LoginRequest } from '../services/core/auth/authRequestTypes';
import { Email } from '../services/core/credentials/email';
import { Password } from '../services/core/credentials/password';
import { LoginProps } from "./formView";

type AxiosResponse = {

    classMessage: string;
    message: string;
}

export const serviceLogin = async (
    login: LoginProps,
    signIn: (data: LoginRequest) => any

) => {

    let response: AxiosResponse;
    if (login.username && login.password) {
        
        const { username, password } = login;

        const data: LoginRequest = {
            username: new Email(username.trim()),
            password: new Password(password.trim())
        }
        console.log('form.service', data);
        response = await signIn(data);
        console.log(response);
    
    } else {

        response = { message: "Fill the fields correctly", classMessage: "error" };
    
    }
    return response;
}