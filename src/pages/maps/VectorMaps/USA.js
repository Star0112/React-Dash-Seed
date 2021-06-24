import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-us-aea");

class USA extends React.Component {
  drawMap() {
    $("#usa_map").vectorMap({
      map: "us_aea",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#28a745"
        }
      }
    });
  }
  componentDidMount() {
    this.drawMap();
  }
  render = () => (
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          USA Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="usa_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default USA;
