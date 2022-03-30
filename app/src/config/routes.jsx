import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import WelcomePage from '../pages/Welcome/WelcomePage';

const AppRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='/welcome' element={<WelcomePage />} />
                <Route exact path='/login' element={<LoginPage />} />
                <Route exact path='/home' element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes