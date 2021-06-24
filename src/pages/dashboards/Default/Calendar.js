import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import DateTime from "react-datetime";

const Calendar = () => (
  <Card className="flex-fill w-100">
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
      <CardTitle tag="h5" className="mb-0">
        Calendar
      </CardTitle>
    </CardHeader>
    <CardBody className="d-flex">
      <div className="align-self-center w-100">
        <DateTime
          input={false}
          defaultValue={DateTime.moment()}
          dateFormat="L"
          timeFormat={false}
        />
      </div>
    </CardBody>
  </Card>
);

export default Calendar;
