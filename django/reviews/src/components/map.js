import React, { Component } from 'react';
import ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Markers from "./Markers";
import Table from "./Table";

const App = () => (
  <DataProvider endpoint="reviews/api/review/" 
                render={data => <Markers data={data} />} />
);
const AnyReactComponent = ( { text }) => <div>{text}</div>;

const mapOptions = {
      

  styles: [
{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
        {"hue": "#3a3935"},
        {"saturation": 5},
        {"lightness": -57},
        {"visibility": "on"}
    ]
},
 {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
        {"hue": "#E8E3E3"},
        {"visibility": "simplified"}
    ]
},
{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
        {"hue": "#FF7733"},
        {"visibility": "on"}
    ]
},
{
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [
        {"hue": "#ffffff"},
        {"lightness": 100},
        {"visibility": "simplified"}
    ]
},
{
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
        {"hue": "#C2470A"},
        {"lightness": 0},
        {"visibility": "on"}
    ]
},
{
    "featureType": "administrative.neighborhood",
    "elementType": "all",
    "stylers": [
        {"hue": "#ffffff"},
        {"lightness": 100},
        {"visibility": "off"}
    ]
},
{
    "featureType": "administrative.land_parcel",
    "elementType": "all",
    "stylers": [
        {"hue": "#ffffff"},
        { "lightness": 100},
        {"visibility": "off"}
    ]
},
{
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#b7caaa"},
        {"saturation": -14},
        {"lightness": -18},
        {"visibility": "on"}
    ]
},
{
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [
        {"hue": "#cbdac1"},
        {"saturation": -6},
        {"lightness": -9},
        {"visibility": "on"}
    ]
},
{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#c17118"},
        {"saturation": 61},
        {"lightness": -45},
        {"visibility": "on"}
    ]
},
{
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
        {"visibility": "off"}
    ]
},
{
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#cba923"},
        {"saturation": 50},
        {"lightness": -46},
        {"visibility": "on"}
    ]
},
{
    "featureType": "poi.medical",
    "elementType": "labels",
    "stylers": [
        {"visibility": "off"}
    ]
},
{
    "featureType": "poi.park",
    "elementType": "all",
    "stylers": [
        {"hue": "#8ba975"},
        {"saturation": -46},
        {"lightness": -28},
        {"visibility": "off"}
    ]
},
{
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
        {"visibility": "off"}
    ]
},
{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#8d9b83"},
        {"saturation": -89},
        {"lightness": -12},
        {"visibility": "on"}
    ]
},
{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#0000FF"},
        {"saturation": 0},
        {"lightness": 54},
        {"visibility": "simplified"}
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#bdc5b6"},
        {"saturation": -89},
        {"lightness": -3},
        {"visibility": "simplified"}
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
        {"visibility": "off"}
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#bdc5b6"},
        {"saturation": -89},
        {"lightness": -26},
        {"visibility": "on"}
    ]
},
{
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
        {"saturation": "8"},
        {"lightness": "100"}
    ]
},
{
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
        {"visibility": "off"}
    ]
},
{
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#a43218"},
        {"saturation": 74},
        {"lightness": -51},
        {"visibility": "off"}
    ]
},
{
    "featureType": "transit",
    "elementType": "labels.text",
    "stylers": [
        {"visibility": "off"}
    ]
},

{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#165c64"},
        {"saturation": 34},
        {"lightness": -69},
        {"visibility": "on"}
    ]
},
 {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
        {"color": "#E8E3E3"},
        {"visibility": "on"}
    ]
}
],
draggableCursor: 'default',
fullscreenControl: false,
//gestureHandling: 'greedy',
scrollwheel: false,
zoomControl: true,

};


class SimpleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lng: null,
        }
    }

    componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
      },
      error => console.log(error)
    );
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },

    zoom: 0

    }
    



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

         
        <App />

        <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text={'Kreyser Avrora'}/>
              

 



         
        

        </GoogleMapReact>
      </div>
    );


    }
  
}



export default SimpleMap;
