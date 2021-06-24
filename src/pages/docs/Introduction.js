import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row
} from "reactstrap";

const Intro = () => (
  <div id="introduction" className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      Hello, I hope you find this template useful. AppStack React has been
      crafted on top of Bootstrap 4 and React. The included docs don't
      replace the official ones, but provide a clear view of all extended
      styles and new components that this template provides on top of
      Bootstrap 4.
    </p>

    <p className="text-lg">
      The docs includes information to understand how the theme is
      organized, how to make changes to the source code, and how to compile
      and extend it to fit your needs.
    </p>
  </div>
);

const TableOfContents = () => (
  <div id="table-of-contents" className="mb-5">
    <h3>
      Table of Contents
    </h3>
    <ul className="text-lg">
      <li>
        <Link to="/docs/getting-started">Getting started</Link>
      </li>
      <li>
        <Link to="/docs/environment-variables">Environment Variables</Link>
      </li>
      <li>
        <Link to="/docs/deployment">Deployment</Link>
      </li>
      <li>
        <Link to="/docs/state-management">State Management</Link>
      </li>
      <li>
        <Link to="/docs/plugins">Plugins</Link>
      </li>
      <li>
        <Link to="/docs/changelog">Changelog</Link>
      </li>
    </ul>
  </div>
);

const SomethingMissing = () => (
  <div id="something-missing" className="mb-5">
    <h3>Something missing?</h3>
    <p className="text-lg">
      If something is missing in the documentation or if you found some part 
      confusing, please send us an email 
      (<a href="mailto:support@bootlab.io">support@bootlab.io</a>) with your 
      suggestions for improvement. We love hearing from you!
    </p>
  </div>
);

const Introduction = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg={10} xl={8} className="mx-auto">
        <h1 className="h3">Documentation</h1>
        <hr className="my-4" />
        <Intro />
        <TableOfContents />
        <SomethingMissing />
        {/* <Contents /> */}
      </Col>
    </Row>
  </Container>
);

export default Introduction;
