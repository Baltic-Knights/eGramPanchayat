import React, { useState } from 'react';
// import './revenue.css';
import axiosInstance from '../../helpers/axios';
import PaymentImg from './payment receipt.jpg'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';

const PaymentReceipt = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const paymentData = {
            name: name,
            email: email
        }
        // console.log(paymentData);
        // const res = axiosInstance.post('residence/create', residenceData)
        // console.log(res)
    }
    return (
        <Container fluid className="mb-3">
            <Row className="justify-content-md-center">
                <Col className='col-md-5 mt-3' >
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card className='frm'>
                            <div className="text-center mt-4 mb-4"><h1 className="">Payment receipt.</h1></div>
                            <Card.Img varient="top" className="pic mt-1 col-md-6 col-sm-10 offset-md-3" src={PaymentImg}></Card.Img>
                            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formGroupName">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Name:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="name"
                                                    autoComplete="off"
                                                    placeholder="Enter applicant's full name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupEmail">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Email Id:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="email id"
                                                    autoComplete="off"
                                                    placeholder="Enter email id"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group>
                                    <div className="text-center mt-4">
                                        <Button variant="primary" type="submit">Pay Now</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card></FadeTransform></Col>
            </Row>

        </Container>
    )
}

export default PaymentReceipt;