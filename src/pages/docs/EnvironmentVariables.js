import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";

import Code from "../../components/Code";

const Intro = () => (
  <div id="introduction" className="mb-5">
    <h3>Introduction</h3>
    <p className="text-lg">
      Your project can consume variables declared in your environment as if 
      they were declared locally in your JS files. By default you will have 
      {" "}<code>NODE_ENV</code> defined for you, and any other environment variables 
      starting with <code>REACT_APP_</code>.
    </p>

    <p className="text-lg">
      The docs includes information to understand how the theme is
      organized, how to make changes to the source code, and how to compile
      and extend it to fit your needs.
    </p>
  </div>
);

const Adding = () => (
  <div id="adding-environment-variables" className="mb-5">
    <h3>Adding environment variables</h3>
    <p className="text-lg">
      To define permanent environment variables, create a file called <code>.env</code>{" "}
      in the root of your project:
    </p>

    <Code>
      REACT_APP_NOT_SECRET_CODE=abcdef
    </Code>

    <p className="text-lg">
      Note: You need to restart the development server after changing <code>.env</code> files.
    </p>
  </div>
);

const Accessing = () => (
  <div id="accessing-environment-variables" className="mb-5">
    <h3>Accessing environment variables</h3>
    <p className="text-lg">
      Environment variables will be defined for you on <code>process.env</code>. 
      For example, having an environment variable named <code>REACT_APP_NOT_SECRET_CODE</code> 
      will be exposed in your JS as <code>process.env.REACT_APP_NOT_SECRET_CODE</code>.
    </p>

    <Code>{`if (process.env.NODE_ENV !== 'production') {
  // do something
}`}</Code>

    <Code>{`<title>{process.env.REACT_APP_WEBSITE_NAME}</title>`}</Code>

    <p className="text-lg">
      Note: You need to restart the development server after changing <code>.env</code> files.
    </p>
  </div>
);
const LearnMore = () => (
  <div id="learn-more" className="mb-5">
    <h3>Learn more</h3>
    <p className="text-lg">
      To learn more about environment variables,{" "}
      <a
        href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
        target="_blank"
        rel="noopener noreferrer"
      >
        click here
      </a>.
    </p>
  </div>
);

const EnvironmentVariables = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg={10} xl={8} className="mx-auto">
        <h1 className="h3">Environment Variables</h1>
        <hr className="my-4" />
        <Intro />
        <Adding />
        <Accessing />
        <LearnMore />
      </Col>
    </Row>
  </Container>
);

export default EnvironmentVariables;
