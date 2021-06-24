import React from "react";
import { Col, Card, CardBody, Media, Row } from "reactstrap";

import { ShoppingCart, Activity, DollarSign, ShoppingBag } from "react-feather";

const Statistics = () => (
  <Row>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <ShoppingCart className="feather-lg text-primary" />
            </div>
            <Media body>
              <h3 className="mb-2">2.562</h3>
              <div className="mb-0">Sales Today</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <Activity className="feather-lg text-warning" />
            </div>
            <Media body>
              <h3 className="mb-2">17.212</h3>
              <div className="mb-0">Visitors Today</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <DollarSign className="feather-lg text-success" />
            </div>
            <Media body>
              <h3 className="mb-2">$ 24.300</h3>
              <div className="mb-0">Total Earnings</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <ShoppingBag className="feather-lg text-danger" />
            </div>
            <Media body>
              <h3 className="mb-2">43</h3>
              <div className="mb-0">Pending Orders</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl className="d-none d-xxl-flex">
      <Card className="flex-fill">
        <CardBody className="py-4">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <DollarSign className="feather-lg text-info" />
            </div>
            <Media body>
              <h3 className="mb-2">$ 18.700</h3>
              <div className="mb-0">Total Revenue</div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Statistics;
