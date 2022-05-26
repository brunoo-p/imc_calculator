import { Person } from '../components/app/screenMessage/view';
import { LoginRequest } from './../services/core/auth/authRequestTypes';

export type AuthContextProp = {
    authenticated: boolean,
    user: IUser,
    setUser: (value: IUser) => void,
    signIn: (value: LoginRequest) => Promise<any>
}

export type CardContextProp = {
    persons: Person[] | any,
    setPersons: (value: Person | any) => void,
    refreshPersons: () => void,
}

export interface IUser {
    email: string,
    password: string
}