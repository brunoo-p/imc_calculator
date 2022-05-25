export class CardCreateRequest {
    constructor(
        public name: string,
        public surname: string,
        public dateOfBirth: Date,
        public weigth: number,
        public height: number,
    ) {}
}