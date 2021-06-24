import React from "react";
import { Container, Row, Col } from "reactstrap";

import Timeline from "./Timeline";
import User from "./User";
import Following from "./Following";
import Activities from "./Activities";

const Social = () => (
  <Container className="p-0">
    <Row>
      <Col lg="8">
        <Timeline />
      </Col>
      <Col lg="4">
        <User />
        <Following />
        <Activities />
      </Col>
    </Row>
  </Container>
);

export default Social;
