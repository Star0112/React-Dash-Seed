import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import avatar2 from "../../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

const Following = () => (
  <Card className="flex-fill mb-3">
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
      <CardTitle tag="h5" className="mb-0">Following</CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar5}
          width="56"
          height="56"
          className="rounded-circle mr-2"
          alt="Chris Wood"
        />
        <Media body>
          <p className="my-1">
            <strong>Ashley Briggs</strong>
          </p>
          <Button outline color="primary" size="sm">
            Unfollow
          </Button>
        </Media>
      </Media>

      <hr className="my-2" />

      <Media>
        <img
          src={avatar2}
          width="56"
          height="56"
          className="rounded-circle mr-2"
          alt="Carl Jenkins"
        />
        <Media body>
          <p className="my-1">
            <strong>Carl Jenkins</strong>
          </p>
          <Button outline color="primary" size="sm">
            Unfollow
          </Button>
        </Media>
      </Media>

      <hr className="my-2" />

      <Media>
        <img
          src={avatar4}
          width="56"
          height="56"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <p className="my-1">
            <strong>Stacie Hall</strong>
          </p>
          <Button outline color="primary" size="sm">
            Unfollow
          </Button>
        </Media>
      </Media>
    </CardBody>
  </Card>
);

export default Following;
