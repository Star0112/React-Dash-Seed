import React from "react";
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  Pagination,
  PaginationItem,
  PaginationLink,
  PopoverBody,
  PopoverHeader,
  Row,
  UncontrolledCollapse,
  UncontrolledDropdown,
  UncontrolledPopover,
  UncontrolledTooltip,
  Progress,
  Spinner
} from "reactstrap";

import avatar1 from "../../assets/img/avatars/avatar.jpg";

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

const directions = [
  {
    name: "Left",
    value: "left"
  },
  {
    name: "Top",
    value: "top"
  },
  {
    name: "Bottom",
    value: "bottom"
  },
  {
    name: "Right",
    value: "right"
  }
];

const Accordion = () => (
  <div className="accordion">
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="my-2">
          <a id="collapseOne" href="#collapseOne">
            Accordion
          </a>
        </CardTitle>
      </CardHeader>
      <UncontrolledCollapse toggler="#collapseOne" defaultOpen={true}>
        <CardBody>
          <CardText>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </CardText>
        </CardBody>
      </UncontrolledCollapse>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="my-2">
          <a id="collapseTwo" href="#collapseTwo">
            Another one
          </a>
        </CardTitle>
      </CardHeader>
      <UncontrolledCollapse toggler="#collapseTwo">
        <CardBody>
          <CardText>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </CardText>
        </CardBody>
      </UncontrolledCollapse>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="my-2">
          <a id="collapseThree" href="#collapseThree">
            Something else
          </a>
        </CardTitle>
      </CardHeader>
      <UncontrolledCollapse toggler="#collapseThree">
        <CardBody>
          <CardText>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </CardText>
        </CardBody>
      </UncontrolledCollapse>
    </Card>
  </div>
);

const Badges = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Badges</CardTitle>
      <h6 className="card-subtitle text-muted">Examples for badges.</h6>
    </CardHeader>
    <CardBody>
      <div>
        {colors.map((color, index) => (
          <Badge key={index} color={color.value} className="mr-1 mb-1">
            {color.name}
          </Badge>
        ))}
      </div>
      <div>
        {colors.map((color, index) => (
          <Badge
            key={index}
            color={color.value}
            className="badge-pill mr-1 mb-1"
          >
            {color.name}
          </Badge>
        ))}
      </div>
    </CardBody>
  </Card>
);

const BreadCrumbs = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Breadcrumbs</CardTitle>
      <h6 className="card-subtitle text-muted">
        Indicate the current page’s location within a navigational hierarchy.
      </h6>
    </CardHeader>
    <CardBody>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#home">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#home">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#library">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </CardBody>
  </Card>
);

const Dropdowns = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Dropdowns</CardTitle>
      <h6 className="card-subtitle text-muted">
        Toggle contextual overlays for displaying lists of links.
      </h6>
    </CardHeader>
    <CardBody>
      <Row className="mb-3">
        <Col xs="12" md="6" lg="12" xl="6" className="col-xxl-4">
          <p className="mb-0">Basic:</p>
          <UncontrolledDropdown>
            <DropdownMenu
              className="mb-2"
              style={{
                position: "static",
                display: "block"
              }}
            >
              <DropdownItem tag="a" href="#">
                Action
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Another action
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" md="6" lg="12" xl="6" className="col-xxl-4">
          <p className="mb-0">Active:</p>
          <UncontrolledDropdown>
            <DropdownMenu
              className="mb-2"
              style={{
                position: "static",
                display: "block"
              }}
            >
              <DropdownItem tag="a" href="#">
                Regular link
              </DropdownItem>
              <DropdownItem tag="a" href="#" active>
                Active link
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Another link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" md="6" lg="12" xl="6" className="col-xxl-4">
          <p className="mb-0">Disabled:</p>
          <UncontrolledDropdown>
            <DropdownMenu
              className="mb-2"
              style={{
                position: "static",
                display: "block"
              }}
            >
              <DropdownItem tag="a" href="#">
                Regular link
              </DropdownItem>
              <DropdownItem tag="a" href="#" disabled>
                Disabled link
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Another link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" md="6" lg="12" xl="6" className="col-xxl-4">
          <p className="mb-0">Header:</p>
          <UncontrolledDropdown>
            <DropdownMenu
              className="mb-2"
              style={{
                position: "static",
                display: "block"
              }}
            >
              <DropdownItem header>Dropdown header</DropdownItem>
              <DropdownItem tag="a" href="#">
                Action
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Another action
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" md="6" lg="12" xl="6" className="col-xxl-4">
          <p className="mb-0">Dividers:</p>
          <UncontrolledDropdown>
            <DropdownMenu
              className="mb-2"
              style={{
                position: "static",
                display: "block"
              }}
            >
              <DropdownItem tag="a" href="#">
                Action
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Another action
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag="a" href="#">
                Seperated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
        <Col xs="12" md="6" lg="12" xl="6" className="col-xxl-4">
          <p className="mb-0">Text:</p>
          <UncontrolledDropdown>
            <DropdownMenu
              className="mb-2 p-4 text-muted"
              style={{
                position: "static",
                display: "block"
              }}
            >
              <p className="mb-0">
                Some example text that's free-flowing within the dropdown menu.
              </p>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

