import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledAlert
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const colors = ["primary", "secondary", "success", "danger", "warning", "info"];

const DefaultAlerts = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Default alerts</CardTitle>
      <h6 className="card-subtitle text-muted">
        Alerts with contextual background color.
      </h6>
    </CardHeader>
    <CardBody>
      {colors.map((color, key) => (
        <UncontrolledAlert color={color} key={key}>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </UncontrolledAlert>
      ))}
    </CardBody>
  </Card>
);

const IconAlerts = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Icon alerts</CardTitle>
      <h6 className="card-subtitle text-muted">
        Alerts with icon and background color.
      </h6>
    </CardHeader>
    <CardBody>
      {colors.map((color, key) => (
        <UncontrolledAlert color={color} key={key}>
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </UncontrolledAlert>
      ))}
    </CardBody>
  </Card>
);

const OutlineAlerts = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Outline alerts</CardTitle>
      <h6 className="card-subtitle text-muted">
        Alerts with contextual icon background.
      </h6>
    </CardHeader>
    <CardBody>
      {colors.map((color, key) => (
        <UncontrolledAlert color={color} className="alert-outline" key={key}>
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </UncontrolledAlert>
      ))}
    </CardBody>
  </Card>
);

const ColouredOutlineAlerts = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Colored outline alerts</CardTitle>
      <h6 className="card-subtitle text-muted">
        Alerts with contextual outline color.
      </h6>
    </CardHeader>
    <CardBody>
      {colors.map((color, key) => (
        <UncontrolledAlert
          color={color}
          className="alert-outline-coloured"
          key={key}
        >
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} fixedWidth />
          </div>
          <div className="alert-message">
            <strong>Hello there!</strong> A simple {color} alert—check it out!
          </div>
        </UncontrolledAlert>
      ))}
    </CardBody>
  </Card>
);

const AdditionalContentAlerts = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Alerts with additonal content</CardTitle>
      <h6 className="card-subtitle text-muted">Alerts with large contents.</h6>
    </CardHeader>
    <CardBody>
      <UncontrolledAlert color="primary">
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </div>
      </UncontrolledAlert>
      <UncontrolledAlert color="primary alert-outline">
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </div>
      </UncontrolledAlert>
    </CardBody>
  </Card>
);

const AlertsWithButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Alerts with buttons</CardTitle>
      <h6 className="card-subtitle text-muted">Alerts with actions.</h6>
    </CardHeader>
    <CardBody>
      <UncontrolledAlert color="primary">
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <div className="btn-list">
            <Button color="light" className="mr-1">
              Okay
            </Button>
            <Button color="secondary">No, thanks</Button>
          </div>
        </div>
      </UncontrolledAlert>
      <UncontrolledAlert color="primary alert-outline">
        <div className="alert-message">
          <h4 className="alert-heading">Well done!</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <div className="btn-list">
            <Button color="success" className="mr-1">
              Okay
            </Button>
            <Button color="danger">No, thanks</Button>
          </div>
        </div>
      </UncontrolledAlert>
    </CardBody>
  </Card>
);

const Alerts = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Alerts</h1>

    <Row>
      <Col lg="6">
        <DefaultAlerts />
      </Col>
      <Col lg="6">
        <IconAlerts />
      </Col>
      <Col lg="6">
        <OutlineAlerts />
      </Col>
      <Col lg="6">
        <ColouredOutlineAlerts />
      </Col>
      <Col lg="6">
        <AdditionalContentAlerts />
      </Col>
      <Col lg="6">
        <AlertsWithButtons />
      </Col>
    </Row>
  </Container>
);

export default Alerts;
