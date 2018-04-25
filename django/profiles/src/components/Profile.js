import React, {Component} from "react";
import ReactDOM from "react-dom";

function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <h4 className="Email">{props.person.email}</h4>
        <p className="Bio">{props.person.biography}</p>
        <div className="Quote">
          <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.source}</div>
        </div>
        
      </div>
    );
}

export default Profile;