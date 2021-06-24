import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { enableCorporateTheme } from "../../redux/actions/themeActions";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Media,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row
} from "reactstrap";

import {
  Box,
  Chrome,
  Code,
  DownloadCloud,
  Mail,
  Sliders,
  Smartphone
} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import screenshotDashboardDefault from "../../assets/img/screenshots/dashboard-default.jpg";
import screenshotDashboardAnalytics from "../../assets/img/screenshots/dashboard-analytics.jpg";
import screenshotDashboardEcommerce from "../../assets/img/screenshots/dashboard-e-commerce.jpg";
import screenshotDashboardSocial from "../../assets/img/screenshots/dashboard-social.jpg";
import screenshotDashboardCrypto from "../../assets/img/screenshots/dashboard-crypto.jpg";
import screenshotPageProjects from "../../assets/img/screenshots/pages-projects-list.jpg";

import screenshotThemeCorporate from "../../assets/img/screenshots/theme-corporate.jpg";
import screenshotThemeModern from "../../assets/img/screenshots/theme-modern.jpg";
import screenshotThemeClassic from "../../assets/img/screenshots/theme-classic.jpg";

import brandBootstrap from "../../assets/img/brands/bootstrap.svg";
import brandBootstrapB from "../../assets/img/brands/b.svg";
import brandSass from "../../assets/img/brands/sass.svg";
import brandWebpack from "../../assets/img/brands/webpack.svg";
import brandNpm from "../../assets/img/brands/npm.svg";
import brandReact from "../../assets/img/brands/react.svg";
import brandRedux from "../../assets/img/brands/redux.svg";

const Navigation = () => (
  <Navbar dark expand="md" className="navbar-landing">
    <Container>
      <NavbarBrand href="/">
        <Box title="AppStack" />
        AppStack
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="d-none d-md-inline-block">
          <NavLink href="/dashboard/default" target="_blank" active>
            Preview
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/docs/introduction" target="_blank" active>
            Documentation
          </NavLink>
        </NavItem>
        <NavItem className="d-none d-md-inline-block">
          <NavLink href="mailto:support@bootlab.io" active>
            Support
          </NavLink>
        </NavItem>
      </Nav>
      <Button
        href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        className="ml-2"
        size="lg"
      >
        Get AppStack
      </Button>
    </Container>
  </Navbar>
);

const Intro = () => {
  
  const handleClick = (e) => {
    document.getElementById('demos').scrollIntoView();
    e.preventDefault();
  }

  return (
  <section className="landing-intro pt-5">
    <Container>
      <Row>
        <Col md="7" className="mx-auto text-center">
          <h1 className="landing-intro-title my-4">Fully-featured React Admin & Dashboard Template</h1>

          <p className="landing-intro-subtitle">A professional package that comes with plenty of UI components, forms, tables, charts, dashboards, pages and svg icons. Each one is fully customizable, responsive
            and easy to use.</p>

          <div className="my-4">
            <a
              href="#demos"
              onClick={handleClick}
              className="btn btn-light btn-lg mr-1"
            >
              View Demos
            </a>{" "}
            <a
              href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Purchase Now
            </a>
          </div>

          <div className="my-4">
            <img
              src={brandBootstrap}
              alt="Bootstrap"
              width="40"
              className="align-middle mr-2"
            />
            <img
              src={brandSass}
              alt="Sass"
              width="40"
              className="align-middle mr-2"
            />
            <img
              src={brandWebpack}
              alt="Webpack"
              width="40"
              className="align-middle mr-2"
            />
            <img
              src={brandNpm}
              alt="NPM"
              width="40"
              className="align-middle mr-2"
            />
            <img
              src={brandReact}
              alt="React"
              width="40"
              className="align-middle mr-2"
            />
            <img
              src={brandRedux}
              alt="Redux"
              width="36"
              className="align-middle mr-2"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mx-auto text-center">
          <div className="mt-4 landing-intro-img">
						<img src={screenshotThemeCorporate} className="img-fluid rounded-lg" alt="Corporate Bootstrap 4 Dashboard Theme" />
					</div>
        </Col>
      </Row>
    </Container>

    <svg className="landing-intro-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#F7F9FC" fill-opacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
  </section>
)};

