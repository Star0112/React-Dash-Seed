import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Media
} from "reactstrap";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

const Feed = () => (
  <Card className="flex-fill w-100">
    <CardHeader>
      <Badge color="info" className="float-right">
        Today
      </Badge>
      <CardTitle tag="h5" className="mb-0">
        Daily feed
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar5}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Ashley Briggs"
        />
        <Media body>
          <small className="float-right text-navy">5m ago</small>
          <strong>Ashley Briggs</strong> started following{" "}
          <strong>Stacie Hall</strong>
          <br />
          <small className="text-muted">Today 7:51 pm</small>
          <br />
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar1}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Chris Wood"
        />
        <Media body>
          <small className="float-right text-navy">30m ago</small>
          <strong>Chris Wood</strong> posted something on{" "}
          <strong>Stacie Hall</strong>'s timeline
          <br />
          <small className="text-muted">Today 7:21 pm</small>
          <div className="border text-sm text-muted p-2 mt-1">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing...
          </div>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar4}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <small className="float-right text-navy">1h ago</small>
          <strong>Stacie Hall</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </Media>
      </Media>

      <hr />
      <Button color="primary" block>
        Load more
      </Button>
    </CardBody>
  </Card>
);

export default Feed;
