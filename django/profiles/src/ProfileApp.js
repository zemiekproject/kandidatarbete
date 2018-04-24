import React, {Component} from "react";
import ReactDOM from "react-dom";
import Image from "./components/Image";
import Profile from "./components/Profile";

class ProfileApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Jacob Rutfors',
        biography: '22 year old superhuman / Professional Developer living in Uppsala. Originally from Luleå, Sweden. Love to pet cats.',
      },
      image: '/static/graphics/one.png',
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

ReactDOM.render(<ProfileApp />, document.getElementById('root'));

export default ProfileApp;