const Styles = () => (
  <section id="demos" className="pt-3 pb-6">
    <Container className="position-relative z-3">
      <Row>
        <Col md="12" className="mx-auto text-center">
          <Row>
            <Col lg="10" xl="9" className="mx-auto">
              <div className="mb-4">
                <h2 className="mb-3">Multiple Layouts</h2>
                <p className="text-muted font-size-lg">
                  3 Pre-built color schemes available to make this template your
                  very own. All the color schemes can take variation in color
                  and styling, that can easily be modified using Sass variables.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="4" className="py-3">
              <Link
                to="/layouts/theme-corporate"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotThemeCorporate}
                  alt="Corporate Bootstrap 4 React Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>
                Corporate{" "}
                <sup>
                  <Badge color="primary" tag="small">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>

            <Col md="4" className="py-3">
              <Link
                to="/layouts/theme-modern"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotThemeModern}
                  alt="Modern Bootstrap 4 React Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>
                Modern{" "}
                <sup>
                  <Badge color="primary" tag="small">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>

            <Col md="4" className="py-3">
              <Link
                to="/layouts/theme-classic"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotThemeClassic}
                  alt="Classic Bootstrap 4 React Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>Classic</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

const Dashboards = () => (
  <section className="py-6 bg-white">
    <Container>
      <Row>
        <Col md="12" className="mx-auto text-center">
          <Row>
            <Col lg="10" xl="9" className="mx-auto">
              <div className="mb-4">
                <h2 className="mb-3">Multiple Dashboards</h2>
                <p className="text-muted font-size-lg">
                  5 Dashboards and 40+ Pages featuring various components,
                  giving you the freedom of choosing and combining. All
                  components can take variation in color and styling, that can
                  easily be modified using Sass.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="6" lg="4" className="py-3">
              <Link
                to="/dashboard/default"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotDashboardDefault}
                  alt="Bootstrap 4 Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>Default Dashboard</h4>
            </Col>
            <Col md="6" lg="4" className="py-3">
              <Link
                to="/dashboard/analytics"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotDashboardAnalytics}
                  alt="Analytics Bootstrap 4 Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>Analytics Dashboard</h4>
            </Col>
            <Col md="6" lg="4" className="py-3">
              <Link
                to="/dashboard/e-commerce"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotDashboardEcommerce}
                  alt="E-commerce Bootstrap 4 Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>E-commerce Dashboard</h4>
            </Col>
            <Col md="6" lg="4" className="py-3">
              <Link
                to="/dashboard/social"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotDashboardSocial}
                  alt="Social Bootstrap 4 Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>Social Dashboard</h4>
            </Col>
            <Col md="6" lg="4" className="py-3">
              <Link
                to="/dashboard/crypto"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotDashboardCrypto}
                  alt="Crypto Bootstrap 4 Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>
                Crypto Dashboard{" "}
                <sup>
                  <Badge color="primary" tag="small">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
            <Col md="6" lg="4" className="py-3">
              <Link
                to="/pages/projects"
                target="_blank"
                className="d-block mb-3 mx-1"
              >
                <img
                  src={screenshotPageProjects}
                  alt="Projects Bootstrap 4 Dashboard Theme"
                  className="img-fluid rounded-lg landing-img"
                />
              </Link>
              <h4>
                Projects Page{" "}
                <sup>
                  <Badge color="primary" tag="small">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

