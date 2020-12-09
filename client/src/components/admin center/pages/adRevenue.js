import React from 'react'
import Sidebar from '../Sidebar';
import { Container,Row,Col } from 'react-bootstrap';
import history from '../../../helpers/history';
import { Redirect } from 'react-router';
import { isAuth } from '../../../helpers/auth';

function AdRevenueReceipt() {
    return (
        isAuth() ? isAuth() && isAuth().role === 'admin' || isAuth().role === 'user'
        ? 
        <Container fluid className="m-0 p-0">
        <Row className="d-flex">
            <Col className="col-md-3">
            <Sidebar />
            </Col>
            <Col className="col-md-3">
            <h1>Payment</h1>
            </Col>
        </Row>
    </Container>:<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default AdRevenueReceipt;
