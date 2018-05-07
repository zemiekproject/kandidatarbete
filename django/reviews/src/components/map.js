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
        {"hue": "#3a3935"},
        {"saturation": 5},
        {"lightness": -57},
        {"visibility": "off"}
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
    "featureType": "landscape.natural",
    "elementType": "all",
    "stylers": [
        {"hue": "#CCFF99"},
        {"fill": '#CCFF99'},
        {"saturation": 5},
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
          reverse: null,
          center: {
            lat: 59.95,
            lng: 30.33
            },
            zoom: 0
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.reverseLookup = this.reverseLookup.bind(this);
    }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
}



_onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,      
    });
  }


handleClick(obj) { 
    if (window.location.pathname=="/reviews/create/") {
        var geocoder = new google.maps.Geocoder;
        var loc = new google.maps.LatLng(obj.lat,obj.lng);
        var countryName = '';
        this.reverseLookup(geocoder, loc).then(function(){console.log(this.state.reverse);
            
            var geo = this.state.reverse.address_components
            for(var i=0;i<geo.length;i++){
                for (var j=0; j<geo[i].types.length; j++){
//                     console.log(geo[i].types[j])
                    if(geo[i].types[j]=='country'){
                        countryName = geo[i].long_name
                        document.getElementById('country').setAttribute('value', countryName)
                    }
                } 
            };
            var new_string = this.state.reverse.formatted_address.replace(countryName, '');
            var str = new_string.slice(0, -2);
            document.getElementById('location').setAttribute('value', str);
        }.bind(this), function(){console.log('nvmifuckedup');});
        
        console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
        this.setState({mrklat: obj.lat, mrklng: obj.lng})
        document.getElementById('lat').setAttribute('value', obj.lat)
        document.getElementById('lng').setAttribute('value', obj.lng)
        ReactDOM.render(<NewReviewMarker lat={obj.lat} lng={obj.lng} text='new review' />, document.getElementById('plcs')
        );
        
    }
}

reverseLookup(geocoder, input) {
        var latlng = input;
        var result = null;
        return new Promise((resolve, reject) => geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
//                 console.log(results[0]);
                this.setState({reverse: results[0]});
                resolve("Success!");
            } else {
              window.alert('No results found');
              reject();
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
            reject();
          }
        }.bind(this)
        ));
//         console.log(this.state.reverse);
}


handleSearch(place) {
    console.log(place[0]);
    var lng = (place[0].geometry.viewport.b.b+place[0].geometry.viewport.b.f)/2;
    var lat = (place[0].geometry.viewport.f.f+place[0].geometry.viewport.f.b)/2;
    var zoom = 10 - Math.round(Math.log(Math.abs(place[0].geometry.viewport.f.f-place[0].geometry.viewport.f.b))/Math.log(2));
    this.setState({center: {lat: lat, lng: lng}, zoom: zoom,});
}

componentDidMount() {
    var input = React.findDOMNode(this.refs.map);
    this.plc = new google.maps.places.PlacesService(input);
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
          defaultZoom = {0}
          zoom={this.state.zoom} 
        >

                
            {this.state.data.map(el => (<ReviewMarker
            key={el.id}
            text={el.title}
            lat={el.lat}
            lng={el.lng}
            slug={el.slug}/>))}
         

            <div id='plcs' lat={this.state.mrklat} lng={this.state.mrklng} />
        <SearchBox id='sb' placeholder={"Var vill du åka?"}
         onPlacesChanged={this.handleSearch} />
        </GoogleMapReact>
      </div>
    );


  }
  
}



export default SimpleMap;
