import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PaymentImg from './payment.jpg';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';

const Payment = () => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [number, setNumber] = useState();
    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    }

    function isObj(val) {
        return typeof val === 'object'
    }

    function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
            return JSON.stringify(val)
        } else {
            return val
        }
    }

    function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)


        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', stringifyValue(params[key]))
            form.appendChild(input)
        })

        return form
    }

    function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const str = name.split(" ").join("");
        const paymentData = {
            name: str,
            forReason: reason,
            amount: amount,
            emailId: email,
            number: number,
            orderId: "ORDER_ID" + (new Date().getTime())
        }
        console.log(paymentData);
        var url = 'http://localhost:5000/pay/paynow';
        var request = {
            url: url,
            params: paymentData,
            method: "get"
        }
        const response = await axios(request);
        const processParams = await response.data;
        console.log(processParams)
        var details = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: processParams
        }
        post(details);
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
                            <div className="text-center mt-4 mb-4"><h1 className="">Payment Gateway.</h1></div>
                            <Card.Img varient="top" className="pic mt-1 col-md-6 col-sm-10 offset-md-3" src={PaymentImg}></Card.Img>
                            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formGroupName">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Name:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="name"
                                                    autocomplete="off"
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
                                                    autocomplete="off"
                                                    placeholder="Enter email id"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupNumber">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Mobile Number:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="mobile number:"
                                                    autocomplete="off"
                                                    placeholder="Enter mobile number:"
                                                    name="number"
                                                    value={number}
                                                    onChange={(e) => setNumber(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group>
                                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>select receipt option:</Form.Label></Col>
                                        <Col className="col-md-7">
                                            <Form.Control
                                                as="select"
                                                className="my-1 mr-sm-2"
                                                id="inlineFormCustomSelectPref"
                                                custom
                                                value={reason}
                                                onChange={(e) => setReason(e.target.value)}
                                            >
                                                <option value="Residential Certificate.">Residential Certificate.</option>
                                                <option value="Revenue tax receipt.">Revenue tax receipt.</option>
                                               
                                            </Form.Control>
                                        </Col></Row>
                                    <Row><Col>
                                        <Form.Group controlId="formGroupPassword">
                                            <Row><Col className="col-md-3 offset-md-1"><Form.Label>Amount to pay:</Form.Label></Col>
                                                <Col className="col-md-7">
                                                    <Form.Control type="amount"
                                                        autoComplete="off"
                                                        placeholder="Enter Amount"
                                                        name="Amount"
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                    />
                                                </Col></Row>
                                        </Form.Group></Col></Row>
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

export default Payment;