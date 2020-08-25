import React, { useState,useEffect } from 'react'
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './components.css';
const Header=(props)=>{
       const [userdata,setUserData]=useState({
           name:"",
           picture:""
       })
       useEffect(()=>{
           if(props.user){
                setUserData({
                    name:props.user.username,
                    picture:props.user.picture
                })
           }
        
       },[])
       const renderContent=()=>{
           switch(props.user){
               case null:
                   return(
                    <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login">
                            <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Login
                        </NavLink>
                    </Button>)
                case false:
                    return(
                    <Button variant="outline-primary">
                        <NavLink exact className="active_class login_btn" to="/login">
                            <span className="fa fa-sign-in fa-lg mr-2"></span>
                            Login
                        </NavLink>
                    </Button> )
                default:
                    return(
                            <>
                            <img className="profileImg mr-3" src={props.user.picture}/>
                            <Button variant="outline-primary">
                                <NavLink exact className="active_class login_btn" to="/api/logout">
                                    <span className="fa fa-sign-out fa-lg mr-2"></span>
                                    Logout
                                </NavLink>
                            </Button></>
                             )
           }
        }
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">eGramPanchayat</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink exact activeClassName="active_class" className="links" to="/">
                            <span className="fa fa-home fa-lg mr-2"></span>Home</NavLink>
                        <NavLink exact activeClassName="active_class" className="links" to="/village">
                            <div className="ml-3"><span className="fa fa-building fa-lg mr-2"></span>About Village</div></NavLink>
                        <NavLink exact activeClassName="active_class" className="links" to="/schemes">
                            <div className="ml-3"><span className="fa fa-signal fa-lg mr-2"></span>Schemes</div></NavLink>
                        <NavLink exact activeClassName="active_class" className="links" to="/payment">
                            <div className="ml-3"><span className="fa fa-credit-card fa-lg mr-2"></span>Revenue Payment</div></NavLink>
                    
                    <NavDropdown className="mt-0" title="Documents" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Residential Certificate</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Home Revenue Receipt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Water Revenue Receipt</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Farm Revenue Receipt</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink exact activeClassName="active_class" className="links" to="/about">
                        <div className="ml-3"><span className="fa fa-address-card fa-lg mr-2"></span>About us</div></NavLink>
                    </Nav>
                    <Nav className="ml-auto mr-2">
                        
                        
                        {renderContent()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
const mapStateToProps=(state)=>{
        return {
            user:state.auth
        }
}
export default connect(mapStateToProps)(Header);