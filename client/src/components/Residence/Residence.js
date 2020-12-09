import React, { useState } from 'react';
import './residence.css';
import axiosInstance from '../../helpers/axios';
import ResidenceImg from './residence.png';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validText = (val) => /^[a-zA-Z]+ [a-zA-Z]+$/i.test(val);

const Residence = () => {
    const [name, setName] = useState("");
    const [UID, setUID] = useState();

    const generatePDF = e => {

        const residenceData = {
            name: name,
            UID: Number(UID),
            date: new Date()
        }
        // console.log(residenceData);
        axiosInstance.post('residence/create', residenceData)
            .then(res => {
                console.log(res)
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'Your Application is Submitted Successfully.',
                    type: "success",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
            })
    }
    return (
        isAuth() ? isAuth() && isAuth().role === 'admin' || isAuth().role === 'user'
        ?
        <Container fluid className="mb-3">
            <Row className="justify-content-md-center">
                <Col className='col-md-5 mt-3' >
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card className='frm'>
                            <div className="text-center mt-4 mb-4"><h1 className="">Residence Certificate.</h1></div>
                            <Card.Img varient="top" className="pic mt-1 col-md-6 col-sm-10 offset-md-3" src={ResidenceImg}></Card.Img>
                            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                            <Card.Body>
                                <LocalForm>
                                    <div className="form-group">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Name:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Control.text
                                                    model=".name"
                                                    className="form-control"
                                                    autoComplete="off"
                                                    placeholder="Enter applicant's full name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    validators={{
                                                        required, maxLength: maxLength(20), minLength: minLength(3)
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".name"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required ',
                                                        // validText: 'Enter a valid Name!',
                                                        maxLength: 'Length should be less than 15 characters!',
                                                        minLength: 'Length should be greater than 3 characters!'
                                                    }}
                                                />
                                            </Col></Row>
                                    </div>
                                    <Row><Col>
                                        <div className="form-group">
                                            <Row><Col className="col-md-3 offset-md-1"><Form.Label>Adhar Number:</Form.Label></Col>
                                                <Col className="col-md-7">
                                                    <Control.text
                                                        model=".adhar"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        placeholder="Enter Adhar Number"
                                                        name="UID"
                                                        value={UID}
                                                        onChange={(e) => setUID(e.target.value)}
                                                        validators={{
                                                            required, isNumber, maxLength: maxLength(12), minLength: minLength(12)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".adhar"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            isNumber: 'Enter a valid Number!',
                                                            maxLength: 'Length should be less than 12 characters!',
                                                            minLength: 'Length should be exact 12 characters!'
                                                        }}
                                                    />
                                                </Col></Row>
                                        </div></Col></Row>
                                    <div className="text-center mt-4">
                                        <Button variant="primary" type="submit" onClick={generatePDF}>Apply</Button>
                                    </div>
                                </LocalForm>
                            </Card.Body>
                        </Card></FadeTransform></Col>
            </Row>

        </Container>:<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default Residence;