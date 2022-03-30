import styled from "styled-components";

export const LoginPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.div`
    width: 350px;
    height: 400px;
    background-color: #ffffff78;
    position: relative;
    top: 100px;
    box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 130px;
    margin-top: 80px;
`;

export const LoginButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    margin-top: 20px;
    padding-top: 2px;
    border-radius: 5px;
    font-weight: bold;
    color: #0303039a;
    cursor: pointer;
    border: 2px transparent black;
    background-color: rgb(249, 66, 61, 0.8);
`;

export const ForgotPassword = styled.div`
    color: #0303039a;
    position: relative;
    top: 30px;
    font-size: 13px;
    font-weight: bold;
`;