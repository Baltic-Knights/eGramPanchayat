import React from 'react'
import Sidebar from '../Sidebar';
import { Container,Row,Col } from 'react-bootstrap';
function AdVillage() {
    return (
        <Container fluid className="m-0 p-0">
        <Row className="d-flex">
            <Col className="col-md-3">
            <Sidebar />
            </Col>
            <Col className="col-md-3">
            <h1>Village</h1>
            </Col>
        </Row>
    </Container>
    )
}

export default AdVillage;
