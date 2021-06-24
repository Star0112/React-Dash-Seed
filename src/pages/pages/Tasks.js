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
  Row,
  UncontrolledDropdown
} from "reactstrap";

import dragula from "react-dragula";

import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

class Lane extends React.Component {
  handleContainerLoaded = container => {
    if (container) {
      this.props.onContainerLoaded(container);
    }
  };

  render() {
    const { name, children } = this.props;

    return (
      <Card>
        <CardHeader>
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
          <CardTitle tag="h5">{name}</CardTitle>
          <h6 className="card-subtitle text-muted">
            Nam pretium turpis et arcu. Duis arcu.
          </h6>
        </CardHeader>
        <CardBody className="p-3">
          <div ref={this.handleContainerLoaded}>{children}</div>
          <Button color="primary" block>
            Add new task
          </Button>
        </CardBody>
      </Card>
    );
  }
}

const Task = ({ id, checked, text, avatar }) => (
  <Card className="mb-3 bg-light cursor-grab border">
    <CardBody className="p-3">
      <div className="float-right mr-n2">
        <CustomInput
          type="checkbox"
          id={"exampleCustomCheckbox" + id}
          defaultChecked={checked ? true : false}
        />
      </div>
      <p>{text}</p>
      <div className="float-right mt-n1">
        <img
          src={avatar}
          width="32"
          height="32"
          className="rounded-circle"
          alt="Avatar"
        />
      </div>
      <Button color="primary" size="sm">
        View
      </Button>
    </CardBody>
  </Card>
);

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.containers = [];
  }

  onContainerReady = container => {
    this.containers.push(container);
  };

  componentDidMount() {
    dragula(this.containers);
  }

  render = () => (
    <Container fluid className="p-0">
      <Button color="primary" className="float-right mt-n1">
        <FontAwesomeIcon icon={faPlus} /> New task
      </Button>
      <h1 className="h3 mb-3">Tasks</h1>

      <Row>
        <Col lg="6" xl="3">
          <Lane name="Upcoming" onContainerLoaded={this.onContainerReady}>
            <Task
              id="1"
              avatar={avatar1}
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
              checked
            />
            <Task
              id="2"
              avatar={avatar2}
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
              checked
            />
            <Task
              id="3"
              avatar={avatar3}
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
            />
            <Task
              id="4"
              avatar={avatar4}
              text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
            />
            <Task
              id="5"
              avatar={avatar2}
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
            />
          </Lane>
        </Col>
        <Col lg="6" xl="3">
          <Lane name="In Progress" onContainerLoaded={this.onContainerReady}>
            <Task
              id="6"
              avatar={avatar1}
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
            />
            <Task
              id="7"
              avatar={avatar3}
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
            />
            <Task
              id="8"
              avatar={avatar2}
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
            />
          </Lane>
        </Col>
        <Col lg="6" xl="3">
          <Lane name="On Hold" onContainerLoaded={this.onContainerReady}>
            <Task
              id="9"
              avatar={avatar4}
              text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
            />
            <Task
              id="10"
              avatar={avatar3}
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
            />
            <Task
              id="11"
              avatar={avatar2}
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
            />
            <Task
              id="12"
              avatar={avatar1}
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
            />
          </Lane>
        </Col>
        <Col lg="6" xl="3">
          <Lane name="Completed" onContainerLoaded={this.onContainerReady}>
            <Task
              id="13"
              avatar={avatar2}
              text="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."
            />
            <Task
              id="14"
              avatar={avatar4}
              text="In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique."
            />
            <Task
              id="15"
              avatar={avatar3}
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
            />
            <Task
              id="16"
              avatar={avatar1}
              text="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada."
            />
            <Task
              id="17"
              avatar={avatar3}
              text="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis."
            />
          </Lane>
        </Col>
      </Row>
    </Container>
  );
}

export default Tasks;
