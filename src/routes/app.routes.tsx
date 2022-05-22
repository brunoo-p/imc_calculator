import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '../pages/notFound';

const AppRoutes = () => 
    (
    
        <Routes>
            <Route path="/" element={ <Navigate to="app" /> } />            
            <Route path="app" element={ <h1> app route</h1> } />
            <Route path="notFound" element={ <NotFound /> } />
            <Route path="signin" element={ <Navigate to="/" /> } />            
            <Route path="*" element={ <Navigate to="notFound" /> } />
        </Routes>

  
    )


export default AppRoutes;