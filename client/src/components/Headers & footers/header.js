import React, { useEffect } from 'react'
import { Nav, Navbar, NavDropdown, Button,Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components.css';
const Header = (props) => {
    //    const [userdata,setUserData]=useState({
    //        name:"",
    //        picture:""
    //    })
    useEffect(() => {
        //    if(props.user){
        //         setUserData({
        //             name:props.user.username,
        //             picture:props.user.picture
        //         })
        //    }

    }, [])
    const renderContent = () => {
        switch (props.user) {
            case null:
                return (
                    <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login">
                            <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Login
                        </NavLink>
                    </Button>)
            case false:
                return (
                    <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login">
                            <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Login
                        </NavLink>
                    </Button>)
            default:
                return (
                    <>
                        {/* <img className="profileImg mr-3" alt="poor network" src={props.user.picture}/> */}
                        {/* <Button variant="outline-primary">
                            <NavLink exact className="active_class login_btn" to="/api/logout">
                                <span className="fa fa-sign-out fa-lg mr-2"></span>
                                    Logout
                                </NavLink>
                        </Button></> */}
                        <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login">
                            <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Login
                        </NavLink>
                        </Button></>
                )
        }
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><h3>eGramPanchayat</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact activeClassName="active_class" className="links" to="/">
                        <div className="ml-3">
                            Home
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName="active_class" className="links" to="/village">
                        <div className="ml-3">
                            About village
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName="active_class" className="links" to="/schemes">
                        <div className="ml-3">
                            Schemes
                        </div>
                    </NavLink>
                    <NavLink exact activeClassName="active_class" className="links" to="/payment">
                        <div className="ml-3">
                            Revenue Payment
                            </div>
                    </NavLink>
                    <NavDropdown className="mt-0" title="Documents" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <NavLink exact to="/residence" className="links text-dark">
                                Residential Certificate
                        </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink exact to="/revenue" className="links text-dark">
                                Revenue tax receipt
                        </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink exact to="/payreceipt" className="links text-dark">
                                Payment receipt
                        </NavLink>
                        </NavDropdown.Item>
                        </NavDropdown>
                    
                    <NavLink exact activeClassName="active_class" className="links" to="/admin">
                        <div className="ml-3">
                        Admin Center</div>
                    </NavLink>
                    <NavLink exact activeClassName="active_class" className="links" to="/about">
                        <div className="ml-3">
                        About us</div>
                    </NavLink>
                </Nav>
                <Nav className="ml-auto mr-2">
                    {renderContent()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}
export default connect(mapStateToProps)(Header);