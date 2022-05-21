import { Navigate, Route, Routes } from 'react-router-dom';
const AuthRoutes = () => {
  
    return (
    
        <Routes>
            <Route path="/" element={ <Navigate to="/signin" /> } />
            <Route path="signin" element={<h1> signin </h1>} />
            <Route path="*" element={ <Navigate to="/" /> }  />
        </Routes>
    )
}

export default AuthRoutes;
