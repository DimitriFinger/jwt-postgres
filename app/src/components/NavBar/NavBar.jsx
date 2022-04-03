import React, { useState } from 'react'
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