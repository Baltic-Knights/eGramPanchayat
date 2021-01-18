import React from 'react'
import Sidebar from '../Sidebar';
import { Container,Row,Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { isAuth } from '../../../helpers/auth';

function AdRevenueReceipt() {
    return (
        isAuth() ? isAuth().role === 'admin'?  
        <Container fluid className="m-0 p-0">
        <Row className="d-flex">
            <Col className="col-md-3">
            <Sidebar />
            </Col>
            <Col className="col-md-3">
            <h1>Payment</h1>
            </Col>
        </Row>
    </Container>:isAuth().role === 'user'?<Redirect to="/"/> :<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default AdRevenueReceipt;
