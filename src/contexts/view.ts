import { LoginRequest } from './../services/core/auth/authRequestTypes';

export type AuthContextProp = {
    authenticated: boolean,
    user: IUser,
    setUser: (value: IUser) => void,
    signIn: (value: LoginRequest) => Promise<any>
}

export type CardContextProp = {
    contentPortal: string,
    setContentPortal: (value: string) => void
}

export interface IUser {
    email: string,
    password: string
}