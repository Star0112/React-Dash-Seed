import React from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledButtonDropdown
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamation,
  faGlobeAmericas,
  faInfo,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

import {
  faBitbucket,
  faDribbble,
  faFacebook,
  faFlickr,
  faGithub,
  faGoogle,
  faInstagram,
  faPinterest,
  faTwitter,
  faVimeo,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const colors = [
  {
    name: "Primary",
    value: "primary"
  },
  {
    name: "Secondary",
    value: "secondary"
  },
  {
    name: "Success",
    value: "success"
  },
  {
    name: "Danger",
    value: "danger"
  },
  {
    name: "Warning",
    value: "warning"
  },
  {
    name: "Info",
    value: "info"
  }
];

const BasicButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Basic Buttons</CardTitle>
      <h6 className="card-subtitle text-muted">
        Default Bootstrap buttons style.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button key={index} color={color.value} className="mr-1 mb-1">
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color.value}
            className="mr-1 mb-1"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </CardBody>
  </Card>
);

const RoundedButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Rounded Buttons</CardTitle>
      <h6 className="card-subtitle text-muted">Rounded Bootstrap buttons.</h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color.value}
            className="btn-pill mr-1 mb-1"
          >
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color.value}
            className="btn-pill mr-1 mb-1"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </CardBody>
  </Card>
);

const OutlineButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Outline Buttons</CardTitle>
      <h6 className="card-subtitle text-muted">
        Buttons without background color.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button key={index} color={color.value} className="mr-1 mb-1" outline>
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color.value}
            className="mr-1 mb-1"
            disabled
            outline
          >
            {color.name}
          </Button>
        ))}
      </div>
    </CardBody>
  </Card>
);

const SquareButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Square Buttons</CardTitle>
      <h6 className="card-subtitle text-muted">
        Buttons without border radius.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color.value}
            className="mr-1 mb-1 btn-square"
          >
            {color.name}
          </Button>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Button
            key={index}
            color={color.value}
            className="mr-1 mb-1 btn-square"
            disabled
          >
            {color.name}
          </Button>
        ))}
      </div>
    </CardBody>
  </Card>
);

const IconButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Icon Buttons</CardTitle>
      <h6 className="card-subtitle text-muted">
        Default Bootstrap buttons with icons.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        <Button color="primary" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faSmile} /> Primary
        </Button>
        <Button color="secondary" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Secondary
        </Button>
        <Button color="success" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faCheck} /> Success
        </Button>
        <Button color="danger" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faTimes} /> Danger
        </Button>
        <Button color="warning" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faExclamation} /> Warning
        </Button>
        <Button color="info" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faInfo} /> Info
        </Button>
      </div>

      <div>
        <Button color="primary" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faSmile} />
        </Button>
        <Button color="secondary" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </Button>
        <Button color="success" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button color="danger" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <Button color="warning" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faExclamation} />
        </Button>
        <Button color="info" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faInfo} />
        </Button>
      </div>
    </CardBody>
  </Card>
);

const SocialButtons = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Social Buttons</CardTitle>
      <h6 className="card-subtitle text-muted">Social buttons with icons.</h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        <Button color="facebook" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faFacebook} className="align-middle" />{" "}
          Facebook
        </Button>
        <Button color="twitter" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faTwitter} className="align-middle" /> Twitter
        </Button>
        <Button color="google" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faGoogle} className="align-middle" /> Google
        </Button>
        <Button color="youtube" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faYoutube} className="align-middle" /> Youtube
        </Button>
        <Button color="vimeo" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faVimeo} className="align-middle" /> Vimeo
        </Button>
        <Button color="dribbble" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faDribbble} className="align-middle" />{" "}
          Dribbble
        </Button>
        <Button color="github" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faGithub} className="align-middle" /> Github
        </Button>
        <Button color="instagram" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faInstagram} className="align-middle" />{" "}
          Instagram
        </Button>
        <Button color="pinterest" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faPinterest} className="align-middle" />{" "}
          Pinterest
        </Button>
        <Button color="flickr" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faFlickr} className="align-middle" /> Flickr
        </Button>
        <Button color="bitbucket" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faBitbucket} className="align-middle" />{" "}
          Bitbucket
        </Button>
      </div>
      <div>
        <Button color="facebook" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faFacebook} className="align-middle" />
        </Button>
        <Button color="twitter" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faTwitter} className="align-middle" />
        </Button>
        <Button color="google" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faGoogle} className="align-middle" />
        </Button>
        <Button color="youtube" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faYoutube} className="align-middle" />
        </Button>
        <Button color="vimeo" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faVimeo} className="align-middle" />
        </Button>
        <Button color="dribbble" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faDribbble} className="align-middle" />
        </Button>
        <Button color="github" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faGithub} className="align-middle" />
        </Button>
        <Button color="instagram" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faInstagram} className="align-middle" />
        </Button>
        <Button color="pinterest" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faPinterest} className="align-middle" />
        </Button>
        <Button color="flickr" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faFlickr} className="align-middle" />
        </Button>
        <Button color="bitbucket" className="mr-1 mb-1">
          <FontAwesomeIcon icon={faBitbucket} className="align-middle" />
        </Button>
      </div>
    </CardBody>
  </Card>
);

