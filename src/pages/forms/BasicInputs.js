import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  CustomInput,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

const InputComponent = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Input
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Input type="text" name="input" placeholder="Input" />
    </CardBody>
  </Card>
);

const TextareaComponent = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Textarea
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Input type="textarea" name="input" placeholder="Textarea" />
    </CardBody>
  </Card>
);

const Checkboxes = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Checkboxes
      </CardTitle>
    </CardHeader>
    <CardBody>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" /> Option one is this and that—be sure to
          include why it's great
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" disabled /> Option two is disabled
        </Label>
      </FormGroup>

      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> 1
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> 2
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" disabled /> 3
        </Label>
      </FormGroup>
    </CardBody>
  </Card>
);

const CustomCheckboxes = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Custom checkboxes
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox"
        label="Custom checkbox"
        className="mb-2"
      />
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox2"
        label="Disabled custom checkbox"
        checked
        disabled
        className="mb-2"
      />
      <CustomInput
        type="checkbox"
        id="exampleCustomCheckbox3"
        label="Disabled custom checkbox"
        disabled
      />
    </CardBody>
  </Card>
);

const CustomSelects = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Custom selects
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CustomInput
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </CustomInput>

      <CustomInput
        type="select"
        id="exampleCustomSelectMultiple"
        name="customSelectMultiple"
        multiple
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </CustomInput>
    </CardBody>
  </Card>
);

const Sizes = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Sizes
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Input
        type="text"
        placeholder="Large input"
        bsSize="lg"
        className="mb-3"
      />
      <Input type="text" placeholder="Medium input" className="mb-3" />
      <Input type="text" placeholder="Small input" bsSize="sm" />
    </CardBody>
  </Card>
);

const Radios = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Radios
      </CardTitle>
    </CardHeader>
    <CardBody>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="radio" name="radio1" checked onChange={() => true} />{" "}
          Option one is this and that—be sure to include why it's great
        </Label>
      </FormGroup>
      <FormGroup check className="mb-2">
        <Label check>
          <Input type="radio" name="radio1" /> Option two can be something else
          and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup check disabled className="mb-2">
        <Label check>
          <Input type="radio" name="radio1" disabled /> Option three is disabled
        </Label>
      </FormGroup>

      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="radio2" checked onChange={() => true} /> 1
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="radio2" /> 2
        </Label>
      </FormGroup>
      <FormGroup check inline disabled>
        <Label check>
          <Input type="radio" name="radio2" disabled /> 3
        </Label>
      </FormGroup>
    </CardBody>
  </Card>
);

const CustomRadios = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Custom radios
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CustomInput
        type="radio"
        id="exampleCustomRadio"
        name="customRadio"
        label="Toggle this custom radio"
        className="mb-2"
      />
      <CustomInput
        type="radio"
        id="exampleCustomRadio2"
        name="customRadio"
        label="Or toggle this other custom radio"
        className="mb-2"
      />
      <CustomInput
        type="radio"
        id="exampleCustomRadio3"
        label="Disabled custom radio"
        checked
        disabled
        className="mb-2"
      />
      <CustomInput
        type="radio"
        id="exampleCustomRadio4"
        label="Other disabled custom radio"
        disabled
      />
    </CardBody>
  </Card>
);

const Switches = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Switches
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CustomInput
        type="switch"
        id="exampleCustomSwitch"
        name="customSwitch"
        label="Toggle this switch element"
      />
      <CustomInput
        type="switch"
        id="exampleCustomSwitch1"
        label="Disabled switch element"
        disabled
      />
    </CardBody>
  </Card>
);

const Selects = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Selects
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Input
        type="select"
        id="exampleCustomSelect"
        name="customSelect"
        className="mb-3"
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Input>

      <Input
        type="select"
        id="exampleCustomSelectMultiple"
        name="customSelectMultiple"
        multiple
      >
        <option value="">Open this select menu</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </Input>
    </CardBody>
  </Card>
);

const Disabled = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Disabled
      </CardTitle>
    </CardHeader>
    <CardBody>
      <FormGroup>
        <Label for="disabledInput">Disabled input</Label>
        <Input
          type="text"
          name="disabledInput"
          id="disabledInput"
          placeholder="Disabled input"
          disabled
        />
      </FormGroup>
      <FormGroup>
        <Label for="disabledSelect">Disabled select menu</Label>
        <Input type="select" name="disabledSelect" id="disabledSelect" disabled>
          <option value="">Disabled select</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </Input>
      </FormGroup>

      <FormGroup check className="mb-2">
        <Label check>
          <Input type="checkbox" disabled /> Can't check this
        </Label>
      </FormGroup>
    </CardBody>
  </Card>
);

const ReadOnly = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Read only
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Input
        type="text"
        name="readonlyInput"
        id="readonlyInput"
        placeholder="Readonly input"
        readOnly
      />
    </CardBody>
  </Card>
);

const BasicInputs = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Basic Inputs</h1>

    <Row>
      <Col lg="6">
        <InputComponent />
        <TextareaComponent />
        <Checkboxes />
        <CustomCheckboxes />
        <CustomSelects />
        <Sizes />
      </Col>
      <Col lg="6">
        <Radios />
        <CustomRadios />
        <Switches />
        <Selects />
        <Disabled />
        <ReadOnly />
      </Col>
    </Row>
  </Container>
);

export default BasicInputs;
