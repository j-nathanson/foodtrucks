import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg'

function Navigation() {
    const [isNavOpen, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!isNavOpen);
    }

    return (
        <Navbar dark sticky='top' expand='md'>
            <Container>
                <NavbarBrand className='mr-auto' href='/'>
                    <img src={logo} alt='Logo' className='mr-2' width={40} height={40} />
                    Foodies Trucks NYC
                </NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className='ml-auto'>
                        <NavItem>
                            <NavLink className='nav-link' to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/catering'>Catering</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/ourtrucks'>Our Trucks</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;