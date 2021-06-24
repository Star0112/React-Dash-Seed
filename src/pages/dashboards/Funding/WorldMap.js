import React from "react";
import { connect } from "react-redux";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

const jQuery = require("jquery");
const $ = jQuery;
window.jQuery = jQuery;

require("jvectormap-next")($);
require("../../../vendor/jquery-jvectormap-world-mill");

class World extends React.Component {
  drawMap(theme) {
    this.map = $("#world_map").vectorMap({
      map: "world_mill",
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: false,
      regionStyle: {
        initial: {
          fill: "#e3eaef"
        }
      },
      markerStyle: {
        initial: {
          r: 9,
          fill: theme.primary,
          "fill-opacity": 0.9,
          stroke: "#fff",
          "stroke-width": 7,
          "stroke-opacity": 0.4
        },
        hover: {
          stroke: "#fff",
          "fill-opacity": 1,
          "stroke-width": 1.5
        }
      },
      backgroundColor: "transparent",
      markers: [
        {
          latLng: [31.230391, 121.473701],
          name: "Shanghai"
        },
        {
          latLng: [39.904202, 116.407394],
          name: "Beijing"
        },
        {
          latLng: [28.70406, 77.102493],
          name: "Delhi"
        },
        {
          latLng: [6.524379, 3.379206],
          name: "Lagos"
        },
        {
          latLng: [39.343357, 117.361649],
          name: "Tianjin"
        },
        {
          latLng: [24.860735, 67.001137],
          name: "Karachi"
        },
        {
          latLng: [41.00824, 28.978359],
          name: "Istanbul"
        },
        {
          latLng: [35.689487, 139.691711],
          name: "Tokyo"
        },
        {
          latLng: [23.12911, 113.264381],
          name: "Guangzhou"
        },
        {
          latLng: [19.075983, 72.877655],
          name: "Mumbai"
        },
        {
          latLng: [40.7127837, -74.0059413],
          name: "New York"
        },
        {
          latLng: [34.052235, -118.243683],
          name: "Los Angeles"
        },
        {
          latLng: [41.878113, -87.629799],
          name: "Chicago"
        },
        {
          latLng: [29.760427, -95.369804],
          name: "Houston"
        },
        {
          latLng: [33.448376, -112.074036],
          name: "Phoenix"
        },
        {
          latLng: [51.507351, -0.127758],
          name: "London"
        },
        {
          latLng: [48.856613, 2.352222],
          name: "Paris"
        },
        {
          latLng: [55.755825, 37.617298],
          name: "Moscow"
        },
        {
          latLng: [40.416775, -3.70379],
          name: "Madrid"
        }
      ]
    });
  }
  componentDidMount() {
    this.drawMap(this.props.theme);
  }
  render = () => (
    <Card className="flex-fill w-100">
      <CardHeader>
        <div className="card-actions float-right">
          <UncontrolledDropdown>
            <DropdownToggle tag="a">
              <MoreHorizontal />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <CardTitle tag="h5" className="mb-0">
          Real-Time
        </CardTitle>
      </CardHeader>
      <CardBody className="p-2">
        <div className="map-container">
          <div id="world_map" style={{ height: 304 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default connect(store => ({
  theme: store.theme.currentTheme
}))(World);
