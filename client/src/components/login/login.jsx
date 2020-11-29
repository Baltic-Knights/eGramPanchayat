import React, { useState } from "react";
import loginImg from "../../login.svg";
import './login.css';
import {login} from '../../Redux/actions/authActions'
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
    const auth = useSelector(state => state);
    const userLogin=(e)=>{
        e.preventDefault();
        const user={
            email,password
        }
        dispatch(login(user));
    }
      console.log(auth)
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-5 mt-3' >
          <Card className="frm">
            <div className="text-center mt-4 mb-4"><h1 className="">Login</h1></div>
            <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
            <Card.Body>
              <Form onSubmit={userLogin}>
                <Form.Group controlId="formGroupEmail">
                  <Row><Col className="col-md-3 offset-md-1">
                    <Form.Label>Email ID:</Form.Label></Col>
                    <Col className="col-md-7">
                    <Form.Control type="email"
                          placeholder="Email ID"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)} />
                    </Col></Row>
                </Form.Group>
                <Row><Col>
                  <Form.Group controlId="formGroupPassword">
                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                      <Col className="col-md-7">
                        <Form.Control type="password"
                          placeholder="Enter Password"
                          onChange={(e)=>setPassword(e.target.value)} />
                      </Col></Row>
                  </Form.Group></Col></Row>
                <div className="text-center mt-4">
                  <Button variant="primary" type="submit">Login</Button>
                </div>
              </Form>
              <div className="text-center mt-3"><i>Or signup with</i></div>
              <div className="text-center mt-3">
                <Button variant="danger" className="mr-5" type="submit"><span className="fa fa-facebook fa-lg mr-2"></span>Facebook</Button>
                <a href="/auth/google">
                  <Button variant="danger" className="ml-5" type="submit">
                    <span className="fa fa-google-plus fa-lg mr-2"></span>
                        Google+</Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

