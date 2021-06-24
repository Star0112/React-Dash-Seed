import React from "react";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-cn-mill");

class China extends React.Component {
  drawMap() {
    $("#china_map").vectorMap({
      map: "cn_mill",
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
          China Map
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="map-container">
          <div id="china_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default China;
