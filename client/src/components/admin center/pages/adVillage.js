import React, { useState } from 'react'
import Sidebar from '../Sidebar';
import axiosInstance from '../../../helpers/axios';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { FadeTransform } from 'react-animation-components';

function AdVillage() {
    const [PrevFirstname, setPrevFirstname] = useState("");
    const [PrevSecondname, setPrevSecondname] = useState("");
    const [PrevThirdname, setPrevThirdname] = useState("");
    const [PrevFourthname, setPrevFourthname] = useState("");
    const [PrevFifthname, setPrevFifthname] = useState("");
    const [PrevFirstPeriod, setPrevFirstPeriod] = useState("");
    const [PrevSecondPeriod, setPrevSecondPeriod] = useState("");
    const [PrevThirdPeriod, setPrevThirdPeriod] = useState("");
    const [PrevFourthPeriod, setPrevFourthPeriod] = useState("");
    const [PrevFifthPeriod, setPrevFifthPeriod] = useState("");
    const [PrevFirstCaste, setPrevFirstCaste] = useState("");
    const [PrevSecondCaste, setPrevSecondCaste] = useState("");
    const [PrevThirdCaste, setPrevThirdCaste] = useState("");
    const [PrevFourthCaste, setPrevFourthCaste] = useState("");
    const [PrevFifthCaste, setPrevFifthCaste] = useState("");


    const [CurrFirstname, setCurrFirstname] = useState("");
    const [CurrSecondname, setCurrSecondname] = useState("");
    const [CurrThirdname, setCurrThirdname] = useState("");
    const [CurrFourthname, setCurrFourthname] = useState("");
    const [CurrFifthname, setCurrFifthname] = useState("");
    const [CurrFirstPeriod, setCurrFirstPeriod] = useState("");
    const [CurrSecondPeriod, setCurrSecondPeriod] = useState("");
    const [CurrThirdPeriod, setCurrThirdPeriod] = useState("");
    const [CurrFourthPeriod, setCurrFourthPeriod] = useState("");
    const [CurrFifthPeriod, setCurrFifthPeriod] = useState("");
    const [CurrFirstCaste, setCurrFirstCaste] = useState("");
    const [CurrSecondCaste, setCurrSecondCaste] = useState("");
    const [CurrThirdCaste, setCurrThirdCaste] = useState("");
    const [CurrFourthCaste, setCurrFourthCaste] = useState("");
    const [CurrFifthCaste, setCurrFifthCaste] = useState("");

    
    const submitCurrRecord = (e) => {
        // e.preventDefault();
        const current={
            ID:101,
            Name:[CurrFirstname,CurrSecondname,CurrThirdname,CurrFourthname,CurrFifthname],
            designation:[CurrFirstPeriod,CurrSecondPeriod,CurrThirdPeriod,CurrFourthPeriod,CurrFifthPeriod],
            contact:[CurrFirstCaste,CurrSecondCaste,CurrThirdCaste,CurrFourthCaste,CurrFifthCaste]
        }
        console.log(current)
        axiosInstance.post('currCommittee/addData', current);
        store.addNotification({
            title: 'Records updated successfully!!',
            message: 'current committee data is updated!!',
            type: "success",                         
            container: 'top-right',                
            animationIn: ["animated", "fadeIn"],     
            animationOut: ["animated", "fadeOut"],   
            dismiss: {
              duration: 3000,
              showIcon:true
            }
          })
          
    }
    const submitPrevRecord = (e) => {
        // e.preventDefault();
        const previous={
            ID:102,
            Name:[PrevFirstname,PrevSecondname,PrevThirdname,PrevFourthname,PrevFifthname],
            workingPeriod:[PrevFirstPeriod,PrevSecondPeriod,PrevThirdPeriod,PrevFourthPeriod,PrevFifthPeriod],
            Caste:[PrevFirstCaste,PrevSecondCaste,PrevThirdCaste,PrevFourthCaste,PrevFifthCaste]
        }
        console.log(previous)
        axiosInstance.post('prevCommittee/addData', previous);
        store.addNotification({
            title: 'Records updated successfully!!',
            message: 'Previous committee data is updated!!',
            type: "success",                         
            container: 'top-right',                
            animationIn: ["animated", "fadeIn"],     
            animationOut: ["animated", "fadeOut"],   
            dismiss: {
              duration: 3000,
              showIcon:true
            }
          })
    }
    return (
        <Container fluid className="m-0 p-0">
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1 className="">About Village Section.</h1>
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                    <Card className="mt-3">
                        <Card.Header>Last 5 Village Heads.</Card.Header>
                        <Card.Body>
                            <Form>
                                <Row className="col-md-12">
                                    <Col className="col-md-1">
                                        <Form.Label>1.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={PrevFirstname}
                                            onChange={e=>setPrevFirstname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Period"
                                            autoComplete="off"
                                            value={PrevFirstPeriod}
                                            onChange={e=>setPrevFirstPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Caste" 
                                            value={PrevFirstCaste}
                                            onChange={e=>setPrevFirstCaste(e.target.value)}
                                            />
                                    </Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1">
                                        <Form.Label>2.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={PrevSecondname}
                                            onChange={e=>setPrevSecondname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Period"
                                            autoComplete="off"
                                            value={PrevSecondPeriod}
                                            onChange={e=>setPrevSecondPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Caste"
                                            value={PrevSecondCaste}
                                            onChange={e=>setPrevSecondCaste(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1">
                                        <Form.Label>3.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={PrevThirdname}
                                            onChange={e=>setPrevThirdname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Period"
                                            value={PrevThirdPeriod}
                                            onChange={e=>setPrevThirdPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control type="text"
                                        autoComplete="off"
                                            placeholder="Enter Caste"
                                            value={PrevThirdCaste}
                                            onChange={e=>setPrevThirdCaste(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1">
                                        <Form.Label>4.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={PrevFourthname}
                                            onChange={e=>setPrevFourthname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Period"
                                            value={PrevFourthPeriod}
                                            onChange={e=>setPrevFourthPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Caste"
                                            value={PrevFourthCaste}
                                            onChange={e=>setPrevFourthCaste(e.target.value)}
                                        /></Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1"><Form.Label>5.</Form.Label></Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            value={PrevFifthname}
                                            autoComplete="off"
                                            onChange={e=>setPrevFifthname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Period"
                                            value={PrevFifthPeriod}
                                            onChange={e=>setPrevFifthPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control type="text"
                                        autoComplete="off"
                                            placeholder="Enter Caste"
                                            value={PrevFifthCaste}
                                            onChange={e=>setPrevFifthCaste(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Button className="mt-4" type="submit" onClick={submitPrevRecord}>Update Records</Button>
                            </Form>
                        </Card.Body>
                    </Card></FadeTransform>
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                    <Card className="mt-3">
                        <Card.Header>Current Gram panchayat committee.</Card.Header>
                        <Card.Body>
                        <Form>
                                <Row className="col-md-12">
                                    <Col className="col-md-1">
                                        <Form.Label>1.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={CurrFirstname}
                                            onChange={e=>setCurrFirstname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Designation"
                                            autoComplete="off"
                                            value={CurrFirstPeriod}
                                            onChange={e=>setCurrFirstPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Contact No" 
                                            value={CurrFirstCaste}
                                            onChange={e=>setCurrFirstCaste(e.target.value)}
                                            />
                                    </Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1">
                                        <Form.Label>2.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={CurrSecondname}
                                            onChange={e=>setCurrSecondname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Designation"
                                            autoComplete="off"
                                            value={CurrSecondPeriod}
                                            onChange={e=>setCurrSecondPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Contact No"
                                            value={CurrSecondCaste}
                                            onChange={e=>setCurrSecondCaste(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1">
                                        <Form.Label>3.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={CurrThirdname}
                                            onChange={e=>setCurrThirdname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Designation"
                                            value={CurrThirdPeriod}
                                            onChange={e=>setCurrThirdPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control type="text"
                                        autoComplete="off"
                                            placeholder="Enter Contact No"
                                            value={CurrThirdCaste}
                                            onChange={e=>setCurrThirdCaste(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1">
                                        <Form.Label>4.</Form.Label>
                                    </Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            autoComplete="off"
                                            value={CurrFourthname}
                                            onChange={e=>setCurrFourthname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Designation"
                                            value={CurrFourthPeriod}
                                            onChange={e=>setCurrFourthPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Contact No"
                                            value={CurrFourthCaste}
                                            onChange={e=>setCurrFourthCaste(e.target.value)}
                                        /></Col>
                                </Row>
                                <Row className="col-md-12 mt-3">
                                    <Col className="col-md-1"><Form.Label>5.</Form.Label></Col>
                                    <Col className="col-md-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Name"
                                            value={CurrFifthname}
                                            autoComplete="off"
                                            onChange={e=>setCurrFifthname(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Enter Designation"
                                            value={CurrFifthPeriod}
                                            onChange={e=>setCurrFifthPeriod(e.target.value)}
                                        />
                                    </Col>
                                    <Col className="col-md-3">
                                        <Form.Control type="text"
                                        autoComplete="off"
                                            placeholder="Enter Contact No"
                                            value={CurrFifthCaste}
                                            onChange={e=>setCurrFifthCaste(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                                <Button className="mt-4" type="submit" onClick={submitCurrRecord}>Update Records</Button>
                            </Form>
                        </Card.Body>
                    </Card></FadeTransform>
                </Col>
            </Row>
        </Container>
    )
}

export default AdVillage;
