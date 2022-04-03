import styled from "styled-components";

export const PageMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 768px){
        flex-direction: column;
        margin-top: 30px;
    }

`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    height: 450px;
    width: 350px;
    @media screen and (max-width: 768px){
        height: 230px;
        width: 230px;
    }
    
`;

export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    width: 350px;

    @media screen and (max-width: 768px){
        
    }
`;

export const SadFace = styled.img`
    max-width: 100%;
    max-height: 100%;

    @media screen and (max-width: 768px){
        margin-top: 70px;
    }
`;

export const ErrorCode = styled.h1`
    font-size: 9rem;
    color: #666767;

    @media screen and (max-width: 768px){
        font-size: 7rem;
    }
`;

export const PageNotFound = styled.h1`
    font-size: 1.5rem;    
    color: #666767
`;

export const TextField = styled.h1`
    font-size: 1rem;
    margin-top: 15px;
    color: #666767
`;