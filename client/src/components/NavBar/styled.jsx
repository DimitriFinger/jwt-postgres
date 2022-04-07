import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Logo = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: 1.8rem;
  padding-bottom: 5px;
  margin-left: 15px;
`;

export const Nav = styled.nav`
  background: #212329;
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
  
  @media screen and (max-width: 768px){
    position: relative;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:active {
    color: red;
    font-weight: bold;
  };
  &:hover{
    color: #f9423d;    
    font-size: 18px;
    transition: all 0.1s ease-in-out;
  }

  @media screen and (max-width: 768px){
    text-align: center;
    line-height: 60px;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'table' : 'none')};
  };

  
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    background-color: #212329;
    margin: 0;
    width: 100%;
    position: absolute;
    top: 60px;
    transition: all 0.1s ease-in-out;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    margin: 1px 0;

  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 25px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    padding-right: 30px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: rgb(249, 66, 61, 0.8);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    border: 2px solid #f9423d;
    margin-right: -6px;
  }
`;