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
require("../../../vendor/jquery-jvectormap-us-aea");

class USA extends React.Component {
  drawMap(theme) {
    $("#usa_map").vectorMap({
      map: "us_aea",
      backgroundColor: "transparent",
      zoomOnScroll: false,
      normalizeFunction: "polynomial",
      hoverOpacity: 0.7,
      hoverColor: false,
      regionStyle: {
        initial: {
          fill: "#DCE3E8"
        }
      },
      markerStyle: {
        initial: {
          r: 9,
          fill: theme.info,
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
      markers: [
        {
          latLng: [37.77, -122.41],
          name: "San Francisco: 375"
        },
        {
          latLng: [40.71, -74.0],
          name: "New York: 350"
        },
        {
          latLng: [39.09, -94.57],
          name: "Kansas City: 250"
        },
        {
          latLng: [36.16, -115.13],
          name: "Las Vegas: 275"
        },
        {
          latLng: [32.77, -96.79],
          name: "Dallas: 225"
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
          Sales by State
        </CardTitle>
      </CardHeader>
      <CardBody className="px-4">
        <div className="map-container">
          <div id="usa_map" style={{ height: 300 }} />
        </div>
      </CardBody>
    </Card>
  );
}

export default connect(store => ({
  theme: store.theme.currentTheme
}))(USA);
