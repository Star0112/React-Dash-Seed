import React, { useState } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";

const colors = [
  {
    name: "Primary",
    value: "primary"
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
  }
];

const sizes = [
  {
    name: "Small",
    value: "sm"
  },
  {
    name: "Medium",
    value: "md"
  },
  {
    name: "Large",
    value: "lg"
  }
];

const DefaultModal = () => {
  const initOpenModals = () => {
    let modals = {};

    colors.forEach((color, index) => {
      modals = Object.assign({}, modals, {[index]: false})
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = index => {
    // Toggle selected element
    setOpenModals(openModals => Object.assign({}, openModals, {[index]: !openModals[index]}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Default modal</CardTitle>
        <h6 className="card-subtitle text-muted">Default Bootstrap modal.</h6>
      </CardHeader>
      <CardBody className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <Button
              color={color.value}
              onClick={() => toggle(index)}
              className="mr-1"
            >
              {color.name}
            </Button>
            <Modal
              isOpen={openModals[index]}
              toggle={() => toggle(index)}
            >
              <ModalHeader toggle={() => toggle(index)}>
                Default modal
              </ModalHeader>
              <ModalBody className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to
                  your site for lightboxes, user notifications, or completely
                  custom content.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button
                  color={color.value}
                  onClick={() => toggle(index)}
                >
                  Save changes
                </Button>
              </ModalFooter>
            </Modal>
          </React.Fragment>
        ))}
      </CardBody>
    </Card>
  );
}

const ColoredModal = () => {
  const initOpenModals = () => {
    let modals = {};

    colors.forEach((color, index) => {
      modals = Object.assign({}, modals, {[index]: false})
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = index => {
    // Toggle selected element
    setOpenModals(openModals => Object.assign({}, openModals, {[index]: !openModals[index]}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Colored modal</CardTitle>
        <h6 className="card-subtitle text-muted">Colored Bootstrap modal.</h6>
      </CardHeader>
      <CardBody className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <Button
              color={color.value}
              onClick={() => toggle(index)}
              className="mr-1"
            >
              {color.name}
            </Button>
            <Modal
              isOpen={openModals[index]}
              toggle={() => toggle(index)}
              className={"modal-colored modal-" + color.value}
            >
              <ModalHeader toggle={() => toggle(index)}>
                Colored modal
              </ModalHeader>
              <ModalBody className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to
                  your site for lightboxes, user notifications, or completely
                  custom content.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="light" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button color="light" onClick={() => toggle(index)}>
                  Save changes
                </Button>
              </ModalFooter>
            </Modal>
          </React.Fragment>
        ))}
      </CardBody>
    </Card>
  );
}

const CenteredModal = () => {
  const initOpenModals = () => {
    let modals = {};

    colors.forEach((color, index) => {
      modals = Object.assign({}, modals, {[index]: false})
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = index => {
    // Toggle selected element
    setOpenModals(openModals => Object.assign({}, openModals, {[index]: !openModals[index]}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Centered modal</CardTitle>
        <h6 className="card-subtitle text-muted">
          Vertically centered modal.
        </h6>
      </CardHeader>
      <CardBody className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {colors.map((color, index) => (
          <React.Fragment key={index}>
            <Button
              color={color.value}
              onClick={() => toggle(index)}
              className="mr-1"
            >
              {color.name}
            </Button>
            <Modal
              isOpen={openModals[index]}
              toggle={() => toggle(index)}
              centered
            >
              <ModalHeader toggle={() => toggle(index)}>
                Centered modal
              </ModalHeader>
              <ModalBody className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to
                  your site for lightboxes, user notifications, or completely
                  custom content.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button
                  color={color.value}
                  onClick={() => toggle(index)}
                >
                  Save changes
                </Button>
              </ModalFooter>
            </Modal>
          </React.Fragment>
        ))}
      </CardBody>
    </Card>
  );
}

const ModalSizes = () => {
  const initOpenModals = () => {
    let modals = {};

    sizes.forEach((color, index) => {
      modals = Object.assign({}, modals, {[index]: false})
    });

    return modals;
  };

  const [openModals, setOpenModals] = useState(() => initOpenModals());

  const toggle = index => {
    // Toggle selected element
    setOpenModals(openModals => Object.assign({}, openModals, {[index]: !openModals[index]}));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Modal sizes</CardTitle>
        <h6 className="card-subtitle text-muted">
          These sizes kick in at certain breakpoints to avoid scrollbars on
          smaller viewports.
        </h6>
      </CardHeader>
      <CardBody className="text-center">
        <p>
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site
          for lightboxes, user notifications, or completely custom content.
        </p>

        {sizes.map((size, index) => (
          <React.Fragment key={index}>
            <Button
              color="primary"
              onClick={() => toggle(index)}
              className="mr-1"
            >
              {size.name}
            </Button>
            <Modal
              isOpen={openModals[index]}
              toggle={() => toggle(index)}
              size={size.value}
            >
              <ModalHeader toggle={() => toggle(index)}>
                {size.name} modal
              </ModalHeader>
              <ModalBody className="text-center m-3">
                <p className="mb-0">
                  Use Bootstrap’s JavaScript modal plugin to add dialogs to
                  your site for lightboxes, user notifications, or completely
                  custom content.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => toggle(index)}>
                  Close
                </Button>{" "}
                <Button color="primary" onClick={() => toggle(index)}>
                  Save changes
                </Button>
              </ModalFooter>
            </Modal>
          </React.Fragment>
        ))}
      </CardBody>
    </Card>
  );
}

const Modals = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Modals</h1>

    <Row>
      <Col lg="6">
        <DefaultModal />
      </Col>
      <Col lg="6">
        <ColoredModal />
      </Col>
      <Col lg="6">
        <CenteredModal />
      </Col>
      <Col lg="6">
        <ModalSizes />
      </Col>
    </Row>
  </Container>
);

export default Modals;
