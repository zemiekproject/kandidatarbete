import React, { Component } from "react";
import PropTypes from "prop-types";
//import Form from "./Form";
import shortid from "shortid";

const uuid = shortid.generate;

const FormTags = ({ data }) =>
    !data.length ? (
        <p>Nothing to show</p>
    ) : (
        <div className="control">
        
        <select
        className="input"
        type="text"
        name="tag"
        multiple
        >
        {data.map(el => (
            <option key={el.id}>
                {Object.entries(el)[1][1]}
            </option>
        ))}
        </select>
      
      </div>
      );

FormTags.propTypes = {
    data: PropTypes.array.isRequired
};

export default FormTags;