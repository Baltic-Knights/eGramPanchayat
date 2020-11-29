import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { readApplicants } from '../../../Redux/actions/residenceActions';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function AdResidence() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readApplicants())
    }, [])
    const applicants = useSelector(state => state.residence);
    let cards="";
    if (applicants.applicants[0]) {
        console.log(applicants.applicants[0]._id)
        const activeKey = applicants?.applicants[0]._id;
        cards = applicants?.applicants.map((data,id) => {
            return (
                <Fade in>
                <Card className="col-md-12 col-sm-12 mt-5">
                    <Accordion className="myAccordian" defaultActiveKey={activeKey}>
                        <Accordion.Toggle as={Card.Header} className="back" eventKey={data._id}>
                            <h4>{data.name}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data._id}>
                            <Card.Body>
                                {/* <Media tag="li">
                                <img
                                    width={200}
                                    height={200}
                                    className="mr-3"
                                    src={data.picture}
                                    alt={data.title}
                                />
                                <Media.Body className="">
                                    <p><b>Description:</b><br />{data.description}</p>
                                    <p><b>Department:</b><br />{data.department}</p>
                                    <Button href={data.weblink} target="blank" className="mr-auto">Apply Now</Button>
                                </Media.Body>
                            </Media> */}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Card>
                </Fade>
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
                    <h1>Applicants for Residence Certificate.</h1>
                    <Stagger in><div>{cards}</div></Stagger>
                </Col>
            </Row>
        </Container>
    )
}

export default AdResidence;
