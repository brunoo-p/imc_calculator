import Routes from '../routes';
import { Reset } from 'styled-reset';
import Theme from '../theme';

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../contexts/auth';

const App = () => (

    <AuthProvider>
        <Reset />
        <BrowserRouter>
            <Theme>

                <Routes />
            
            </Theme>

        </BrowserRouter>
    </AuthProvider>
);


export default App;
