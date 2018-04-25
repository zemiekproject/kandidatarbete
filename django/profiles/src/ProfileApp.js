import React, {Component} from "react";
import ReactDOM from "react-dom";
import Image from "./components/Image";
import Profile from "./components/Profile";
import { Container, Row, Col } from 'reactstrap';

class ProfileApp extends Component{

  constructor(props) {
    super(props);
    const id = document.getElementById('name').innerHTML;
    const email = document.getElementById('email').innerHTML;
    this.state = {
      person: {
        name: id,
        email: email,
        biography: '22 year old superhuman / Professional Developer living in Uppsala. Originally from Luleå, Sweden. Love to pet cats and recite cheesy quotes from average movies.',
      },
      image: 'https://thumbs.dreamstime.com/b/cartoon-funny-turtle-traveling-illustration-white-background-63678763.jpg',
      quote: {
        content: 'Beautiful things don\'t ask for attention',
        source: 'The Secret Life of Walter Mitty'
      }
      
    };
  }
  render() {
    return(
      <div className="ProfileApp">
        <Container>
          <Row>
            <Col sm='3'>
                <Image src={this.state.image} />
            </Col>
            <Col sm='8'>
              <Profile person={this.state.person} quote={this.state.quote} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<ProfileApp />, document.getElementById('root'));

export default ProfileApp;