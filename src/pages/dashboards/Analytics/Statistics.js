import React from "react";
import { Col, Card, CardBody, CardHeader, Progress, Row } from "reactstrap";

const Statistics = () => (
  <div className="w-100">
    <Row>
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className="badge badge-primary float-right">Today</span>
            <h5 className="card-title mb-0">Visitors</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  17.212
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
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className="badge badge-warning float-right">Annual</span>
            <h5 className="card-title mb-0">Bounce</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  2.364
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
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className="badge badge-info float-right">Monthly</span>
            <h5 className="card-title mb-0">Real-Time</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  1.856
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
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className="badge badge-success float-right">Yearly</span>
            <h5 className="card-title mb-0">Activity</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  57.300
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
  </div>
);

export default Statistics;
