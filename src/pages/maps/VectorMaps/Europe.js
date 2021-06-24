import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-europe-mill");

class Europe extends React.Component {
  drawMap() {
    $("#europe_map").vectorMap({
      map: "europe_mill",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#ffc107"
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
          Europe Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="europe_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default Europe;
