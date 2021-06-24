import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-in-mill");

class India extends React.Component {
  drawMap() {
    $("#india_map").vectorMap({
      map: "in_mill",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#17a2b8"
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
          India Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="india_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default India;
