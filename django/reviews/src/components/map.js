import React, { Component } from 'react';
import ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Markers from "./Markers";
import Table from "./Table";

const App = () => (
  <DataProvider endpoint="api/review/" 
                render={data => <Markers data={data} />} />
);

const mapOptions = {
        styles: [{"elementType":"labels","stylers":[{"visibility":"off"},{"color":"#f49f53"}]},{"featureType":"landscape","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},{"featureType":"road","stylers":[{"color":"#813033"},{"lightness":43}]},{"featureType":"poi.business","stylers":[{"color":"#645c20"},{"lightness":38}]},{"featureType":"water","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},{"featureType":"poi.business"},{"featureType":"poi.park","stylers":[{"color":"#645c20"},{"lightness":39}]},{"featureType":"poi.school","stylers":[{"color":"#a95521"},{"lightness":35}]},{},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType":"labels"},{"featureType":"poi.sports_complex","stylers":[{"color":"#9e5916"},{"lightness":32}]},{},{"featureType":"poi.government","stylers":[{"color":"#9e5916"},{"lightness":46}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","stylers":[{"color":"#813033"},{"lightness":22}]},{"featureType":"transit","stylers":[{"lightness":38}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{},{},{}]
    };


class SimpleMap extends Component {


  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
    
  };
  


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          className='TheMap'
          options={mapOptions}
          bootstrapURLKeys={{ key: "AIzaSyBFtKbB9YJWMcIrBh77MITgOT6TDa0JfY4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <App lat={59.9} lng={30.7}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
