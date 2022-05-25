export const mapName = (fullName: string) => {
    const name = fullName.split(' ')[0];
    const surname = fullName.substring(name.length + 1);

    return { name, surname };
}