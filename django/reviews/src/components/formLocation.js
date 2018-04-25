import React, { Component } from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
//import Form from "./Form";
import shortid from "shortid";

const uuid = shortid.generate;

const FormLocation = ({ data }) =>
     (
        <div className="control">
        
        <select
        className="input"
        type="text"
        name="location"
        >
        {data.map(el => (
          <option key={el.id} value={Object.entries(el)[0][1]} data-lat={Object.entries(el)[4][1]} data-lng={Object.entries(el)[3][1]} name={Object.entries(el)[1][1]}>  
            {Object.entries(el)[1][1]}
          </option>
        ))}
        </select>
        Or add a new location:
        
        <input
            className="input"
            className="form-control"
            type="text"
            name="location"
        />

      </div>
      );

FormLocation.propTypes = {
    data: PropTypes.array.isRequired
};

export default FormLocation;