const ButtonSizes = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Button Sizes</CardTitle>
      <h6 className="card-subtitle text-muted">
        Fancy larger or smaller buttons.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        <Button color="primary" size="sm" className="mr-1">
          Small
        </Button>
        <Button color="primary" className="mr-1">
          Medium
        </Button>
        <Button color="primary" size="lg" className="mr-1">
          Large
        </Button>
      </div>
      <div>
        <Button color="primary" size="sm" className="mr-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Small
        </Button>
        <Button color="primary" className="mr-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Medium
        </Button>
        <Button color="primary" size="lg" className="mr-1">
          <FontAwesomeIcon icon={faGlobeAmericas} /> Large
        </Button>
      </div>
    </CardBody>
  </Card>
);

const ButtonDropdowns = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Button Dropdown</CardTitle>
      <h6 className="card-subtitle text-muted">
        Dropdowns styles with buttons.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      <div className="mb-3">
        {colors.map((color, index) => (
          <UncontrolledButtonDropdown key={index} className="mr-1 mb-1">
            <DropdownToggle caret color={color.value}>
              {color.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Seperated link</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <UncontrolledButtonDropdown key={index} className="mr-1 mb-1">
            <DropdownToggle caret size="sm" color={color.value}>
              {color.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Seperated link</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        ))}
      </div>
    </CardBody>
  </Card>
);

const ButtonGroups = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Button Group</CardTitle>
      <h6 className="card-subtitle text-muted">Button group components.</h6>
    </CardHeader>
    <CardBody>
      <h6 className="card-subtitle mb-2 text-muted">Horizontal button group</h6>
      <div className="mb-3">
        <ButtonGroup color="primary" size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup color="primary">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup color="primary" size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>

      <h6 className="card-subtitle mb-2 text-muted">Button toolbar</h6>
      <div className="mb-3">
        <ButtonToolbar>
          <ButtonGroup className="mr-2">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>

      <h6 className="card-subtitle mb-2 text-muted">Vertical button group</h6>
      <ButtonGroup vertical className="mr-2">
        <Button color="primary">Button</Button>
        <Button color="primary">Button</Button>
        <Button color="primary">Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical className="mr-2">
        <Button color="success">Button</Button>
        <Button color="success">Button</Button>
        <Button color="success">Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical className="mr-2">
        <Button color="warning">Button</Button>
        <Button color="warning">Button</Button>
        <Button color="warning">Button</Button>
      </ButtonGroup>
      <ButtonGroup vertical className="mr-2">
        <Button color="danger">Button</Button>
        <Button color="danger">Button</Button>
        <Button color="danger">Button</Button>
      </ButtonGroup>
    </CardBody>
  </Card>
);

const Buttons = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Buttons</h1>
    <Row>
      <Col lg="6">
        <BasicButtons />
      </Col>
      <Col lg="6">
        <RoundedButtons />
      </Col>
      <Col lg="6">
        <OutlineButtons />
      </Col>
      <Col lg="6">
        <SquareButtons />
      </Col>
      <Col lg="6">
        <IconButtons />
      </Col>
      <Col lg="6">
        <SocialButtons />
      </Col>
      <Col lg="6">
        <ButtonSizes />
        <ButtonDropdowns />
      </Col>
      <Col lg="6">
        <ButtonGroups />
      </Col>
    </Row>
  </Container>
);

export default Buttons;
