import React from "react";
import { Col, Card, CardBody, CardHeader, Progress, Row } from "reactstrap";

const Statistics = () => (
  <Row>
    <Col lg="6" xl="3">
      <Card className="flex-fill">
        <CardHeader>
          <span className="badge badge-primary float-right">Today</span>
          <h5 className="card-title mb-0">Income</h5>
        </CardHeader>
        <CardBody className="my-2">
          <Row className="d-flex align-items-center mb-4">
            <Col xs="8">
              <h2 className="d-flex align-items-center mb-0 font-weight-light">
                $37.500
              </h2>
            </Col>
            <Col xs="4" className="text-right">
              <span className="text-muted">57%</span>
            </Col>
          </Row>

          <Progress
            color="primary"
            value={57}
            className="progress-sm shadow-sm mb-1"
          />
        </CardBody>
      </Card>
    </Col>
    <Col lg="6" xl="3">
      <Card className="flex-fill">
        <CardHeader>
          <span className="badge badge-warning float-right">Annual</span>
          <h5 className="card-title mb-0">Orders</h5>
        </CardHeader>
        <CardBody className="my-2">
          <Row className="d-flex align-items-center mb-4">
            <Col xs="8">
              <h2 className="d-flex align-items-center mb-0 font-weight-light">
                3.282
              </h2>
            </Col>
            <Col xs="4" className="text-right">
              <span className="text-muted">82%</span>
            </Col>
          </Row>

          <Progress
            color="warning"
            value={82}
            className="progress-sm shadow-sm mb-1"
          />
        </CardBody>
      </Card>
    </Col>
    <Col lg="6" xl="3">
      <Card className="flex-fill">
        <CardHeader>
          <span className="badge badge-info float-right">Monthly</span>
          <h5 className="card-title mb-0">Activity</h5>
        </CardHeader>
        <CardBody className="my-2">
          <Row className="d-flex align-items-center mb-4">
            <Col xs="8">
              <h2 className="d-flex align-items-center mb-0 font-weight-light">
                19.312
              </h2>
            </Col>
            <Col xs="4" className="text-right">
              <span className="text-muted">64%</span>
            </Col>
          </Row>

          <Progress
            color="info"
            value={64}
            className="progress-sm shadow-sm mb-1"
          />
        </CardBody>
      </Card>
    </Col>
    <Col lg="6" xl="3">
      <Card className="flex-fill">
        <CardHeader>
          <span className="badge badge-success float-right">Yearly</span>
          <h5 className="card-title mb-0">Revenue</h5>
        </CardHeader>
        <CardBody className="my-2">
          <Row className="d-flex align-items-center mb-4">
            <Col xs="8">
              <h2 className="d-flex align-items-center mb-0 font-weight-light">
                $82.400
              </h2>
            </Col>
            <Col xs="4" className="text-right">
              <span className="text-muted">32%</span>
            </Col>
          </Row>

          <Progress
            color="success"
            value={32}
            className="progress-sm shadow-sm mb-1"
          />
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Statistics;
