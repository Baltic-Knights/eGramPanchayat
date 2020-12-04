import React from "react";
import loginImg from "./login.svg";
import './login.css';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Row, Col, Card, Container, Form, Button } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validText = (val) => /^[A-Za-z]+$/i.test(val);
const handleSubmit=(values)=>{

}
const Register=()=> {
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
                <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                  <div className="form-group">
                    <Row><Col className="col-md-4 offset-md-1">
                      <Form.Label>First Name:</Form.Label>
                      </Col>
                      <Col className="col-md-6">
                        <Control.text
                        model=".fname"
                        autoComplete="off"
                        id="fname" 
                        className="form-control" 
                        placeholder="Enter Your First Name"
                        validators={{
                          required,validText,maxLength:maxLength(15),minLength:minLength(3)
                        }} />
                        <Errors
                          className="text-danger"
                          model=".fname"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            validText: 'Enter a valid Name!',
                            maxLength:'Length should be less than 15 characters!',
                            minLength:'Length should be greater than 3 characters!'
                          }}
                        />
                        </Col></Row>
                  </div>
                  <Row><Col>
                  <div className="form-group">
                      <Row><Col className="col-md-4 offset-md-1">
                        <Form.Label>Last Name:</Form.Label>
                        </Col>
                        <Col className="col-md-6">
                          <Control.text
                         model=".lname"
                         autoComplete="off"
                         id="lname" 
                         className="form-control" 
                          placeholder="Enter Your Last Name" 
                          validators={{
                            required, validText,maxLength:maxLength(15),minLength:minLength(3)
                          }}/>
                          <Errors
                          className="text-danger"
                          model=".lname"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            validText: 'Enter a valid Name!',
                            maxLength:'Length should be less than 15 characters!',
                            minLength:'Length should be greater than 3 characters!'
                          }}
                        />
                          </Col></Row>
                    </div></Col></Row>
                  <Row><Col>
                  <div className="form-group">
                      <Row><Col className="col-md-4 offset-md-1">
                        <Form.Label>Email:</Form.Label>
                        </Col>
                        <Col className="col-md-6">
                          <Control.text
                          autoComplete="off"
                          model=".email"
                          id="email" 
                          className="form-control"  
                          placeholder="Enter Your Email Id" 
                          validators={{
                            required, validEmail
                          }}/>
                          <Errors
                          className="text-danger"
                          model=".email"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            validEmail: 'Enter a valid email address!'
                          }}
                        />
                          </Col></Row>
                    </div></Col></Row>
                  <Row><Col>
                  <div className="form-group">
                      <Row><Col className="col-md-4 offset-md-1">
                        <Form.Label>Password:</Form.Label>
                        </Col>
                        <Col className="col-md-6">
                          <Control.text
                         model=".password"
                         autoComplete="off"
                         id="password" 
                         className="form-control"
                          placeholder="Enter Your Password" 
                          validators={{
                            required, minLength:minLength(8)
                          }}/>
                          <Errors
                          className="text-danger"
                          model=".password"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            minLength: 'Password should be greater than 8 characters!'
                          }}
                        />
                          </Col></Row>
                    </div></Col></Row>
                  <Row><Col>
                  <div className="form-group">
                      <Row><Col className="col-md-4 offset-md-1">
                        <Form.Label>Repeat Password:</Form.Label>
                        </Col>
                        <Col className="col-md-6">
                          <Control.text
                         model=".rpassword"
                         autoComplete="off"
                         id="rpassword" 
                         className="form-control"
                          placeholder="Repeat Password" 
                          validators={{
                            required, minLength:minLength(8)
                          }}/>
                          <Errors
                          className="text-danger"
                          model=".rpassword"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            minLength: 'Password should be greater than 8 characters!'
                          }}
                        />
                          </Col></Row>
                    </div></Col></Row>
                  <div className="text-center mt-2"><Button variant="primary" type="submit">Register</Button></div>
                </LocalForm>
              </Card.Body>
            </Card></FadeTransform>
          </Col>
        </Row>
      </Container>
    );
  }
export default Register;