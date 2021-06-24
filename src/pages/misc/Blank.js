import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";

const Blank = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Blank Page</h1>

    <Row>
      <Col>
        <Card>
          <CardHeader>
            <CardTitle tag="h5" className="mb-0">Empty card</CardTitle>
          </CardHeader>
          <CardBody>&nbsp;</CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Blank;
