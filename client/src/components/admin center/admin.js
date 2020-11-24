import React, { useState } from 'react';
import axiosInstance from '../../helpers/axios';
import * as FaIcons from "react-icons/fa";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Admin = () => {
    
    return (
        <Container fluid>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars />
                </Link>
            </div>
        </Container>
    )
}

export default Admin;