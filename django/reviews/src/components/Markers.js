import React from "react";

import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import shortid from "shortid";
import Drawing from "./drawing";


const uuid = shortid.generate;
class AnyReactComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat: null,
            lng: null,
        }
        this.makeMarkerGreat = () => {
            if (this.refs.skit){
                var element = ReactDOM.findDOMNode(this.refs.skit)
                element.setAttribute("lat", parseFloat(this.props.lat));
                element.setAttribute("lng", parseFloat(this.props.lng));
                console.log('meh');
            }
        }
    }
    componentDidMount() {
    console.log(this.refs.skit);
    this.makeMarkerGreat();
  }
        render(){
            let lat = this.props.lat;
            let lng = this.props.lng;
            let text = this.props.text;
            return(
                <div lat={lat} lng={lng} name="marker" ref='skit'><Drawing /><br /> {text}</div>
            );
        }
    
}


class Marker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      
    };
  }

  render() {
    const { data } = this.state;
 
    return <div id="thatMarker">

          </div>
          
  }
}



const wrapper = document.getElementById("Main");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
=======



const Markers = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div id="thatMarker">
          {data.map(el => (

            <div key={el.id} data-lat={el.lat} data-lng={el.lng} name="marker"><img src={"/static/graphics/drawing.png"} alt="Logo" /><br />{el.title}{console.log(el.lat)}</div>

          ))}</div>
  );
  
Markers.propTypes = {
  data: PropTypes.array.isRequired
};

export default Marker;