const Features = () => (
  <section className="py-6">
    <Container>
      <Row>
        <Col md="10" className="mx-auto text-center">
          <div className="mb-5">
            <h2>Features you'll love</h2>
            <p className="text-muted text-lg">
              A responsive dashboard built for everyone who wants to create
              webapps on top of Bootstrap.
            </p>
          </div>

          <Row className="text-left">
            <Col md="6">
              <Media className="py-3">
                <div className="landing-feature">
                  <Sliders />
                </div>
                <Media body>
                  <h4 className="mt-0">Customizable</h4>
                  <p className="font-size-lg">
                    You don't need to be an expert to customize our themes. Our
                    code is very readable and well documented.
                  </p>
                </Media>
              </Media>
            </Col>
            <Col md="6">
              <Media className="py-3">
                <div className="landing-feature">
                  <Smartphone />
                </div>
                <Media body>
                  <h4 className="mt-0">Fully Responsive</h4>
                  <p className="font-size-lg">
                    With mobile, tablet & desktop support it doesn't matter what
                    device you're using. AdminKit is responsive in all browsers.
                  </p>
                </Media>
              </Media>
            </Col>
            <Col md="6">
              <Media className="py-3">
                <div className="landing-feature">
                  <Mail />
                </div>
                <Media body>
                  <h4 className="mt-0">Dev-to-dev Support</h4>
                  <p className="font-size-lg">
                    Our themes are supported by specialists who provide quick
                    and effective support. Usually an email reply takes &lt;24h.
                  </p>
                </Media>
              </Media>
            </Col>
            <Col md="6">
              <Media className="py-3">
                <div className="landing-feature">
                  <Chrome />
                </div>
                <Media body>
                  <h4 className="mt-0">Cross Browser</h4>
                  <p className="font-size-lg">
                    Our themes are working perfectly with: Chrome, Firefox,
                    Safari, Opera and IE 10+. We're working hard to support
                    them.
                  </p>
                </Media>
              </Media>
            </Col>
            <Col md="6">
              <Media className="py-3">
                <div className="landing-feature">
                  <Code />
                </div>
                <Media body>
                  <h4 className="mt-0">Clean Code</h4>
                  <p className="font-size-lg">
                    We strictly follow Bootstrap's guidelines to make your
                    integration as easy as possible. All code is handwritten.
                  </p>
                </Media>
              </Media>
            </Col>
            <Col md="6">
              <Media className="py-3">
                <div className="landing-feature">
                  <i data-feather="download-cloud"></i>
                  <DownloadCloud />
                </div>
                <Media body>
                  <h4 className="mt-0">Regular Updates</h4>
                  <p className="font-size-lg">
                    From time to time you'll receive an update containing new
                    components, improvements and bugfixes.
                  </p>
                </Media>
              </Media>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

const Testimonials = () => (
  <section className="py-6 bg-white">
    <Container>
      <div className="mb-5 text-center">
        <h2>Developers love AppStack</h2>
        <p className="text-muted text-lg">
          Here's what some of our 3,000 customers have to say about working with
          our products.
        </p>
      </div>

      <Row>
        <Col md={6} lg={4}>
          <Card tag="blockquote" className="landing-quote border">
            <CardBody className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrapB}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="pl-3">
                  <h5 className="mb-1 mt-2">Nikita</h5>
                  <small className="d-block text-muted h5 font-weight-normal">
                    Bootstrap Themes
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “We are totally amazed with a simplicity and the design of the
                template. <span>Probably saved us hundreds of hours of development.</span> We
                are absolutely amazed with the support Bootlab has provided us.”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card tag="blockquote" className="landing-quote border">
            <CardBody className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrapB}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="pl-3">
                  <h5 className="mb-1 mt-2">Alejandro</h5>
                  <small className="d-block text-muted h5 font-weight-normal">
                    Bootstrap Themes
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “Everything is so properly set up that <span>any new additions I'd
                make would feel like a native extension of the theme</span> versus a
                simple hack. I definitely feel like this will save me hundredths
                of hours I'd otherwise spend on designing.”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card tag="blockquote" className="landing-quote border">
            <CardBody className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrapB}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="pl-3">
                  <h5 className="mb-1 mt-2">Jordi</h5>
                  <small className="d-block text-muted h5 font-weight-normal">
                    Bootstrap Themes
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “I ran into a problem and contacted support. Within 24 hours, I
                not only received a response but even an updated version that
                solved my problem and works like a charm. <span>Fantastic customer
                service!</span>”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card tag="blockquote" className="landing-quote border">
            <CardBody className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrapB}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="pl-3">
                  <h5 className="mb-1 mt-2">Jason</h5>
                  <small className="d-block text-muted h5 font-weight-normal">
                    Bootstrap Themes
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “As a DB guy, this template has made my life easy porting over
                an old website to a new responsive version. I can <span>focus more on
                the data and less on the layout.</span>”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card tag="blockquote" className="landing-quote border">
            <CardBody className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrapB}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="pl-3">
                  <h5 className="mb-1 mt-2">Richard</h5>
                  <small className="d-block text-muted h5 font-weight-normal">
                    Bootstrap Themes
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “This template was just what we were after; <span>its modern, works
                perfectly and is visually beautiful</span>, we couldn't be happier.
                The support really is excellent, I look forward to working with
                these guys for a long time to come!”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card tag="blockquote" className="landing-quote border">
            <CardBody className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrapB}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="pl-3">
                  <h5 className="mb-1 mt-2">Martin</h5>
                  <small className="d-block text-muted h5 font-weight-normal">
                    Bootstrap Themes
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “I just began to test and use this theme and I can find that it
                cover my expectatives. <span>Good support from the developer.</span>”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

