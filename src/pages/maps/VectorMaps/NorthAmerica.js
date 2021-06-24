import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-north_america-mill");

class NorthAmerica extends React.Component {
  drawMap() {
    $("#north_america_map").vectorMap({
      map: "north_america_mill",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#dc3545"
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
          North America Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="north_america_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default NorthAmerica;
