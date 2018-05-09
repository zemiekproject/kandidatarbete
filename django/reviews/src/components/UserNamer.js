import React from "react";
import PropTypes from "prop-types";

// NOTE literally the same as LocationNamer only grabs different position bcus diffferent data, could do better.

const UserNamer = ({ data }) =>  
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
      <div>{data.map(el => (
          <a href={'http://localhost:8000/u/'+Object.entries(el)[4][1]}>  
            {Object.entries(el)[4][1]}
          </a>
        ))}</div>
  );


UserNamer.propTypes = {
  data: PropTypes.array.isRequired
};

export default UserNamer;
