import React, { Component } from 'react';
import ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react';
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Table from "./Table";
import SearchBox from "./SearchBox";



//Stylingen behövs för att markern ska hamna mitt på koordinaterna; annars är koordinaterna i ett av markerns hörn.
const MARKER_SIZE = 40;
const ReviewMarkerStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE * 2

  }

const ReviewMarker = ({ text, slug }) => <div style={ReviewMarkerStyle}><img src={"/static/graphics/drawing.svg"} alt="Logo" /><br /><a href={"http://localhost:8000/reviews/"+slug}>{text}</a></div>;

const NewReviewMarker = ({ text }) => <div style={ReviewMarkerStyle}><img src={"/static/graphics/drawingblue.svg"} alt="Logo" /><br /><p>{text}</p></div>;

const mapOptions = {
      

  styles: [
{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
        {"hue": "#cc1616"},
        {"saturation": 5},
        {"lightness": -11},
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
    "elementType": "geometry",
    "stylers": [
        {"hue": "#e8720b"},
        {"visibility": "on"}
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
        {"hue": "#38933b"},
        {"saturation": -30},
        {"lightness": -30},
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
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {"hue": "#46bcec"},
        {"saturation": 34},
        {"lightness": -60},
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
          center: {
            lat: 59.95,
            lng: 30.33
            },
            zoom: 0
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },

    zoom: 0


}

_onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,      
    });
  }


handleClick(obj) { 
    if (window.location.pathname=="/reviews/create/") {
        console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
        this.setState({mrklat: obj.lat, mrklng: obj.lng})
        document.getElementById('lat').setAttribute('value', obj.lat)
        document.getElementById('lng').setAttribute('value', obj.lng)
        document.getElementById('sb').setAttribute('value', obj.lat+' '+obj.lng)
        ReactDOM.render(<NewReviewMarker lat={obj.lat} lng={obj.lng} text='new review' />, document.getElementById('plcs')
        );
    }
}

handleSearch(place) {
    var lng = place[0].geometry.viewport.b.f;
    var lat = place[0].geometry.viewport.f.f;
    var zoom = 12;
    this.setState({center: {lat: lat, lng: lng}, zoom: zoom,});
}



  render() {
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          onClick={this.handleClick.bind(this)}
          onChange={this._onChange}
          className='TheMap'
          options={mapOptions}
          bootstrapURLKeys={{ key: "AIzaSyBFtKbB9YJWMcIrBh77MITgOT6TDa0JfY4" }}
          center={this.state.center}
          defaultZoom={this.state.zoom} 
        >

                
            {this.state.data.map(el => (<ReviewMarker
            key={el.id}
            text={el.title}
            lat={el.lat}
            lng={el.lng}
            slug={el.slug}/>))}
         
       

            <div id='plcs' lat={this.state.mrklat} lng={this.state.mrklng} />
        <SearchBox id='sb' placeholder={"Search for a place"}
         onPlacesChanged={this.handleSearch} />
        </GoogleMapReact>
      </div>
    );


  }
  
}



export default SimpleMap;
