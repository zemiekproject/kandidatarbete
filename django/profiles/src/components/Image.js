import React, {Component} from "react";
import ReactDOM from "react-dom";

function Image(props){
    return (
      <img className="Image" src = {props.src } height='210' >
         <a onClick={this.handleClick} style={{cursor:'pointer', color: 'blue', marginLeft: 60}} >Byt profilbild</a>
      </img>
     
    ); 
}

export default Image;