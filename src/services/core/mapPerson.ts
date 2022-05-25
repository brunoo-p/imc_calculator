import { mapName } from "../../utils/mapName";

const mapPerson = (person: any) => {

    const {name, surname} = mapName(person.FullName);
    return {
        id: person.Id,
        name,
        surname,
        fullName: person.FullName,
        age: person.Age,
        weigth: person.Weigth,
        height: person.Height,
        imc: person.IMC
    }
}

const fromObject = (person: any) => {

    try {
        return mapPerson(person);
    
    }catch ( err ) {

        console.log(err);
    }
}
const fromArray = (persons: any) => {

    if(persons === (undefined || null)) {
        throw new Error('Persons response data return undefined or null ');
    }

    return persons.map((person: any) => fromObject(person));
}
const PersonMapper = {
    fromObject,
    fromArray
}

export default PersonMapper;