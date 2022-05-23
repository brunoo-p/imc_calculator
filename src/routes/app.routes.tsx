import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/notFound';

const AppRoutes = () => 
    (
    
        <Routes>
            <Route path="/signin" element={ <Navigate to="/" /> } />            
            
            <Route path="/" element={ <Navigate to="/app" /> } />            
            <Route path="app" element={ <Home /> } />
            <Route path="notFound" element={ <NotFound /> } />
            <Route path="*" element={ <Navigate to="/notFound" /> } />
        </Routes>

  
    )


export default AppRoutes;