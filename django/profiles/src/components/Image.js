import React, {Component} from "react";
import ReactDOM from "react-dom";

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    ); 
}

export default Image;