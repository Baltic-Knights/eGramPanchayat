import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchemes } from '../../Redux/actions/schemesAction';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { jsx,css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
import "./schemes-style.css"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Schemes = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSchemes())
  }, [])
  const schemes = useSelector(state => state.schemes.data);
  // if(schemes===undefined)
  const activeKey = schemes[0]?._id;

  const schemesComponent = schemes.map((scheme) => {
    return (
      <Fade in>
        <Row key={scheme._id} className="mt-3 justify-content-center">
          <Card className="col-md-8 col-sm-8 col-xs-8">
            <Accordion className="myAccordian" defaultActiveKey={activeKey}>
              <Accordion.Toggle as={Card.Header} className="back" eventKey={scheme._id}>
                <h4>{scheme.title}</h4>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={scheme._id}>
                <Card.Body>
                  <Media tag="li">
                    <img
                      width={200}
                      height={200}
                      className="mr-3"
                      src={scheme.picture}
                      alt={scheme.title}
                    />
                    <Media.Body className="">
                      <p><b>Description:</b><br />{scheme.description}</p>
                      <p><b>Department:</b><br />{scheme.department}</p>
                      <Button href={scheme.weblink} target="blank" className="mr-auto">Apply Now</Button>
                    </Media.Body>
                  </Media>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card>

        </Row>
      </Fade>
    );
  });
  return (

    { schemes } ? <Container fluid className="mt-5 mb-5">
      <Row className="mt-3 mb-3">
        <Col>
          <h2 className="text-center">Government Schemes.</h2>
        </Col>
      </Row>
      <Stagger in>{schemesComponent}</Stagger>


    </Container> : <div>
      {/* <ClipLoader
      css={override}
      size={150}
      color={"#123abc"}
      loading={this.state.loading}
    /> */}
    </div>
  );

}

export default Schemes;
