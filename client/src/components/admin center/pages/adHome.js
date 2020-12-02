import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Sidebar from '../Sidebar';
function AdHome() {
    return (
        <Container fluid className="m-0 p-0">
            <Row className="d-flex">
                <Col className="col-md-3">
                <Sidebar />
                </Col>
                <Col className="col-md-3">
                <h1>Home</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default AdHome;