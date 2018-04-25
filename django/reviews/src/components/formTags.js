import React, { Component } from "react";
import PropTypes from "prop-types";
//import Form from "./Form";
import shortid from "shortid";

const uuid = shortid.generate;

const FormTags = ({ data }) =>
    (
        <div className="control">
        
        <select
        className="input"
        type="text"
        name="tags"
        multiple
        >
        {data.map(el => (
            <option key={el.id} value={Object.entries(el)[0][1]}>
                {Object.entries(el)[1][1]}
            </option>
        ))}
        </select>
        Or add a new tag:
        
        <input
            className="input"
            className="form-control"
            type="text"
            name="tags"
        />
      
      </div>
      );

FormTags.propTypes = {
    data: PropTypes.array.isRequired
};

export default FormTags;
