import { LoginRequest } from './../services/core/auth/authRequestTypes';

export type AuthContextProp = {
    authenticated: boolean,
    setAuthenticated: (value: boolean) => void,
    signIn: (value: LoginRequest) => Promise<any>
}

export type CardContextProp = {
    contentPortal: string,
    setContentPortal: (value: string) => void
}