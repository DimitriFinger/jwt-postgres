import styled from "styled-components";

export const LoginMainContainer = styled.div`
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

export const WelcomeTitle = styled.h1`
    font-size: 2.5rem; 
    color: #212329;   

`;

export const SecondTitle = styled.h1`
    font-size: 0.8rem;
    margin-top: 5px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 130px;
    margin-top: 40px;
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
    color: #03030389;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: #f9423d;
    
    &:hover{    
        background-color: rgb(249, 66, 61, 0.8);
        transition: all 0.2s ease-in-out;
    }
`;

export const ForgotPassword = styled.div`
    color: #0303039a;
    position: relative;
    top: 20px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
`;

export const BadLogin = styled.h1`
    position: absolute;
    font-size: 0.8rem;
    margin-top: -140px;
    color: #d03838
`;
