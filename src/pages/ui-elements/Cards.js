import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap";

import classnames from "classnames";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";

const CardWithImageAndLinks = () => (
  <Card>
    <CardImg top width="100%" src={unsplash1} alt="Card image cap" />
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Card with image and links
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <CardLink href="#">Card link</CardLink>
      <CardLink href="#">Another link</CardLink>
    </CardBody>
  </Card>
);

const CardWithImageAndButton = () => (
  <Card>
    <CardImg top width="100%" src={unsplash2} alt="Card image cap" />
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Card with image and button
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <Button href="#" color="primary">
        Go somewhere
      </Button>
    </CardBody>
  </Card>
);

const CardWithImageAndList = () => (
  <Card>
    <CardImg top width="100%" src={unsplash3} alt="Card image cap" />
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Card with image and list
      </CardTitle>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  </Card>
);

const CardWithLinks = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Card with links
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <CardLink href="#">Card link</CardLink>
      <CardLink href="#">Another link</CardLink>
    </CardBody>
  </Card>
);

const CardWithButton = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Card with button
      </CardTitle>
    </CardHeader>
    <CardBody>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
      <Button href="#" color="primary">
        Go somewhere
      </Button>
    </CardBody>
  </Card>
);

const CardWithList = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        Card with list
      </CardTitle>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  </Card>
);

class CardWithTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Nav tabs className="card-header-tabs">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
                href="#"
              >
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
                href="#"
              >
                Link
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>

        <CardBody>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <CardTitle tag="h5">Card with tabs</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button href="#" color="primary">
                Go somewhere
              </Button>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2" className="text-center">
              <CardTitle tag="h5">Card with tabs</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button href="#" color="primary">
                Go somewhere
              </Button>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

class CardWithPills extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <Nav pills className="card-header-pills">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
                href="#"
              >
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
                href="#"
              >
                Link
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Disabled
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>

        <CardBody>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <CardTitle tag="h5">Card with pills</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button href="#" color="primary">
                Go somewhere
              </Button>
            </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2" className="text-center">
              <CardTitle tag="h5">Card with pills</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button href="#" color="primary">
                Go somewhere
              </Button>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

const Cards = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Cards</h1>

    <Row>
      <Col md="6" lg="4">
        <CardWithImageAndLinks />
      </Col>
      <Col md="6" lg="4">
        <CardWithImageAndButton />
      </Col>
      <Col md="6" lg="4">
        <CardWithImageAndList />
      </Col>
      <Col md="6" lg="4">
        <CardWithLinks />
      </Col>
      <Col md="6" lg="4">
        <CardWithButton />
      </Col>
      <Col md="6" lg="4">
        <CardWithList />
      </Col>
      <Col lg="6">
        <CardWithTabs />
      </Col>
      <Col lg="6">
        <CardWithPills />
      </Col>
    </Row>
  </Container>
);

export default Cards;
