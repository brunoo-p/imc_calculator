import { Email } from "../credentials/email"
import { Password } from "../credentials/password"

export type LoginRequest = {
    username: Email,
    password: Password
};
