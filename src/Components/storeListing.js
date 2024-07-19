import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function StoreListings() {
  return (
    <>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
          <Col xs={12} sm={4}>
            <Row>
              <Col xs={3}>
                <Image src="[IMG SRC]" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={4}>
            <Row>
              <Col xs={3}>
                <Image src="[IMG SRC]" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={4}>
            <Row>
              <Col xs={3}>
                <Image src="[IMG SRC]" roundedCircle />
              </Col>
              <Col>
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StoreListings;