const FaqQuestion = ({ onClick, isOpen, question, answer }) => (
  <Card className="border mb-3">
    <CardHeader className="cursor-pointer" onClick={onClick}>
      <h6 className="mb-0">{ question }</h6>
    </CardHeader>
    <Collapse isOpen={isOpen}>
      <CardBody className="py-3">
        { answer }
      </CardBody>
    </Collapse>
  </Card>
)

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <section className="pt-6 pb-3">
      <Container>
        <div className="mb-5 text-center">
          <h2>Frequently Asked Questions</h2>
          <p className="text-muted font-size-lg">Here are some of the answers you might be looking for.</p>
        </div>

        <Row>
          <Col md={9} lg={8} className="mx-auto">
            <FaqQuestion
              onClick={() => setActiveQuestion(0)}
              isOpen={activeQuestion === 0}
              question="Is there any support included?"
              answer={<>You have access to the Software's online support services via email for six (6) months from the purchase date. Please contact us at <a href="mailto:info@bootlab.io">info@bootlab.io</a> for any questions.</>}
            />
            <FaqQuestion
              onClick={() => setActiveQuestion(1)}
              isOpen={activeQuestion === 1}
              question="How do I get a receipt for my purchase?"
              answer={<>You'll receive an email from Bootstrap themes once your purchase is complete. More info can be found <a href="https://themes.zendesk.com/hc/en-us/articles/360000011052-How-do-I-get-a-receipt-for-my-purchase-" rel="noopener noreferrer" target="_blank">here</a>.</>}
            />
            <FaqQuestion
              onClick={() => setActiveQuestion(2)}
              isOpen={activeQuestion === 2}
              question="What methods of payments are supported?"
              answer={<>You can purchase the themes on Bootstrap Themes via any major credit/debit card (via Stripe) or with your Paypal account. We don't support cryptocurrencies or invoicing at this time.</>}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
};

const Footer = () => (
  <section className="landing-footer pb-6">
    <svg className="landing-footer-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220">
      <path fill="#F7F9FC" fill-opacity="1" d="M0,128L1440,256L1440,0L0,0Z"></path>
    </svg>
    <Container className="text-center landing-footer-container">
      <Row>
        <Col md="9" lg="8" xl="6" className="mx-auto">
          <h2 className="h1 text-white mb-3">
            Join over 3,000 developers who are already working with our products
          </h2>
          <Button
            color="light"
            size="lg"
            href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-n1"
          >
            Purchase Now
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableCorporateTheme());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navigation />
      <Intro />
      <Styles />
      <Dashboards />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
    </React.Fragment>
  )
}

export default connect()(Landing);
