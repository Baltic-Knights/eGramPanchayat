import React, { useState } from 'react';
import './residence.css';
import axiosInstance from '../../helpers/axios';
import ResidenceImg from './residence.png'
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import FileSaver from 'file-saver';
import { saveAs } from 'file-saver';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const Residence = () => {
    const [name, setName] = useState("");
    const [UID, setUID] = useState();
    const generatePDF = e => {

        const residenceData = {
            name: name,
            UID: Number(UID),
        }
        console.log(residenceData);
        axiosInstance.post('residence/create', residenceData)
        store.addNotification({
            title: 'Registration Successful!!!',
            message: 'Your Application is Submitted Successfully.',
            type: "success",                         
            container: 'top-right',                
            animationIn: ["animated", "fadeIn"],     
            animationOut: ["animated", "fadeOut"],   
            dismiss: {
              duration: 3000,
              showIcon:true
            }
          })
        // .then(() => axiosInstance.get('residence/download', { responseType: 'blob' }))
        // .then((res) => { 
        //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        //     saveAs(pdfBlob, 'generatedDocument.pdf')
        //   })

    }
    const downloadPDF = e => {
        // const res = axiosInstance.get('residence/download', {
        //     responseType: 'arraybuffer',
        //     headers: {
        //         Accept: 'application/pdf',
        //     },
        // });
        // console.log(res)
        // // const res = axiosInstance.get('residence/download', { responseType: "blob" })
        // FileSaver.saveAs(
        //     new Blob([res.data], { type: 'application/pdf' }),
        //     `sample.pdf`
        // );

        axiosInstance.get('residence/download', {responseType: 'arraybuffer'})
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]
                    , { type: "application/pdf" }))
                var link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'residence.pdf');
                document.body.appendChild(link);
                link.click();
            })
    }
    return (
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
                                <Form>
                                    <Form.Group controlId="formGroupEmail">
                                        <Row><Col className="col-md-3 offset-md-1">
                                            <Form.Label>Name:</Form.Label></Col>
                                            <Col className="col-md-7">
                                                <Form.Control type="name"
                                                    autoComplete="off"
                                                    placeholder="Enter applicant's full name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Col></Row>
                                    </Form.Group>
                                    <Row><Col>
                                        <Form.Group controlId="formGroupPassword">
                                            <Row><Col className="col-md-3 offset-md-1"><Form.Label>Adhar Number:</Form.Label></Col>
                                                <Col className="col-md-7">
                                                    <Form.Control type="name"
                                                        autoComplete="off"
                                                        placeholder="Enter Adhar Number"
                                                        name="UID"
                                                        value={UID}
                                                        onChange={(e) => setUID(e.target.value)}
                                                    />
                                                </Col></Row>
                                        </Form.Group></Col></Row>
                                    <div className="text-center mt-4">
                                        <Button variant="primary" type="submit" onClick={generatePDF}>Apply</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card></FadeTransform></Col>
            </Row>

        </Container>
    )
}

export default Residence;