import React from "react";
import loginImg from "./login.svg";
import './login.css';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, Container, Form, Button } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
class Register extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className='col-md-5 mt-3'>
          <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
            <Card className="frm">
              <div className="text-center mt-4 mb-4"><h1 className="">Register</h1></div>
              <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Row><Col className="col-md-4 offset-md-1"><Form.Label>First Name:</Form.Label></Col>
                      <Col className="col-md-6"><Form.Control type="text" className="inp" placeholder="Enter Your First Name" /></Col></Row>
                  </Form.Group>
                  <Row><Col>
                    <Form.Group controlId="formGroupPassword">
                      <Row><Col className="col-md-4 offset-md-1"><Form.Label>Last Name:</Form.Label></Col>
                        <Col className="col-md-6"><Form.Control type="text" className="inp" placeholder="Enter Your Last Name" /></Col></Row>
                    </Form.Group></Col></Row>
                  <Row><Col>
                    <Form.Group controlId="formGroupPassword">
                      <Row><Col className="col-md-4 offset-md-1"><Form.Label>Email:</Form.Label></Col>
                        <Col className="col-md-6"><Form.Control type="email" className="inp" placeholder="Enter Your Email Id" /></Col></Row>
                    </Form.Group></Col></Row>
                  <Row><Col>
                    <Form.Group controlId="formGroupPassword">
                      <Row><Col className="col-md-4 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                        <Col className="col-md-6"><Form.Control type="password" className="inp" placeholder="Enter Your Password" /></Col></Row>
                    </Form.Group></Col></Row>
                  <div className="text-center mt-2"><Button variant="primary" type="submit">Register</Button></div>
                </Form>
              </Card.Body>
            </Card></FadeTransform>
          </Col>
        </Row>
        {/* admin */}
      </Container>
    );
  }
}
export default Register;