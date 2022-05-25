import AddorEdit from './forms/AddorEdit';
import Exclude from './forms/exclude';

import { Forms as viewForms, Person } from './view';

type Props = {
    setShowPortal: (value: boolean) => void;
    screen: keyof typeof viewForms;
    person?: Person
}
const ScreenMessage: React.FC<Props> = ({ setShowPortal, screen, person }) => {

    const Forms = {
        Add: <AddorEdit setShowPortal={setShowPortal} title="Adicionar" />,
        Edit: <AddorEdit setShowPortal={setShowPortal} title="Editar" person={person} />,
        Exclude: <Exclude setShowPortal={setShowPortal} person={person} />
    }
    return (
        <>
            {Forms[screen]}
        </>
    )
}

export default ScreenMessage