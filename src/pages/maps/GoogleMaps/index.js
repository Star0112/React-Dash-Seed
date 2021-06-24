import React from "react";
import { Col, Container, Row } from "reactstrap";

import Default from "./Default";
import Hybrid from "./Hybrid";
import LightStyle from "./LightStyle";
import DarkStyle from "./DarkStyle";
import Streetview from "./Streetview";
import Markers from "./Markers";

const GoogleMaps = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Google Maps</h1>

    <Row>
      <Col lg="6">
        <Default />
      </Col>
      <Col lg="6">
        <Hybrid />
      </Col>
      <Col lg="6">
        <LightStyle />
      </Col>
      <Col lg="6">
        <DarkStyle />
      </Col>
      <Col lg="6">
        <Streetview />
      </Col>
      <Col lg="6">
        <Markers />
      </Col>
    </Row>
  </Container>
);

export default GoogleMaps;
