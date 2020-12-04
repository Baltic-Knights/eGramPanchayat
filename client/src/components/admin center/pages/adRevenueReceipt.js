import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import * as FcIcons from "react-icons/fc";
import { readRevenue } from '../../../Redux/actions/revenueActions';
import { Container, Row, Card, Col, Accordion,Form } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import axiosInstance from '../../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function AdRevenue() {
    const [home, setHome] = useState();
    const [water, setWater] = useState();
    const [health, setHealth] = useState();
    const [light, setLight] = useState();
    const [penalty, setPenalty] = useState();
    const [warrant, setWarrant] = useState();

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readRevenue())
    }, [])
    const revenue = useSelector(state => state.revenue);
    let cards = "";
    const generatePDF=(name,uid)=>{
        const revenueData = {
            name:name,
            UID:uid,
            home_tax: Number(home),
            water_tax: Number(water),
            health_tax: Number(health),
            light_tax: Number(light),
            penalty_tax: Number(penalty),
            warrant_tax: Number(warrant),
            date:new Date()
        }
        axiosInstance.post('revenue/download', revenueData);
        store.addNotification({
            title: 'Application Approved!!',
            message: 'Residence certificate generated sucessfully!',
            type: "success",                         
            container: 'top-right',                
            animationIn: ["animated", "fadeIn"],     
            animationOut: ["animated", "fadeOut"],   
            dismiss: {
              duration: 3000,
              showIcon:true
            }
          })
          window.location.reload(false);
    }
    const Reject = (UID) => {
        const revenueData = {
            UID: Number(UID),
        }
        axiosInstance.post('revenue/reject', revenueData)
        store.addNotification({
            title: 'Application Rejected!',
            message: 'Send Notification to villager.',
            type: "danger",
            container: 'top-right',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                showIcon: true
            }
        }) 
        window.location.reload(false);
    }
    if (revenue?.revenueData?.data) {
        const activeKey = revenue?.revenueData?.data[0]._id;
        cards = revenue?.revenueData?.data.map((data, id) => {
            return (
                <Card className="col-md-12 col-sm-12 mt-5">
                    <Accordion className="myAccordian" defaultActiveKey={activeKey}>
                        <Accordion.Toggle as={Card.Header} className="back" eventKey={data._id}>
                            <h4>{data.name}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data._id}>
                            <Card.Body>
                                <h6 className="">Applicant Name:{data.name}</h6>
                                <h6 className="mt-3">Adhar Number:{data.UID}</h6>
                                <h6 className="mt-3">Application Date:{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}.</h6>
                                <hr />
                                <Form className="">
                                    <Row><Col>
                                        <Form.Group controlId="formGroupPassword">
                                            <Row className="col-md-12 mt-3 d-flex justify-content-md-center">
                                                <Col className="col-md-2"><Form.Label>Home Tax:</Form.Label></Col>
                                                <Col className="col-md-2">
                                                    <Form.Control type="tax"
                                                        autoComplete="off"
                                                        placeholder="Home tax"
                                                        name="home tax"
                                                        value={home}
                                                        onChange={(e) => setHome(e.target.value)}
                                                    />
                                                </Col>
                                                <Col className="col-md-2"><Form.Label>Light Tax:</Form.Label></Col>
                                                <Col className="col-md-2">
                                                    <Form.Control type="tax"
                                                        autoComplete="off"
                                                        placeholder="Light tax"
                                                        name="Light tax"
                                                        value={light}
                                                        onChange={(e) => setLight(e.target.value)}
                                                    />
                                                </Col></Row>
                                        </Form.Group></Col></Row>
                                    <Row><Col>
                                        <Form.Group controlId="formGroupPassword">
                                            <Row></Row>
                                        </Form.Group></Col></Row>
                                    <Row><Col>
                                        <Form.Group controlId="formGroupFile">
                                            <Row className="col-md-12 mt-3 d-flex justify-content-md-center">
                                                <Col className="col-md-2"><Form.Label>Health tax:</Form.Label></Col>
                                                <Col className="col-md-2">
                                                    <Form.Control type="tax"
                                                        autoComplete="off"
                                                        placeholder="Health tax"
                                                        name="Health tax"
                                                        
                                                        value={health}
                                                        onChange={(e) => setHealth(e.target.value)}
                                                    />
                                                </Col>
                                                <Col className="col-md-2"><Form.Label>Water Tax:</Form.Label></Col>
                                                <Col className="col-md-2">
                                                    <Form.Control type="tax"
                                                        autoComplete="off"
                                                        placeholder="Water tax"
                                                        name="Water tax"
                                                        
                                                        value={water}
                                                        onChange={(e) => setWater(e.target.value)}
                                                    />
                                                </Col></Row>
                                        </Form.Group></Col></Row>
                                    <Row><Col>
                                        <Form.Group controlId="formGroupFile">
                                            <Row className="col-md-12 mt-3 d-flex justify-content-md-center">
                                                <Col className="col-md-2"><Form.Label>Penalty Tax:</Form.Label></Col>
                                                <Col className="col-md-2">
                                                    <Form.Control type="tax"
                                                        autoComplete="off"
                                                        placeholder="Penalty tax"
                                                        name="Pen. tax"
                                                        
                                                        value={penalty}
                                                        onChange={(e) => setPenalty(e.target.value)}
                                                    />
                                                </Col>
                                                <Col className="col-md-2 float-right"><Form.Label>Warrant Tax:</Form.Label></Col>
                                                <Col className="col-md-2">
                                                    <Form.Control type="tax"
                                                        autoComplete="off"
                                                        placeholder="War. tax"
                                                        name="Warrant tax"
                                                        
                                                        value={warrant}
                                                        onChange={(e) => setWarrant(e.target.value)}
                                                    />
                                                </Col></Row>
                                        </Form.Group></Col></Row>
                                    <div className="mt-4">
                                    <FcIcons.FcApprove className="icons" size={40} onClick={((e) => generatePDF(data.name, data.UID))} />
                                    <FcIcons.FcDisapprove className="ml-3 icons" size={40}  onClick={((e) => Reject(data.UID))} />                                </div>
                                </Form>
                                
                            </Card.Body>

                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            )
        })
    }
    return (
        <Container fluid className="m-0 p-0">
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1>Applicants for Revenue Tax Receipt.</h1>
                    <Stagger in><div>{cards}</div></Stagger>
                </Col>
            </Row>
        </Container>
    )
}

export default AdRevenue;
