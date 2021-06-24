import React from "react";
import ReactDOM from "react-dom";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import GoogleMapReact from "google-map-react";

class Streetview extends React.Component {
  static defaultProps = {
    center: {
      lat: 40.712784,
      lng: -74.005941
    },
    zoom: 14
  };

  getMapOptions = () => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true
    };
  };

  apiIsLoaded = (map, maps) => {
    if (map) {
      const panorama = new maps.StreetViewPanorama(
        ReactDOM.findDOMNode(this.refs.panorama),
        {
          position: {
            lat: 42.345573,
            lng: -71.098326
          },
          pov: {
            heading: 160,
            pitch: 0
          },
          visible: true
        }
      );
      map.setStreetView(panorama);
    }
  };

  render = () => (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Streetview</CardTitle>
        <h6 className="card-subtitle text-muted">
          Panoramic 360 degree views from designated roads throughout its
          coverage area.
        </h6>
      </CardHeader>
      <CardBody>
        <div style={{ height: 300, width: "100%" }}>
          <GoogleMapReact
            ref={"panorama"}
            options={this.getMapOptions}
            bootstrapURLKeys={{
              key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps)}
            yesIWantToUseGoogleMapApiInternals={true}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default Streetview;
