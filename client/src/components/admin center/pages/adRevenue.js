import React from 'react'
import Sidebar from '../Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import Media from 'react-media';

function AdRevenueReceipt() {
    return (
        <Media query="(min-width:1300px)">
            {matches => {
                return matches ? <Container fluid className="m-0 p-0">
                    <Row className="d-flex">
                        <Col className="col-md-3">
                            <Sidebar />
                        </Col>
                        <Col className="col-md-3">
                            <h1>Payment</h1>
                        </Col>
                    </Row>
                </Container> : <div>
                        <h3 className="text-center mt-5 mb-5 titles">This Section is accessible only from Desktop resolutions.</h3>
                    </div>;
            }}
        </Media>
    )
}

export default AdRevenueReceipt;
