import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Progress,
  Row,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";

import unsplash1 from "../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../assets/img/photos/unsplash-3.jpg";

const Project = ({ name, state, color, percentage, description, image }) => (
  <Card>
    {image ? <CardImg top src={image} alt="Card image cap" /> : ""}
    <CardHeader className="px-4 pt-4">
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        {name}
      </CardTitle>
      <Badge className="my-2" color={color}>
        {state}
      </Badge>
    </CardHeader>
    <CardBody className="px-4 pt-2">
      <p>{description}</p>

      <img
        src={avatar3}
        width="28"
        height="28"
        className="rounded-circle mr-2"
        alt="Avatar"
      />
      <img
        src={avatar2}
        width="28"
        height="28"
        className="rounded-circle mr-2"
        alt="Avatar"
      />
      <img
        src={avatar1}
        width="28"
        height="28"
        className="rounded-circle mr-2"
        alt="Avatar"
      />
    </CardBody>
    <ListGroup flush>
      <ListGroupItem className="px-4 pb-4">
        <p className="mb-2 font-weight-bold">
          Progress<span className="float-right">{percentage}%</span>
        </p>
        <Progress className="progress-sm" value={percentage} />
      </ListGroupItem>
    </ListGroup>
  </Card>
);

const Projects = () => (
  <Container fluid className="p-0">
    <Button color="primary" className="float-right mt-n1">
      <FontAwesomeIcon icon={faPlus} /> New project
    </Button>
    <h1 className="h3 mb-3">Projects</h1>

    <Row>
      <Col md="6" lg="3">
        <Project
          name="Landing page redesign"
          state="Finished"
          color="success"
          percentage="100"
          description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Company posters"
          state="In progress"
          color="warning"
          percentage="75"
          description="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Product page design"
          state="Finished"
          color="success"
          percentage="100"
          description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Upgrade CRM software"
          state="In progress"
          color="warning"
          percentage="50"
          description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
        />
      </Col>

      <Col md="6" lg="3">
        <Project
          name="Fix form validation"
          state="In progress"
          color="warning"
          percentage="65"
          description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
          image={unsplash1}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="New company logo"
          state="On hold"
          color="danger"
          percentage="20"
          description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
          image={unsplash2}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Upgrade to latest Maps API"
          state="Finished"
          color="success"
          percentage="100"
          description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
          image={unsplash3}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Refactor backend templates"
          state="On hold"
          color="danger"
          percentage="0"
          description="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
          image={unsplash1}
        />
      </Col>
    </Row>
  </Container>
);

export default Projects;
