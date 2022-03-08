import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'

function Navbar({ handleToggleSidebar }) {
    return (
        <>
            <Nav>
                <NavLink to='/' >Pizza</NavLink>
                <NavIcon onClick={handleToggleSidebar}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar