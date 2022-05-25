import { Email } from "../credentials/email";
import { Password } from "../credentials/password";

export class User {
    constructor(
        public email: Email,
        public password: Password
    ) {}
}