import React, { useContext, useState } from 'react';

import { AuthContext } from '../../context/authContext';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo
} from './styled';
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }


    if (authenticated) {
        return (
            <>
                <Nav>

                    <Logo>jwt-postgres</Logo>

                    <Bars onClick={() => setIsOpen(!isOpen)} />
                    <NavMenu isOpen={isOpen}>
                        <NavLink isOpen={isOpen} to='/home' onClick={() => setIsOpen(!isOpen)}>
                            Home
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/login' onClick={handleLogout}>Logout</NavBtnLink>
                    </NavBtn>
                </Nav>
            </>
        );
    }

    return (
        <>
            <Nav>

                <Logo>dimitri.finger</Logo>

                <Bars onClick={() => setIsOpen(!isOpen)} />
                <NavMenu isOpen={isOpen}>
                    <NavLink isOpen={isOpen} to='/login' onClick={() => setIsOpen(!isOpen)}>
                        About
                    </NavLink>
                    <NavLink isOpen={isOpen} to='/services' onClick={() => setIsOpen(!isOpen)}>
                        Services
                    </NavLink>
                    <NavLink isOpen={isOpen} to='/contact-us'>
                        Contact Us
                    </NavLink>
                    <NavLink isOpen={isOpen} to='/sign-up'>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar