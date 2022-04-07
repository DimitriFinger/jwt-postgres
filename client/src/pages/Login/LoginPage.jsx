import React, { useContext, useState } from 'react';
import { LoginContainer, LoginMainContainer, InputContainer, LoginButton, ForgotPassword, WelcomeTitle, SecondTitle, BadLogin } from './styled';
import TextField from '@mui/material/TextField';
import { AuthContext } from '../../context/authContext';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loginError } = useContext(AuthContext);

    const handleLogin = async () => {

        login(email, password);

    }

    return (
        <div>
            <LoginMainContainer>
                <LoginContainer>
                    <WelcomeTitle>
                        WELCOME
                    </WelcomeTitle>
                    <SecondTitle>
                        Login to continue.
                    </SecondTitle>
                    {loginError ? <BadLogin>Incorrect username or password.</BadLogin> : null}
                    <InputContainer>
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            fullWidth
                        />
                    </InputContainer>
                    <LoginButton onClick={handleLogin} >
                        Entrar
                    </LoginButton>
                    <ForgotPassword>
                        Esqueceu a senha?
                    </ForgotPassword>
                </LoginContainer>
            </LoginMainContainer>
        </div>
    )
}

export default LoginPage