import React, { Component } from "react";
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from "reactstrap";
import { NavLink, Link } from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
    }
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <Navbar dark sticky="top" expand="md" className="bg-dark">
                <div className="container">

                    <NavbarBrand className="mr-auto" href="/">

                        <img src="assets/images/logo.svg" alt="Logo" className="mr-2" width={40} height={40} />
                        Foodies Trucks
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className='nav-link' to='/home'>
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/catering'>
                                    <i className="fa fa-list fa-lg" /> Catering
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/ourtrucks'>
                                    <i className="fa fa-info fa-lg" /> Our Trucks
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar >
        );
    }
}

export default Navigation;