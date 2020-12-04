import React from "react";
import loginImg from "./login.svg";
import './login.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
// import { useDispatch, useSelector } from 'react-redux';
const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const handleSubmit = (values) => {

}
const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  //   const auth = useSelector(state => state);
  //   const userLogin=(e)=>{
  //       e.preventDefault();
  //       const user={
  //           email,password
  //       }
  //       dispatch(login(user));
  //   }
  //     console.log(auth)
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-5 mt-3' >
          <FadeTransform
            in
            transformProps={{
              exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card className="frm">
              <div className="text-center mt-4 mb-4"><h1 className="">Login</h1></div>
              <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                  <div className="form-group">
                    <Row><Col className="col-md-4 offset-md-1">
                      <Form.Label>Email Id:</Form.Label></Col>
                      <Col className="col-md-6">
                        <Control.text
                          autoComplete="off"
                          model=".email"
                          id="email"
                          className="form-control"
                          placeholder="Enter Your Email Id"
                          validators={{
                            required, validEmail
                          }}
                        />
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
                  </div>
                  <Row><Col>
                    <div className="form-group">
                      <Row><Col className="col-md-4 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                        <Col className="col-md-6">
                          <Control.text
                            autoComplete="off"
                            model=".password"
                            id="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            validators={{
                              required, minLength:minLength(8)
                            }}
                          />
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
                  <div className="text-center mt-2">
                    <Button variant="primary" type="submit">Login</Button>
                  </div>
                </LocalForm>
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
            </Card></FadeTransform>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

