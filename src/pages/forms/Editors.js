import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";

const Quill = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Quill</CardTitle>
      <h6 className="card-subtitle text-muted">
        Modern WYSIWYG editor built for compatibility and extensibility.
      </h6>
    </CardHeader>
    <CardBody>
      <ReactQuill placeholder="Type something" />
    </CardBody>
  </Card>
);

const Bubble = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Bubble</CardTitle>
      <h6 className="card-subtitle text-muted">
        Bubble is a simple tooltip based theme for Quill.
      </h6>
    </CardHeader>
    <CardBody>
      <ReactQuill theme="bubble" placeholder="Compase an epic..." />
    </CardBody>
  </Card>
);

const Editors = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Editors</h1>

    <Quill />
    <Bubble />
  </Container>
);

export default Editors;
