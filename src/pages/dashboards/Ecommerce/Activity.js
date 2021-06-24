import React from "react";

import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import Timeline from "../../../components/Timeline";
import TimelineItem from "../../../components/TimelineItem";

const Activity = () => (
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
        Order Activity
      </CardTitle>
    </CardHeader>
    <CardBody className="d-flex">
      <Timeline className="m-3">
        <TimelineItem>
          <strong>Delivered</strong>
          <p className="text-sm">2 hours ago</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Pick Up</strong>
          <p className="text-sm">6 hours ago</p>
        </TimelineItem>
        <TimelineItem>
          <strong>In Transit</strong>
          <p className="text-sm">1 days ago</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Dispatched</strong>
          <p className="text-sm">3 days ago</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Order Received</strong>
          <p className="text-sm mb-0">4 days ago</p>
        </TimelineItem>
      </Timeline>
    </CardBody>
  </Card>
);

export default Activity;
