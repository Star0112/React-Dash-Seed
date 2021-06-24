import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const SignUp = () => (
  <React.Fragment>
    <div className="text-center mt-4">
      <h1 className="h2">Get started</h1>
      <p className="lead">
        Start creating the best possible user experience for you customers.
      </p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
                bsSize="lg"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Company</Label>
              <Input
                bsSize="lg"
                type="text"
                name="company"
                placeholder="Enter your company name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                bsSize="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                bsSize="lg"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </FormGroup>
            <div className="text-center mt-3">
              <Link to="/dashboard/default">
                <Button color="primary" size="lg">
                  Sign up
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignUp;
