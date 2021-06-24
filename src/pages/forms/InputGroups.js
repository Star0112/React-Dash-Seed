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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  UncontrolledButtonDropdown
} from "reactstrap";

const Default = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Default
      </CardTitle>
    </CardHeader>
    <CardBody>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="Username" />
      </InputGroup>
      <InputGroup className="mb-3">
        <Input placeholder="Recipient's username" />
        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          https://example.com/users/
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
    </CardBody>
  </Card>
);

const CheckboxAndRadioAddons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Checkbox and radio addons
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg="6">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Checkbox" />
          </InputGroup>
        </Col>
        <Col lg="6">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input
                  addon
                  type="radio"
                  aria-label="Radio for following text input"
                />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Radio" />
          </InputGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const Sizing = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Sizing
      </CardTitle>
    </CardHeader>
    <CardBody>
      <InputGroup className="mb-3" size="lg">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="Username" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="Username" />
      </InputGroup>
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="Username" />
      </InputGroup>
    </CardBody>
  </Card>
);

const SelectAddons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Select addons
      </CardTitle>
    </CardHeader>
    <CardBody>
      <InputGroup className="mb-3">
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select...</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </CustomInput>
        <InputGroupAddon addonType="append" color="primary">
          <Button>Go!</Button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="mb-3">
        <Input placeholder="Search for..." />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select...</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </CustomInput>
        <InputGroupAddon addonType="append" color="primary">
          <Button>Go!</Button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="mb-3">
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select...</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </CustomInput>
        <Input placeholder="Search for..." />
        <InputGroupAddon addonType="append" color="primary">
          <Button>Go!</Button>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon addonType="prepend" color="primary">
          <Button>Go!</Button>
        </InputGroupAddon>
        <Input placeholder="Search for..." />
        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
          <option value="">Select...</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </CustomInput>
      </InputGroup>
    </CardBody>
  </Card>
);

const ButtonAddons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Button addons
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg="6">
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend" color="primary">
              <Button>Go!</Button>
            </InputGroupAddon>
            <Input placeholder="Search for..." />
          </InputGroup>
        </Col>
        <Col lg="6">
          <InputGroup className="mb-3">
            <Input placeholder="Search for..." />
            <InputGroupAddon addonType="append" color="primary">
              <Button>Go!</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <InputGroup>
        <InputGroupAddon addonType="prepend" color="primary">
          <Button>Hate it</Button>
        </InputGroupAddon>
        <Input placeholder="Product name" />
        <InputGroupAddon addonType="append" color="primary">
          <Button>Love it</Button>
        </InputGroupAddon>
      </InputGroup>
    </CardBody>
  </Card>
);

const ButtonsWithDropdowns = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Buttons with dropdowns
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg="6">
          <InputGroup>
            <UncontrolledButtonDropdown addonType="prepend">
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Seperated Link</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Input />
          </InputGroup>
        </Col>
        <Col lg="6">
          <InputGroup>
            <Input />
            <UncontrolledButtonDropdown addonType="append">
              <DropdownToggle caret>Action</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Seperated Link</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </InputGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const SegmentedButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Segmented buttons
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row>
        <Col lg="6">
          <InputGroup>
            <UncontrolledButtonDropdown addonType="prepend">
              <Button>Action</Button>
              <DropdownToggle split />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Seperated Link</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Input />
          </InputGroup>
        </Col>
        <Col lg="6">
          <InputGroup>
            <Input />
            <UncontrolledButtonDropdown addonType="append">
              <Button>Action</Button>
              <DropdownToggle split />
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Seperated Link</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </InputGroup>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const InputGroups = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Input Groups</h1>

    <Row>
      <Col lg="6">
        <Default />
        <CheckboxAndRadioAddons />
        <Sizing />
      </Col>
      <Col lg="6">
        <SelectAddons />
        <ButtonAddons />
        <ButtonsWithDropdowns />
        <SegmentedButtons />
      </Col>
    </Row>
  </Container>
);

export default InputGroups;
