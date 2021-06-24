import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  CustomInput,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row
} from "reactstrap";

const BasicForm = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Basic form</CardTitle>
      <h6 className="card-subtitle text-muted">
        Default Bootstrap form layout.
      </h6>
    </CardHeader>
    <CardBody>
      <Form>
        <FormGroup>
          <Label>Email address</Label>
          <Input type="email" name="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label>Textarea</Label>
          <Input
            type="textarea"
            name="textarea"
            placeholder="Textarea"
            rows="1"
          />
        </FormGroup>
        <FormGroup>
          <Label>File input</Label>
          <Input type="file" name="file" />
          <FormText color="muted">Example block-level help text here.</FormText>
        </FormGroup>

        <FormGroup>
          <CustomInput type="checkbox" id="checkbox" label="Check me out" />
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    </CardBody>
  </Card>
);

const HorizontalForm = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Horizontal form</CardTitle>
      <h6 className="card-subtitle text-muted">Horizontal Bootstrap layout.</h6>
    </CardHeader>
    <CardBody>
      <Form>
        <FormGroup row>
          <Label sm={2} className="text-sm-right">
            Email
          </Label>
          <Col sm={10}>
            <Input type="email" name="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right">
            Password
          </Label>
          <Col sm={10}>
            <Input type="password" name="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right">
            Textarea
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="textarea"
              placeholder="Textarea"
              rows="3"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right pt-sm-0">
            Radios
          </Label>
          <Col sm={10}>
            <div className="custom-controls-stacked">
              <CustomInput
                type="radio"
                id="radio1"
                name="customRadio"
                label="Default radio"
                className="mb-2"
                defaultChecked
              />
              <CustomInput
                type="radio"
                id="radio2"
                name="customRadio"
                label="Second default radio"
                className="mb-2"
              />
              <CustomInput
                type="radio"
                id="radio3"
                label="Disabled radio"
                disabled
              />
            </div>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-sm-right pt-sm-0">
            Checkbox
          </Label>
          <Col sm={10}>
            <CustomInput
              type="checkbox"
              id="checkbox"
              label="Check me out"
              disabled
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

const FormRow = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Form row</CardTitle>
      <h6 className="card-subtitle text-muted">Bootstrap column layout.</h6>
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Address</Label>
          <Input type="text" name="address" placeholder="1234 Main St" />
        </FormGroup>
        <FormGroup>
          <Label>Address 2</Label>
          <Input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>City</Label>
              <Input type="text" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>State</Label>
              <Input type="select" name="state">
                <option />
                <option>...</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label>Zip</Label>
              <Input type="text" name="zip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <CustomInput
            type="checkbox"
            id="checkbox"
            label="Check me out"
            disabled
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </CardBody>
  </Card>
);

const InlineForm = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Inline form</CardTitle>
      <h6 className="card-subtitle text-muted">Single horizontal row.</h6>
    </CardHeader>
    <CardBody>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input type="text" name="name" placeholder="Jane Doe" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="username" />
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <CustomInput
            type="checkbox"
            id="checkbox"
            label="Remember me"
            disabled
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </CardBody>
  </Card>
);

const Layouts = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Form Layouts</h1>

    <Row>
      <Col lg="6">
        <BasicForm />
      </Col>
      <Col lg="6">
        <HorizontalForm />
      </Col>
      <Col lg="12">
        <FormRow />
        <InlineForm />
      </Col>
    </Row>
  </Container>
);

export default Layouts;
