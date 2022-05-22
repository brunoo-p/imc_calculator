import * as Yup from 'yup';
import { Email } from '../services/core/credentials/email';
import { Password } from '../services/core/credentials/password';

const emailRegex = Email.REGEXP;
const passRegex = Password.REGEXP;

export const validateLogin = Yup.object({
    username: Yup.string()
        .required('Required Field')
        .matches(emailRegex, 'Invalid email address'),
    password: Yup.string().required('Required Field')
    .matches(passRegex,
        'This field must contain min 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character'
    )
});