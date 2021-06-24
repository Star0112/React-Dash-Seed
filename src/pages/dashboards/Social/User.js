import React from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

import { MessageSquare } from "react-feather";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";

const User = () => (
  <Card className="flex-fill mb-3">
    <CardBody className="text-center">
      <img
        src={avatar1}
        alt="Chris Wood"
        className="img-fluid rounded-circle mb-2"
        width="128"
        height="128"
      />
      <CardTitle tag="h5" className="mb-0">Chris Wood</CardTitle>
      <div className="text-muted mb-2">UX Engineer</div>

      <div>
        <Button color="primary" size="sm">
          Follow
        </Button>{" "}
        <Button color="primary" size="sm">
          <MessageSquare width={16} height={16} /> Message
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default User;
