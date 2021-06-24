import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-uk_countries-mill");

class UK extends React.Component {
  drawMap() {
    $("#uk_map").vectorMap({
      map: "uk_countries_mill",
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
          UK Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="uk_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default UK;