const Images = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Images</CardTitle>
      <h6 className="card-subtitle text-muted">
        Lightweight styles for images.
      </h6>
    </CardHeader>
    <CardBody>
      <img
        className="rounded mr-2 mb-2"
        src={avatar1}
        alt="Placeholder"
        width="140"
        height="140"
      />
      <img
        className="rounded-circle rounded mr-2 mb-2"
        src={avatar1}
        alt="Placeholder"
        width="140"
        height="140"
      />
      <img
        className="img-thumbnail rounded mr-2 mb-2"
        src={avatar1}
        alt="Placeholder"
        width="140"
        height="140"
      />
    </CardBody>
  </Card>
);

const PaginationElement = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Pagination</CardTitle>
      <h6 className="card-subtitle text-muted">Examples for showing pagination.</h6>
    </CardHeader>
    <CardBody>
      <Pagination aria-label="Page navigation example" size="sm">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
      <Pagination aria-label="Page navigation example" size="lg">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </CardBody>
  </Card>
);

const Popovers = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Popovers</CardTitle>
      <h6 className="card-subtitle text-muted">
        Examples for adding Bootstrap popovers.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      {directions.map((direction, index) => (
        <React.Fragment key={index}>
          <Button
            id={"UncontrolledPopover" + direction.name}
            type="button"
            className="mr-1"
          >
            Popover on {direction.value}
          </Button>
          <UncontrolledPopover
            placement={direction.value}
            target={"UncontrolledPopover" + direction.name}
          >
            <PopoverHeader>Popover on {direction.value}</PopoverHeader>
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </PopoverBody>
          </UncontrolledPopover>
        </React.Fragment>
      ))}
    </CardBody>
  </Card>
);

const ProgressBars = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Progress Bars</CardTitle>
      <h6 className="card-subtitle text-muted">
        Examples for using Bootstrap custom progress bars.
      </h6>
    </CardHeader>
    <CardBody>
      <Progress value="25" className="mb-3">
        Default
      </Progress>

      <Progress striped value="50" className="mb-3">
        Striped
      </Progress>

      <Progress animated value="75" className="mb-3">
        Animated
      </Progress>

      <Progress multi>
        <Progress bar value="25">
          Stacked
        </Progress>
        <Progress bar color="warning" value="15">
          15%
        </Progress>
        <Progress bar color="success" value="30">
          30%
        </Progress>
        <Progress bar color="danger" value="20">
          20%
        </Progress>
      </Progress>
    </CardBody>
  </Card>
);

const Tooltips = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Tooltips</CardTitle>
      <h6 className="card-subtitle text-muted">
        Examples for adding custom Bootstrap tooltips.
      </h6>
    </CardHeader>
    <CardBody className="text-center">
      {directions.map((direction, index) => (
        <React.Fragment key={index}>
          <Button
            id={"UncontrolledTooltip" + direction.name}
            type="button"
            className="mr-1"
          >
            Tooltip on {direction.value}
          </Button>
          <UncontrolledTooltip
            placement={direction.value}
            target={"UncontrolledTooltip" + direction.name}
          >
            Tooltip on {direction.value}
          </UncontrolledTooltip>
        </React.Fragment>
      ))}
    </CardBody>
  </Card>
);

const Spinners = () => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">Spinners</CardTitle>
      <h6 className="card-subtitle text-muted">
        Indicate the loading state of a component with Bootstrap spinners.
      </h6>
    </CardHeader>
    <CardBody>
      <div className="mb-2">
        <Spinner color="dark" className="mr-2" />
        {colors.map((color, index) => (
          <Spinner key={index} color={color.value} className="mr-2" />
        ))}
      </div>

      <div className="mb-2">
        <Spinner color="dark" size="sm" className="mr-2" />
        {colors.map((color, index) => (
          <Spinner key={index} color={color.value} size="sm" className="mr-2" />
        ))}
      </div>

      <hr />

      <div className="mb-2">
        <Spinner color="dark" type="grow" className="mr-2" />
        {colors.map((color, index) => (
          <Spinner
            key={index}
            color={color.value}
            type="grow"
            className="mr-2"
          />
        ))}
      </div>

      <div className="mb-2">
        <Spinner color="dark" type="grow" size="sm" className="mr-2" />
        {colors.map((color, index) => (
          <Spinner
            key={index}
            color={color.value}
            type="grow"
            size="sm"
            className="mr-2"
          />
        ))}
      </div>
    </CardBody>
  </Card>
);

const General = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">General</h1>

    <Row>
      <Col lg="6">
        <Accordion />
        <BreadCrumbs />
        <Images />
        <Popovers />
        <Tooltips />
      </Col>
      <Col lg="6">
        <Badges />
        <Dropdowns />
        <PaginationElement />
        <ProgressBars />
        <Spinners />
      </Col>
      <Col lg="6" />
      <Col lg="6" />
      <Col lg="6" />
      <Col lg="6" />
      <Col lg="6" />
    </Row>
  </Container>
);

export default General;
