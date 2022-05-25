export enum Forms {
    Add = 'Add', 
    Edit = 'Edit',
    Exclude = 'Exclude',
}

export enum ContentMessage {
    Confirm = 'Confirm', 
    Done = 'Done',
    Error = 'Error',
}

export type Person = {
    id: string;
    name: string;
    surname: string;
    fullName: string;
    age: string | number;
    height: string | number;
    weigth: string | number,
    imc: number
};

export type CustomPerson = Omit<Person, "imc" | "fullName">;