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
                    <NavLink to='/welcome' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar