import React, { Component } from 'react';
import ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Table from "./Table";


//Stylingen behövs för att markern ska hamna mitt på koordinaterna; annars är koordinaterna i ett av markerns hörn.
const MARKER_SIZE = 40;
const ReviewMarkerStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
  }


const ReviewMarker = ({ text, slug }) => <div><img src={"/static/graphics/drawing.svg"} alt="Logo" /><br /><a href={"http://localhost:8000/reviews/"+slug}>{text}</a></div>;

const NewReviewMarker = ({ text }) => <div><img src={"/static/graphics/drawingblue.svg"} alt="Logo" /><br /><p>{text}</p></div>;

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
        {"visibility": "on"}
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
        {"hue": "#d4dad0"},
        {"saturation": -88},
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
        {"visibility": "simplified"}
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

};


// GETS LAT LANG ON CLICK
// function _onClick(obj){ console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
//         ReactDOM.render(<NewReviewMarker lat={obj.lat} lng={obj.lng} text='new review' />, document.getElementById('plcs')
//         );
// }

class SimpleMap extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.data)
        
        this.state = {
          data: this.props.data,
          mrklat: null,
          mrklng: null,
        };
      }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },

    zoom: 0

}


handleClick(obj) { 
    if (window.location.pathname=="/reviews/create/") {
        console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
        this.setState({mrklat: obj.lat, mrklng: obj.lng})
        ReactDOM.render(<NewReviewMarker lat={obj.lat} lng={obj.lng} text='new review' />, document.getElementById('plcs')
        );
    }
}



  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact onClick={this.handleClick.bind(this)}
          className='TheMap'
          options={mapOptions}
          bootstrapURLKeys={{ key: "AIzaSyBFtKbB9YJWMcIrBh77MITgOT6TDa0JfY4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} 
        >
    
                
            {this.state.data.map(el => (<ReviewMarker
            key={el.id}
            text={el.title}
            lat={el.lat}
            lng={el.lng}
            slug={el.slug}/>))}
            <div id='plcs' lat={this.state.mrklat} lng={this.state.mrklng} />

        </GoogleMapReact>
      </div>
    );
  }
  
}
const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}

export default SimpleMap;
