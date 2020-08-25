import React from "react";
import loginImg from "../../login.svg";
import './login.css';
import {connect} from 'react-redux';
import {Redirect } from 'react-router-dom'
import {Row,Col, Card,Container,Button,Form} from 'react-bootstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) { 
    console.log("Current State is: " + JSON.stringify(values));
    alert("Thank you for your Feedback: " + JSON.stringify(values));   
}
  render() {
    if(!this.props.user){
    return (
      <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-5 mt-3' >
            <Card className="frm">
            <div className="text-center mt-4 mb-4"><h1 className="">Login</h1></div>
              <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                <Row><Col className="col-md-3 offset-md-1"><Form.Label>Username:</Form.Label></Col>
                <Col className="col-md-7">
                  <Form.Control type="email" 
                      placeholder="Username" />
                      </Col></Row>
                </Form.Group>
                <Row><Col>
                <Form.Group controlId="formGroupPassword">
                <Row><Col className="col-md-3 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                <Col className="col-md-7">
                  <Form.Control type="password" 
                  placeholder="Password" />
                  </Col></Row>
                </Form.Group></Col></Row>
                <div  className="text-center mt-4"><Button variant="primary" type="submit">Login</Button></div>
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
    }else{
      return <Redirect to="/"/>
    }
  }
}
const mapStateToProps=(state)=>{
    return {
      user:state.auth
    }
}
export default connect(mapStateToProps)(Login);

