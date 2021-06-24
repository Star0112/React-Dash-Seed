import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";

const Tickers = () => (
  <Row>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody>
          <div className="float-right text-danger">-5.28%</div>
          <h4 className="mb-2">HSR/BTC</h4>
          <div className="mb-1">
            <strong>0.001416</strong> $16.61
          </div>
          <div>Volume: 2,692.47 BTC</div>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody>
          <div className="float-right text-success">2.61%</div>
          <h4 className="mb-2">BNB/BTC</h4>
          <div className="mb-1">
            <strong>0.00022004</strong> $2.58
          </div>
          <div>Volume: 842.52 BTC</div>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody>
          <div className="float-right text-danger">-7.27%</div>
          <h4 className="mb-2">POWR/BTC</h4>
          <div className="mb-1">
            <strong>0.00005806</strong> $0.68
          </div>
          <div>Volume: 393.03 BTC</div>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl>
      <Card className="flex-fill">
        <CardBody>
          <div className="float-right text-danger">-4.98%</div>
          <h4 className="mb-2">TRX/BTC</h4>
          <div className="mb-1">
            <strong>0.00000229</strong> $0.04
          </div>
          <div>Volume: 6,836.31 BTC</div>
        </CardBody>
      </Card>
    </Col>
    <Col md="6" xl className="d-none d-xxl-flex">
      <Card className="flex-fill">
        <CardBody>
          <div className="float-right text-success">16.11%</div>
          <h4 className="mb-2">IOTA/BTC</h4>
          <div className="mb-1">
            <strong>0.00025800</strong> $3.03
          </div>
          <div>Volume: 14,065.87 BTC</div>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Tickers;
