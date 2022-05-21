import Routes from '../routes';
import { Reset } from 'styled-reset';
import Theme from '../theme';

import { BrowserRouter } from 'react-router-dom';

const App = () => (

    <>
        <Reset />
        <BrowserRouter>
            <Theme>

                <Routes />
            
            </Theme>

        </BrowserRouter>
    </>
);


export default App;
