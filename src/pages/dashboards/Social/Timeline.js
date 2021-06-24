import React from "react";
import { Row, Col, Button, Card, CardBody, Media } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import avatar1 from "../../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../../assets/img/avatars/avatar-2.jpg";
import avatar4 from "../../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../../assets/img/avatars/avatar-5.jpg";

import unsplash1 from "../../../assets/img/photos/unsplash-1.jpg";
import unsplash2 from "../../../assets/img/photos/unsplash-2.jpg";
import unsplash3 from "../../../assets/img/photos/unsplash-3.jpg";

const Activity = () => (
  <Card className="flex-fill">
    <CardBody>
      <Media>
        <img
          src={avatar5}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Ashley Briggs"
        />
        <Media body>
          <small className="float-right text-navy">5m ago</small>
          <p className="mb-2">
            <strong>Ashley Briggs</strong>
          </p>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus.
          </p>

          <Row noGutters className="mt-1">
            <Col xs="6">
              <img src={unsplash2} className="img-fluid pr-1" alt="Unsplash" />
            </Col>
            <Col xs="6">
              <img src={unsplash3} className="img-fluid pl-1" alt="Unsplash" />
            </Col>
          </Row>

          <small className="text-muted">Today 7:51 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>

          <Media className="mt-3">
            <div className="pr-2">
              <img
                src={avatar4}
                width="36"
                height="36"
                className="rounded-circle mr-2"
                alt="Stacie Hall"
              />
            </div>
            <Media body>
              <p className="text-muted">
                <strong>Stacie Hall</strong>: Nam pretium turpis et arcu. Duis
                arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
                ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan
                a, consectetuer eget, posuere ut, mauris.
              </p>
            </Media>
          </Media>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar1}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Chris Wood"
        />
        <Media body>
          <small className="float-right text-navy">30m ago</small>
          <p className="mb-2">
            <strong>Chris Wood</strong>
          </p>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </p>
          <small className="text-muted">Today 7:21 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar2}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Carl Jenkins"
        />
        <Media body>
          <small className="float-right text-navy">3h ago</small>
          <p className="mb-2">
            <strong>Carl Jenkins</strong>
          </p>

          <img src={unsplash1} className="img-fluid" alt="Unsplash" />

          <small className="text-muted">Today 5:12 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>

          <Media className="mt-3">
            <div className="pr-2">
              <img
                src={avatar4}
                width="36"
                height="36"
                className="rounded-circle mr-2"
                alt="Stacie Hall"
              />
            </div>
            <Media body>
              <p className="text-muted">
                <strong>Stacie Hall</strong>: Nam pretium turpis et arcu. Duis
                arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
                ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan
                a, consectetuer eget, posuere ut, mauris.
              </p>
            </Media>
          </Media>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar5}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Ashley Briggs"
        />
        <Media body>
          <small className="float-right text-navy">4h ago</small>
          <p className="mb-2">
            <strong>Ashley Briggs</strong>
          </p>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
            quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante.
          </p>
          <small className="text-muted">Today 4:21 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>
    </CardBody>
  </Card>
);

export default Activity;
