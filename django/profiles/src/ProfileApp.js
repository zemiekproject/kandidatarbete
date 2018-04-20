import React, {Component} from "react";
import ReactDOM from "react-dom";
import Image from "./components/Image";
import Profile from "./components/Profile";

class ProfileApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Jack-Edward Oliver',
        biography: '26 year old Designer / Developer living in Stockholm. Originally from Oxford, England. Love to make stuff.',
      },
      image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
      quote: {
        content: 'Beautiful things don\'t ask for attention',
        source: 'The Secret Life of Walter Mitty'
      }
      
    };
  }
  render() {
    return(
      <div className="ProfileApp">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}


export default ProfileApp;