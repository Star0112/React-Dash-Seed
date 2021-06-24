import React from "react";
import { Badge, Col, Container, Row } from "reactstrap";

const Changelog = () => (
  <Container fluid className="p-0">
    <Row>
      <Col lg={10} xl={8} className="mx-auto">
        <h1 className="h3">Changelog</h1>
        <hr className="my-4" />

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.3.0</Badge>
        </h4>
        <h5 className="d-inline-block">– 30 September, 2020</h5>
        <ul>
          <li>Added FAQ to landing page</li>
          <li>Improved landing page design</li>
          <li>Improved documentation</li>
          <li>Small visual changes</li>
          <li>Upgraded to Bootstrap 4.5.2</li>
          <li>Upgraded SmartWizard to 5.1.1</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.2.5</Badge>
        </h4>
        <h5 className="d-inline-block">– 21 July, 2020</h5>
        <ul>
          <li>Fixed dropdown alignment on mobile</li>
          <li>Upgraded to Bootstrap 4.5.0</li>
          <li>Upgraded to FullCalendar 5</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.2.4</Badge>
        </h4>
        <h5 className="d-inline-block">– 6 December, 2019</h5>
        <ul>
          <li>Added Chat page (pages/chat)</li>
          <li>Added Carousel component (ui/carousel)</li>
          <li>Added Embed component (ui/embed-video)</li>
          <li>Updated sidebar structure</li>
          <li>Swapped 'Nunito Sans' font with 'Nunito'</li>
          <li>Sticky footer by default</li>
          <li>Small visual changes</li>
          <li>Upgraded to Bootstrap 4.4.1</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.2.3</Badge>
        </h4>
        <h5 className="d-inline-block">– 10 August, 2019</h5>
        <ul>
          <li>Added projects page (pages/projects)</li>
          <li>Added introduction page (docs/introduction)</li>
          <li>Added changelog page (docs/changelog)</li>
          <li>Added installation page (docs/installation)</li>
          <li>Renamed kanban page to tasks (pages/tasks)</li>
          <li>Fixes issues with router in IE11</li>
          <li>Fixes issues with card height in IE11</li>
          <li>Small visual changes</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.2.2</Badge>
        </h4>
        <h5 className="d-inline-block">– 4 June, 2019</h5>
        <ul>
          <li>Improved Google Fonts loading time</li>
          <li>Fixed inconsistent sidebar labels</li>
          <li>Added wizard component (/forms/wizard)</li>
          <li>Added private route example</li>
          <li>Added catch-all route</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.2.1</Badge>
        </h4>
        <h5 className="d-inline-block">– 3 April, 2019</h5>
        <ul>
          <li>Fixed issues with Autoprefixer</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>

        <h4 className="d-inline-block mr-1">
          <Badge color="primary">v1.2.0</Badge>
        </h4>
        <h5 className="d-inline-block">– 15 March, 2019</h5>
        <ul>
          <li>Added two new themes (corporate and modern)</li>
          <li>Added settings sidebar</li>
          <li>Added landing page</li>
          <li>Added clients page (/pages/clients)</li>
          <li>Restructured sass files</li>
          <li>Upgraded to Bootstrap 4.3.1</li>
          <li>Upgraded various dependencies to LTS version</li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default Changelog;
