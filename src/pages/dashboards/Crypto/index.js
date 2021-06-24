import React from "react";
import { Container, Row, Col } from "reactstrap";

import Chart from "./Chart";
import Header from "./Header";
import Markets from "./Markets";
import Orders from "./Orders";
import Tickers from "./Tickers";

const Crypto = () => (
  <Container fluid className="p-0">
    <Header />
    <Tickers />
    <Row>
      <Col lg="5" className="d-flex col-xxl-4">
        <Markets />
      </Col>
      <Col lg="7" className="d-flex col-xxl-8">
        <Chart />
      </Col>
    </Row>
    <Orders />
  </Container>
);

export default Crypto;
