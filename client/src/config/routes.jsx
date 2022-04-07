import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import WelcomePage from '../pages/Welcome/WelcomePage';
import { AuthContext, AuthProvider } from '../context/authContext';
import Page404 from '../pages/Page404/Page404';

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <NavBar />
                <Routes>
                    <Route path='/login' exact element={<LoginPage />} />
                    <Route path='/welcome' exact element={<WelcomePage />} />
                    <Route path='/home' exact element={<Private> <HomePage /> </Private>} />
                    <Route path='*' exact element={<Page404 />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes