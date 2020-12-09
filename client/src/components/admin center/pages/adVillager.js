import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axiosInstance from '../../../helpers/axios';
import villager from "./villager.jpg";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { isAuth } from '../../../helpers/auth';
import { FadeTransform } from 'react-animation-components';
import Sidebar from '../Sidebar';
import { Redirect } from 'react-router';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validText = (val) => /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/i.test(val);
const required = (val) => val && val.length;

function AdHome() {
    const [name, setName] = useState();
    const [UID, setUID] = useState();

    const AddRecord = e => {
        const record = {
            name,
            UID
        }
        axiosInstance.post('villager/addRecord', record)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'Population related data updated!!',
                    type: "success",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err.response)
                store.addNotification({
                    title: `${err.response.data.error}`,
                    message: 'Your data is available in database!',
                    type: "info",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
                window.location.reload(false);
            })
            
    }

    const deleteRecord = e => {
        const record = {
            name,
            UID
        }
        axiosInstance.post('villager/deleteRecord', record)
            .then(res => {
                store.addNotification({
                    title: 'Records deleted successfully!!',
                    message: 'Villager data removed from database!!',
                    type: "success",
                    container: 'top-right',
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                })
                window.location.reload(false);
            })
            
    }
    return (
        isAuth() ? isAuth() && isAuth().role === 'admin' || isAuth().role === 'user'
        ?  
        <Container fluid className="m-0 p-0">
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1>Villager Database Management Section.</h1>
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card className="frm col-md-6 text-center mx-auto mt-5">
                            <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={villager}></Card.Img>
                            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                            <Card.Body>
                                <LocalForm>
                                    <div className="form-group">
                                        <Row><Col className="col-md-5 offset-md-1">
                                            <Form.Label>Villager Name:</Form.Label></Col>
                                            <Col className="col-md-6">
                                                <Control.text
                                                    autoComplete="off"
                                                    model=".name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Enter Villager Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    validators={{
                                                        required, validText
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".name"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required ',
                                                        validText: 'Enter a valid Name!'
                                                    }}
                                                />
                                            </Col></Row>
                                    </div>
                                    <Row><Col>
                                        <div className="form-group">
                                            <Row><Col className="col-md-5 offset-md-1"><Form.Label>Aadhar Number:</Form.Label></Col>
                                                <Col className="col-md-6">
                                                    <Control.text
                                                        autoComplete="off"
                                                        model=".UID"
                                                        type="UID"
                                                        id="UID"
                                                        className="form-control"
                                                        placeholder="Enter Adhar No"
                                                        value={UID}
                                                        onChange={(e) => setUID(e.target.value)}
                                                        validators={{
                                                            required, maxLength: maxLength(12), minLength: minLength(12)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".UID"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'UID should be 12 digits!',
                                                            maxLength: 'UID should be 12 digits!'
                                                        }}
                                                    />
                                                </Col></Row>

                                        </div></Col></Row>

                                    <div className="text-center mt-3">
                                        <Button variant="primary" onClick={AddRecord}>Submit Record</Button>
                                        <Button variant="danger ml-3" onClick={deleteRecord}>Delete Record</Button>
                                    </div>
                                </LocalForm>
                            </Card.Body>
                        </Card></FadeTransform>
                </Col>
            </Row>
        </Container>:<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default AdHome;
