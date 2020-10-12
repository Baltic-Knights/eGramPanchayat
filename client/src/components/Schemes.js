import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchemes } from '../actions/schemesAction';

const Schemes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSchemes())
  }, [])
  const schemes = useSelector(state => state.schemes.data)
  // if(schemes===undefined)
  console.log(schemes)
  const schemesComponent = schemes.map((scheme) => {
    return (

      <Row key={scheme._id}>
        <Card className="col-md-12">
          <Accordion.Toggle as={Card.Header} eventKey={scheme._id}>
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

        </Card>

      </Row>
    );
  });
    return (
        {schemes}?<Container fluid className="mt-5">
          <Accordion defaultActiveKey={schemes}>
            {schemesComponent}
          </Accordion>
      </Container>:<div>loading</div>
    );   
  
}

export default Schemes;