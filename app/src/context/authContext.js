import React, { useState, useEffect, createContext } from 'react';
import { api, createSession } from './../services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loginError, setLoginError] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (user) {
            setUser(JSON.parse(user));

            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await createSession(email, password);
        console.log(response);
        if (!response.data.loginError) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);

            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

            setUser(response.data.user);
            navigate('/mainpage');
        } else {
            setLoginError(true);
        }
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login');
    }


    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                loading,
                loginError,
                login,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    );
}

