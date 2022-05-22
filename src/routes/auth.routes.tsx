import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from '../components/signIn';
import Form from '../pages/form';
const AuthRoutes = () => {
  
    return (
    
        <Routes>
            <Route path="/" element={ <Navigate to="/signin" /> } />
            <Route path="signin" element={<Form />} />
            <Route path="*" element={ <Navigate to="/" /> }  />
        </Routes>
    )
}

export default AuthRoutes;
