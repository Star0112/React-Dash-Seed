import React from "react";
import { connect } from "react-redux";

import { Col, Container, Row } from "reactstrap";

import Line from "./Line";
import Area from "./Area";
import Bar from "./Bar";
import Column from "./Column";
import Pie from "./Pie";
import Heatmap from "./Heatmap";
import Mixed from "./Mixed";
import Candlestick from "./Candlestick";

class ApexCharts extends React.Component {
  componentDidUpdate() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }

  render() {
    return (
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">ApexCharts</h1>

        <Row>
          <Col lg="6">
            <Line />
          </Col>
          <Col lg="6">
            <Area />
          </Col>
          <Col lg="6">
            <Bar />
          </Col>
          <Col lg="6">
            <Column />
          </Col>
          <Col lg="6">
            <Pie />
          </Col>
          <Col lg="6">
            <Heatmap />
          </Col>
          <Col lg="6">
            <Mixed />
          </Col>
          <Col lg="6">
            <Candlestick />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(store => ({
  theme: store.theme.currentTheme
}))(ApexCharts);
