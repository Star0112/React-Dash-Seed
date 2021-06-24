import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import GoogleMapReact from "google-map-react";

class Markers extends React.Component {
  static defaultProps = {
    center: {
      lat: 40.712784,
      lng: -74.005941
    },
    zoom: 14
  };

  getMapOptions = maps => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.ROADMAP,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true
    };
  };

  renderMarkers(map, maps) {
    new maps.Marker({
      position: {
        lat: 40.712784,
        lng: -74.005941
      },
      map,
      title: "Hello World!"
    });
  }

  render = () => (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Markers</CardTitle>
        <h6 className="card-subtitle text-muted">
          Identify a location on a map.
        </h6>
      </CardHeader>
      <CardBody>
        <div style={{ height: 300, width: "100%" }}>
          <GoogleMapReact
            options={this.getMapOptions}
            bootstrapURLKeys={{
              key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default Markers;
