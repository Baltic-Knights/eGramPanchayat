import React from "react";
import { Container, Row, Col,Card } from 'react-bootstrap';
import Population from './population';
import Literacy from './literacy';
import Maps from './maps';
const Home = () => {
    return (
        <Container fluid>
            <Row className="text-center mt-5">
                <Col>
                    <h1 className="font-weight-bold">ग्रामपंचायत कडधे आपले सहर्ष स्वागत करत आहे.</h1>
                </Col>
            </Row>
            <Container fluid>
                <Row className="d-flex mt-5">
                    <Col className="col-md-6">
                        <Population />
                    </Col>
                    <Col className="col-md-6">
                        <Literacy />
                    </Col>
                </Row>
            </Container>

            <Row className="mt-5">
                <Col className="col-md-12">
                    <Card>
                        <Card.Title className="text-center mt-3"> 
                        <h1 className="font-weight-bold">Locate Us.</h1></Card.Title>
                        <hr/>
                        <Card.Body className="text-center mt-0">
                        <Maps />
                        </Card.Body>
                    </Card>
                    
                    </Col>
            </Row>
        </Container>
    );
}

export default Home;