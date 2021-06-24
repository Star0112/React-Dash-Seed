import React from "react";
import { Link } from "react-router-dom";

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

const Appointments = () => (
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
        Appointments
      </CardTitle>
    </CardHeader>
    <div className="p-4 bg-light">
      <h2>You have a meeting today!</h2>
      <p className="mb-0 text-sm">
        Your next meeting is in 2 hours. Check your{" "}
        <Link to="/dashboard/default">schedule</Link> to see the details.
      </p>
    </div>
    <CardBody className="d-flex">
      <Timeline>
        <TimelineItem>
          <strong>Chat with Carl and Ashley</strong>
          <span className="float-right text-muted text-sm">30m ago</span>
          <p>
            Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
            imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
            mauris. Integer ante arcu...
          </p>
        </TimelineItem>
        <TimelineItem>
          <strong>The big launch</strong>
          <span className="float-right text-muted text-sm">2h ago</span>
          <p>
            Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
            consectetuer eget, posuere ut, mauris. Praesent adipiscing.
            Phasellus ullamcorper ipsum rutrum nunc...
          </p>
        </TimelineItem>
        <TimelineItem>
          <strong>Coffee break</strong>
          <span className="float-right text-muted text-sm">3h ago</span>
          <p className="mb-0">
            Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
            imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa.
            Sed cursus turpis vitae tortor...
          </p>
        </TimelineItem>
      </Timeline>
    </CardBody>
  </Card>
);

export default Appointments;
