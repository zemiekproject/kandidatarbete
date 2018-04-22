import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const uuid = shortid.generate;
const AnyReactComponent = ( { text }) => <div>{text}</div>;

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


const Markers = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div id="thatMarker">
          {data.map(el => (
            <div key={el.id} data-lat={el.lat} data-lng={el.lng} name="marker">{el.title}{console.log(el.lat)}</div>
          ))}</div>
  );

Markers.propTypes = {
  data: PropTypes.array.isRequired
};

export default Marker;


