import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { readApplicants } from '../../../Redux/actions/residenceActions';
import {Stagger } from 'react-animation-components';
import * as FcIcons from "react-icons/fc";
import axiosInstance from '../../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { BeatLoader } from 'react-spinner';
import { css } from "@emotion/react";
import './pages.css';

function AdResidence() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readApplicants())
    }, [])
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    const applicants = useSelector(state => state.residence);
    let cards = "";
    const Approve = (name, UID) => {
        const residenceData = {
            name: name,
            UID: Number(UID),
        }
        axiosInstance.post('residence/download', residenceData)
        store.addNotification({
            title: 'Application Approved!',
            message: 'Residence certificate generated sucessfully!',
            type: "info",
            container: 'top-right',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                showIcon: true
            }
        // .then(() => axiosInstance.get('residence/download', { responseType: 'blob' }))
        // .then((res) => { 
        //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        //     saveAs(pdfBlob, 'generatedDocument.pdf')
        //   })
        })
        window.location.reload(false);
    }
    const Reject = (UID) => {
        const residenceData = {
            UID: Number(UID),
        }
        console.log(residenceData);
        axiosInstance.post('residence/reject', residenceData)
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
    if (applicants?.applicants?.data) {
        const activeKey = applicants?.applicants?.data[0]._id;
        cards = applicants?.applicants.data.map((data, id) => {
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
                                <div className="mt-4">
                                    <FcIcons.FcApprove className="icons" size={40} onClick={((e) => Approve(data.name, data.UID))} />
                                    <FcIcons.FcDisapprove className="ml-3 icons" size={40} onClick={((e) => Reject(data.UID))} />
                                    {/* <MdIcons.MdDelete className="ml-3 icons" size={30} /> */}
                                </div>
                            </Card.Body>

                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            )
        })
    } else if(!applicants){
        cards=`<BeatLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading
        />`
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
