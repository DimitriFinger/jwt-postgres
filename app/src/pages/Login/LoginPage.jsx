import React from 'react';
import { LoginContainer, LoginMainContainer, InputContainer, LoginButton, ForgotPassword, WelcomeTitle, SecondTitle } from './styled';
import TextField from '@mui/material/TextField';

const LoginPage = () => {
    return (
        <>
            <LoginMainContainer>
                <LoginContainer>
                    <WelcomeTitle>
                        WELCOME
                    </WelcomeTitle>
                    <SecondTitle>
                        Login to continue.
                    </SecondTitle>
                    <InputContainer>
                        <TextField
                            id="outlined-password-input"
                            label="Email"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                        />
                    </InputContainer>
                    <LoginButton>
                        Entrar
                    </LoginButton>
                    <ForgotPassword>
                        Esqueceu a senha?
                    </ForgotPassword>
                </LoginContainer>
            </LoginMainContainer>
        </>
    )
}

export default LoginPage