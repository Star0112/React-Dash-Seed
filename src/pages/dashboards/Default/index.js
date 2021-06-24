import React from "react";
import { Container, Row, Col } from "reactstrap";

import Appointments from "./Appointments";
import BarChart from "./BarChart";
import Calendar from "./Calendar";
import Feed from "./Feed";
import Header from "./Header";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import Projects from "./Projects";
import Statistics from "./Statistics";

const Default = () => (
  <Container fluid className="p-0">
    <Header />
    <Statistics />
    <Row>
      <Col lg="8" className="d-flex">
        <LineChart />
      </Col>
      <Col lg="4" className="d-flex">
        <Feed />
      </Col>
    </Row>
    <Row>
      <Col lg="6" xl="4" className="d-flex">
        <Calendar />
      </Col>
      <Col lg="6" xl="4" className="d-flex">
        <PieChart />
      </Col>
      <Col lg="6" xl="4" className="d-flex">
        <Appointments />
      </Col>
    </Row>
    <Row>
      <Col lg="6" xl="8" className="d-flex">
        <Projects />
      </Col>
      <Col lg="6" xl="4" className="d-flex">
        <BarChart />
      </Col>
    </Row>
  </Container>
);

export default Default;
