export type AuthContextProp = {
    authenticated: boolean,
    setAuthenticated: (value: boolean) => void
}

export type CardContextProp = {
    contentPortal: string,
    setContentPortal: (value: string) => void
}