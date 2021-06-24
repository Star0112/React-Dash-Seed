import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-asia-mill");

class Asia extends React.Component {
  drawMap() {
    $("#asia_map").vectorMap({
      map: "asia_mill",
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
          Asia Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="asia_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default Asia;
