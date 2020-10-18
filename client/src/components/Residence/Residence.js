import React,{useState} from 'react';
import './residence.css';
import axiosInstance from '../../helpers/axios';
import { saveAs } from 'file-saver';
import ResidenceImg from './residence.png'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
const Residence = () => {
    const [name,setName]=useState("");
    const [UID,setUID]=useState("");
    const [picture,setPicture]=useState('');
    const generatePDF=e=>{
        e.preventDefault();
        const residenceData={
            name:name,
            UID:UID,
            picture
        }
        console.log(residenceData);
        const res=axiosInstance.post('residence/create',residenceData)
        console.log(res)
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
                        <div className="text-center mt-4 mb-4"><h1 className="">Residence Certificate.</h1></div>
                        <Card.Img varient="top" className="pic mt-1 col-md-6 col-sm-10 offset-md-3" src={ResidenceImg}></Card.Img>
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
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                        </Col></Row>
                                </Form.Group>
                                <Row><Col>
                                    <Form.Group controlId="formGroupPassword">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Adhar Number:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="name"
                                                    placeholder="Enter Adhar Number"
                                                    name="UID"
                                                    value={UID}
                                                    onChange={(e)=>setUID(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group></Col></Row>
                                <Row><Col>
                                    <Form.Group controlId="formGroupFile">
                                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>Passport Size Photo:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="file"
                                                    accept="image/*"
                                                    onChange={(e)=>setPicture(e.target.files[0])}
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