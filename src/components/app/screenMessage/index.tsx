import AddorEdit from './forms/AddorEdit';
import Exclude from './forms/exclude';

import { Forms as viewForms } from './view';

type Props = {
    setShowPortal: (value: boolean) => void;
    screen: keyof typeof viewForms;
}
const ScreenMessage: React.FC<Props> = ({ setShowPortal, screen }) => {

    const Forms = {
        Add: <AddorEdit setShowPortal={setShowPortal} title="Adicionar" />,
        Edit: <AddorEdit setShowPortal={setShowPortal} title="Editar" />,
        Exclude: <Exclude setShowPortal={setShowPortal} />
    }
    return (
        <>
            {Forms[screen]}
        </>
    )
}

export default ScreenMessage