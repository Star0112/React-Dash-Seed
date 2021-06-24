import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  TabContent,
  TabPane
} from "reactstrap";

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "monthly"
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
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Plans & Pricing</h1>

        <Row>
          <Col md="10" xl="8" className="mx-auto">
            <h1 className="text-center">We have a plan for everyone</h1>
            <p className="lead text-center mb-4">
              Whether you're a business or an individual, 14-day trial no credit
              card required.
            </p>

            <Row className="justify-content-center mt-3 mb-2">
              <Col xs="auto">
                <ButtonGroup>
                  <Button
                    color="primary"
                    outline
                    onClick={() => {
                      this.toggle("monthly");
                    }}
                    className={
                      this.state.activeTab === "monthly" ? "active" : ""
                    }
                  >
                    Monthly billing
                  </Button>
                  <Button
                    color="primary"
                    outline
                    onClick={() => {
                      this.toggle("annual");
                    }}
                    className={
                      this.state.activeTab === "annual" ? "active" : ""
                    }
                  >
                    Annual billing
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="monthly">
                <Row className="py-4">
                  <Col sm="4" className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                      <CardBody className="d-flex flex-column">
                        <div className="mb-4">
                          <h5>Free</h5>
                          <span className="display-4">$0</span>
                        </div>
                        <h6>Includes:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">1 users</li>
                          <li className="mb-2">5 projects</li>
                          <li className="mb-2">5 GB storage</li>
                        </ul>
                        <div className="mt-auto">
                          <Button size="lg" color="primary" outline>
                            Sign up
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4" className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                      <CardBody className="d-flex flex-column">
                        <div className="mb-4">
                          <h5>Standard</h5>
                          <span className="display-4">$19</span>
                          <span>/mo</span>
                        </div>
                        <h6>Includes:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">5 users</li>
                          <li className="mb-2">50 projects</li>
                          <li className="mb-2">50 GB storage</li>
                          <li className="mb-2">Security policy</li>
                          <li className="mb-2">Weekly backups</li>
                        </ul>
                        <div className="mt-auto">
                          <Button size="lg" color="primary">
                            Try it for free
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4" className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                      <CardBody className="d-flex flex-column">
                        <div className="mb-4">
                          <h5>Plus</h5>
                          <span className="display-4">$39</span>
                          <span>/mo</span>
                        </div>
                        <h6>Includes:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">Unlimited users</li>
                          <li className="mb-2">Unlimited projects</li>
                          <li className="mb-2">250 GB storage</li>
                          <li className="mb-2">Priority support</li>
                          <li className="mb-2">Security policy</li>
                          <li className="mb-2">Daily backups</li>
                          <li className="mb-2">Custom CSS</li>
                        </ul>
                        <div className="mt-auto">
                          <Button size="lg" color="primary" outline>
                            Try it for free
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="annual">
                <Row className="py-4">
                  <Col sm="4" className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                      <CardBody className="d-flex flex-column">
                        <div className="mb-4">
                          <h5>Free</h5>
                          <span className="display-4">$0</span>
                        </div>
                        <h6>Includes:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">1 users</li>
                          <li className="mb-2">5 projects</li>
                          <li className="mb-2">5 GB storage</li>
                        </ul>
                        <div className="mt-auto">
                          <Button size="lg" color="primary" outline>
                            Sign up
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4" className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                      <CardBody className="d-flex flex-column">
                        <div className="mb-4">
                          <h5>Standard</h5>
                          <span className="display-4">$199</span>
                          <span>/mo</span>
                        </div>
                        <h6>Includes:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">5 users</li>
                          <li className="mb-2">50 projects</li>
                          <li className="mb-2">50 GB storage</li>
                          <li className="mb-2">Security policy</li>
                          <li className="mb-2">Weekly backups</li>
                        </ul>
                        <div className="mt-auto">
                          <Button size="lg" color="primary">
                            Try it for free
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="4" className="mb-3 mb-md-0">
                    <Card className="text-center h-100">
                      <CardBody className="d-flex flex-column">
                        <div className="mb-4">
                          <h5>Plus</h5>
                          <span className="display-4">$399</span>
                          <span>/mo</span>
                        </div>
                        <h6>Includes:</h6>
                        <ul className="list-unstyled">
                          <li className="mb-2">Unlimited users</li>
                          <li className="mb-2">Unlimited projects</li>
                          <li className="mb-2">250 GB storage</li>
                          <li className="mb-2">Priority support</li>
                          <li className="mb-2">Security policy</li>
                          <li className="mb-2">Daily backups</li>
                          <li className="mb-2">Custom CSS</li>
                        </ul>
                        <div className="mt-auto">
                          <Button size="lg" color="primary" outline>
                            Try it for free
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

            <hr />

            <div className="text-center my-4">
              <h2>Frequently asked questions</h2>
            </div>
            <Row>
              <Col sm="6" md="5" className="ml-auto">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Do I need a credit card to sign up?</CardTitle>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" md="5" className="mr-auto">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Do you offer a free trial?</CardTitle>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" md="5" className="ml-auto">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">What if I decide to cancel my plan?</CardTitle>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" md="5" className="mr-auto">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Can I cancel at anytime?</CardTitle>
                    <p className="mb-0">
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                      rhoncus, sem quam semper libero, sit amet adipiscing sem
                      neque sed ipsum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pricing;
