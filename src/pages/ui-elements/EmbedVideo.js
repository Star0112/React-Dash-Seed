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

const Embed21By9 = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Responsive embed video 21:9</CardTitle>
      <h6 className="card-subtitle text-muted">21:9 aspect ratio</h6>
    </CardHeader>
    <CardBody className="pt-0">
      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          title="Responsive embed video 21:9"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </CardBody>
  </Card>
);

const Embed16By9 = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Responsive embed video 16:9</CardTitle>
      <h6 className="card-subtitle text-muted">16:9 aspect ratio</h6>
    </CardHeader>
    <CardBody className="pt-0">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Responsive embed video 16:9"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </CardBody>
  </Card>
);

const Embed1By1 = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Responsive embed video 1:1</CardTitle>
      <h6 className="card-subtitle text-muted">1:1 aspect ratio</h6>
    </CardHeader>
    <CardBody className="pt-0">
      <div className="embed-responsive embed-responsive-1by1">
        <iframe
          title="Responsive embed video 1:1"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </CardBody>
  </Card>
);

const Embed4By3 = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Responsive embed video 4:3</CardTitle>
      <h6 className="card-subtitle text-muted">4:3 aspect ratio</h6>
    </CardHeader>
    <CardBody className="pt-0">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe
          title="Responsive embed video 4:3"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
    </CardBody>
  </Card>
);

const EmbedVideo = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Embed Video</h1>

    <Row>
      <Col lg="6">
        <Embed21By9 />
      </Col>
      <Col lg="6">
        <Embed16By9 />
      </Col>
      <Col lg="6">
        <Embed1By1 />
      </Col>
      <Col lg="6">
        <Embed4By3 />
      </Col>
    </Row>
  </Container>
);

export default EmbedVideo;
