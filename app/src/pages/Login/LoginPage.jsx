import React from 'react';
import { LoginContainer, LoginPageContainer, InputContainer, LoginButton, ForgotPassword } from './styled';
import TextField from '@mui/material/TextField';

const LoginPage = () => {
    return (
        <>
            <LoginPageContainer>
                <LoginContainer>
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
                        Login
                    </LoginButton>
                    <ForgotPassword>
                        Esqueceu a senha?
                    </ForgotPassword>
                </LoginContainer>
            </LoginPageContainer>
        </>
    )
}

export default LoginPage