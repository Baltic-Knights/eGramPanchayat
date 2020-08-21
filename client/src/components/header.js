import React, { Component } from 'react'
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
import './components.css';
class Header extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">eGramPanchayat</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <NavLink exact activeClassName="active_class" className="links" to="/">
                            <span className="fa fa-home fa-lg mr-2"></span>Home</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink exact activeClassName="active_class" className="links" to="/village">
                            <span className="fa fa-building fa-lg mr-2"></span>About Village</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink exact activeClassName="active_class" className="links" to="/schemes">
                        <span className="fa fa-signal fa-lg mr-2"></span>Schemes</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink exact activeClassName="active_class" className="links" to="/payment">
                        <span className="fa fa-credit-card fa-lg mr-2"></span>Revenue Payment</NavLink>
                    </Nav.Link>
                    <NavDropdown title="Documents" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Residential Certificate</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Home Revenue Receipt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Water Revenue Receipt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Farm Revenue Receipt</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        <NavLink exact activeClassName="active_class" className="links" to="/about">
                        <span className="fa fa-address-card fa-lg mr-2"></span>About us</NavLink>
                    </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto mr-2">
                    <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login"><span className="fa fa-sign-in fa-lg mr-2"></span>Login</NavLink></Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;