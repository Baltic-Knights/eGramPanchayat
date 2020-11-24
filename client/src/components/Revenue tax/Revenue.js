import React, { useState } from 'react';
import './revenue.css';
import axiosInstance from '../../helpers/axios';
import { saveAs } from 'file-saver';
import RevenueImg from './revenue.jpg'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
const Residence = () => {
    const [name, setName] = useState("");
    const [home, setHome] = useState("");
    const [water, setWater] = useState("");
    const [health, setHealth] = useState("");
    const [light, setLight] = useState("");
    const [penalty, setPenalty] = useState("");
    const [warrant, setWarrant] = useState("");

    const generatePDF = e => {
        e.preventDefault();
        const revenueData = {
            home_tax:home,
            water_tax:water,
            health_tax:health,
            light_tax:light,
            penalty_tax:penalty,
            warrant_tax:warrant
        }
        console.log(revenueData);
        // const res = axiosInstance.post('residence/create', residenceData)
        // console.log(res)
        // .then(()=>axiosInstance.get('residence/download',{responseType:"blob"}))
        // .then((res)=>{
        //     const pdfBlob=new Blob([res.data],{type:'application/pdf'});
        //     saveAs(pdfBlob,'certificate.pdf');
        // })
    }
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col className='col-md-5 mt-3' >
                    <Card className='frm'>
                        <div className="text-center mt-4 mb-4"><h1 className="">Revenue tax receipt.</h1></div>
                        <Card.Img varient="top" className="pic mt-1 col-md-6 col-sm-10 offset-md-3" src={RevenueImg}></Card.Img>
                        <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                        <Card.Body>
                            <Form onSubmit={generatePDF}>
                                <Form.Group controlId="formGroupEmail">
                                    <Row><Col className="col-md-3 offset-md-1">
                                        <Form.Label>Name:</Form.Label></Col>
                                        <Col className="col-md-7">
                                            <Form.Control type="name"
                                                placeholder="Enter applicant's full name"
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Col></Row>
                                </Form.Group>
                                <Row><Col>
                                    <Form.Group controlId="formGroupPassword">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Home Tax:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="tax"
                                                    placeholder="Home tax"
                                                    name="home tax"
                                                    value={home}
                                                    onChange={(e) => setHome(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <Row><Col>
                                    <Form.Group controlId="formGroupPassword">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Water Tax:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="tax"
                                                    placeholder="Light tax"
                                                    name="Light tax"
                                                    value={light}
                                                    onChange={(e) => setLight(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <Row><Col>
                                    <Form.Group controlId="formGroupFile">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Health tax:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="tax"
                                                    placeholder="Health tax"
                                                    name="Health tax"
                                                    value={health}
                                                    onChange={(e) => setHealth(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <Row><Col>
                                    <Form.Group controlId="formGroupFile">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Water Tax:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="tax"
                                                    placeholder="Water tax"
                                                    name="Water tax"
                                                    value={water}
                                                    onChange={(e) => setWater(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <Row><Col>
                                    <Form.Group controlId="formGroupFile">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Penalty Tax:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="tax"
                                                    placeholder="Penalty tax"
                                                    name="Penalty tax"
                                                    value={penalty}
                                                    onChange={(e) => setPenalty(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <Row><Col>
                                    <Form.Group controlId="formGroupFile">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Warrant Tax:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="tax"
                                                    placeholder="Warrant tax"
                                                    name="Warrant tax"
                                                    value={warrant}
                                                    onChange={(e) => setWarrant(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <div className="text-center mt-4">
                                    <Button variant="primary" type="submit">Download PDF</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card></Col>
            </Row>

        </Container>
    )
}

export default Residence;