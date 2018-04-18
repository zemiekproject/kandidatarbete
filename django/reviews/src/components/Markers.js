import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const uuid = shortid.generate;
const AnyReactComponent = ( { text }) => <div>{text}</div>;

const Markers = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div id="thatMarker">
          {data.map(el => (
            <div key={el.id} data-lat={el.lat} data-lng={el.lng} name="marker">{el.title}</div>
          ))}</div>
  );

Markers.propTypes = {
  data: PropTypes.array.isRequired
};

export default Markers;
