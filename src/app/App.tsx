import Routes from '../routes';
import { Reset } from 'styled-reset';
import Theme from '../theme';

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../contexts/auth';
import CardProvider from '../contexts/card';

const App = () => (

    <AuthProvider>
        <CardProvider>

        <Reset />
            <BrowserRouter>
                <Theme>

                    <Routes />
                
                </Theme>

            </BrowserRouter>

        </CardProvider>
    </AuthProvider>
);


export default App;
